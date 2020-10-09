const {Olympiad} = require('models/olympiad/Olympiad');
const {OlympiadStep} = require('models/olympiad/OlympiadStep');
const {OlympiadTask} = require('models/olympiad/OlympiadTask');
const {OlympiadChangeStatusQueue} = require('jobs/teacher/olympiad/OlympiadChangeStatusQueue');
const moment = require('moment');
const {body, validationResult} = require('express-validator');

const CreateValidate = [
    body('title').not().isEmpty().withMessage('!'),
    body('description').not().isEmpty().withMessage('!'),
    body('access').not().isEmpty().withMessage('!'),
    body('exercises').not().isEmpty().withMessage('!'),
    body('steps').not().isEmpty().withMessage('!'),
    body('discipline_id').not().isEmpty().withMessage('!'),
];

const Create = async (req, res) => {
    // Ошибка валидации
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});

    try {
        const user = req.user
        const {title, description, access, discipline_id, steps, exercises} = req.body

        //
        const status = steps[0] ? moment().isBefore(steps[0].start_at) ? 'waiting' : 'processing' : 'canceled'

        const olympiad = await Olympiad.query()
            .insertAndFetch({
                title,
                description,
                access,
                status,
                discipline_id,
                teacher_id: user.id
            })

        if (status === 'waiting')
            await OlympiadChangeStatusQueue({firstStep: steps[0], olympiadId: olympiad.id})

        await Promise.all(
            steps.map(async (step, key) => {
                const olympiadStep = await OlympiadStep.query()
                    .insertAndFetch({
                        title: step.title,
                        step: key,
                        olympiad_id: olympiad.id,
                        start_at: moment(step.start_at).format('YYYY-MM-DD HH:mm:ss'),
                        end_at: moment(step.end_at).format('YYYY-MM-DD HH:mm:ss')
                    })

                if (exercises && exercises[key])
                    await Promise.all(exercises[key].map(async (exercise) => {
                        await OlympiadTask.query().insert({
                            settings: exercise.settings,
                            task_id: exercise.task_id,
                            step_id: olympiadStep.id,
                        })
                    }))
            })
        )

        return res.send({status: 'success'})
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

module.exports = {CreateValidate, Create}