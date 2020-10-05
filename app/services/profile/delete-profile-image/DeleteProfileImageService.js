const {logger} = require("config/logger.config");
const path = require('path');
const fs = require('fs');

/**
 * Удаление фотограции пользователя по ID
 * @param userId
 * @return {Promise<void>}
 * @constructor
 */
const DeleteImage = async ({image}) => {
    try {
        const imagePath = path.join(__dirname, `../../../../public/${image}`)

        if (image && image.indexOf('default') === -1)
            if (await fs.existsSync(imagePath))
                await fs.unlinkSync(imagePath)
    } catch (e) {
        logger.error(e.message);
    }
}

module.exports = {DeleteImage}