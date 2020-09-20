const Bull = require('bull');
const {PasswordRecovery} = require("../../../services/mailer/auth/password-recovery/PasswordRecovery");
const {redis, defaultJobOptions, settings, limiter} = require('../../../../config/bull-queue.config');

module.exports.PasswordResetToEmailQueue = async ({email, code}) => {
    // Создание очереди
    const Queue = new Bull('PasswordReset', redis, defaultJobOptions, settings, limiter);

    // Настройка очереди
    const jobOptions = {
        delay: 0,
        attempts: 3,
    };

    // Действие очереди
    Queue.process(async () => {
        return await PasswordRecovery({email, code});
    });

    // Запуск очереди
    Queue.add(jobOptions);
};