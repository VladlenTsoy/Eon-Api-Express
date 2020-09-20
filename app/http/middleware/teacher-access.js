module.exports.teacherAccessMiddleware = async (req, res, next) => {
    if (req.user.access !== 'teacher')
        res.status(500).send('not teacher');

    next();
}