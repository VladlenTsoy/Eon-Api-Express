const moment = require('moment')
const Jimp = require('jimp')
const path = require('path');
const {logger} = require("config/logger.config");
const fs = require('fs');

/**
 * Загрузка изображение в Base64
 * @param image
 * @param id
 * @return {Promise<string>}
 * @constructor
 */
const UploadBase64 = async (image, id) => {
    try {
        const buf = Buffer.from(image.replace(/^data:image\/\w+;base64,/, ""), 'base64')

        const imagePath = `images/users/${id}/profile.${moment().valueOf()}.png`;
        const fullImagePath = path.join(__dirname, `../../../public/${imagePath}`);

        const img = await Jimp.read(buf)
        await img.quality(75)
        if (img.getWidth() > 250)
            await img.resize(250, Jimp.AUTO)
        await img.writeAsync(fullImagePath)
        return imagePath
    } catch (e) {
        logger.error(e.message);
    }
}

/**
 * Загрузка изображения файла
 * @param image
 * @param id
 * @return {Promise<string>}
 * @constructor
 */
const UploadImage = async (image, id) => {
    try {
        const imagePath = `images/users/${id}/profile.${moment().valueOf()}.png`;
        const fullImagePath = path.join(__dirname, `../../../public/${imagePath}`);

        const img = await Jimp.read(image.data)
        if (img.getWidth() > 250)
            await img.resize(250, Jimp.AUTO)
        await img.writeAsync(fullImagePath)
        return imagePath
    } catch (e) {
        logger.error(e.message);
    }
}

/**
 * Удаление фотограции пользователя по ID
 * @param image
 * @return {Promise<void>}
 * @constructor
 */
const DeleteImage = async (image) => {
    try {
        const imagePath = path.join(__dirname, `../../../public/${image}`)

        if (image && image.indexOf('default') === -1)
            if (await fs.existsSync(imagePath))
                await fs.unlinkSync(imagePath)
    } catch (e) {
        logger.error(e.message);
    }
}

module.exports = {UploadBase64, DeleteImage, UploadImage}