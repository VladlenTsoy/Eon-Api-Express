const Bull = require('bull');
const {redis, defaultJobOptions, settings, limiter} = require('../../../../config/bull-queue.config');
const ChatService = require('../../../services/settings/ChatService');

const CheckNotificationCountQueue = async (socket, data) => {
    // Создание очереди
    const Queue = new Bull('CheckNotificationCount', redis, defaultJobOptions, settings, limiter);

    // Настройка очереди
    const jobOptions = {
        delay: 0,
        attempts: 3,
    };

    // Действие очереди
    Queue.process(async () => {
        return await ChatService.CheckNotificationCount(socket, data);
    });

    // Запуск очереди
    Queue.add(jobOptions);
}

module.exports = {CheckNotificationCountQueue}