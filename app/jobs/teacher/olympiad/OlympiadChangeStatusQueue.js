const Bull = require('bull');
const moment = require('moment');
const {Olympiad} = require('models/olympiad/Olympiad');
const {redis, defaultJobOptions, settings, limiter} = require('../../../../config/bull-queue.config');

const OlympiadChangeStatusQueue = async ({olympiadId, firstStep}) => {
    // Создание очереди
    const Queue = new Bull('OlympiadChangeStatus', redis, defaultJobOptions, settings, limiter);

    // Настройка очереди
    const jobOptions = {
        olympiadId: olympiadId,
        firstStep: firstStep,
        delay: moment(firstStep.start_at).valueOf() - moment().valueOf(),
        attempts: 3,
    };

    // Действие очереди
    Queue.process(async ({data}) => {
        return Olympiad.query().updateAndFetchById(data.olympiadId, {status: 'processing'});
    });

    // Запуск очереди
    Queue.add(jobOptions);
}

module.exports = {OlympiadChangeStatusQueue}