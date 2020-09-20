const Bull = require('bull');
const {redis, defaultJobOptions, settings, limiter} = require('../../../../config/bull-queue.config');
const {EmailConfirmation} = require('../../../services/mailer/auth/email-confirmation/EmailConfirmation');

const EmailConfirmationQueue = async ({email, code}, language) => {
    // Создание очереди
    const Queue = new Bull('EmailConfirmation', redis, defaultJobOptions, settings, limiter);

    // Настройка очереди
    const jobOptions = {
        delay: 0,
        attempts: 3,
    };

    // Действие очереди
    Queue.process(async () => {
        return await EmailConfirmation({email, code}, language);
    });

    // Запуск очереди
    Queue.add(jobOptions);
}

module.exports = {EmailConfirmationQueue}
