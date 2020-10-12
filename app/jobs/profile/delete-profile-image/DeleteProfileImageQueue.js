const Bull = require('bull');
const {redis, defaultJobOptions, settings, limiter} = require('../../../../config/bull-queue.config');
const {DeleteImage} = require('../../../services/profile/ProfileImageService');

/**
 * Удаление фотограции на очередь
 * @param userId
 * @return {Promise<void>}
 * @constructor
 */
const DeleteProfileImageQueue = async ({image}) => {
    // Создание очереди
    const Queue = new Bull('DeleteProfileImage', redis, defaultJobOptions, settings, limiter);

    // Настройка очереди
    const jobOptions = {
        image: image,
        delay: 0,
        attempts: 3,
    };

    // Действие очереди
    Queue.process(async ({data}) => {
        return await DeleteImage(data.image);
    });

    // Запуск очереди
    Queue.add(jobOptions);
}

module.exports = {DeleteProfileImageQueue}