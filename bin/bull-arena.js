const Arena = require('bull-arena');
const express = require('express');
const Bull = require('bull');

const router = express.Router();

const defaultHostConfig = {
    hostId: 'localhost',
    redis: {
        host: '127.0.0.1',
        port: 6379,
    },
};

const queueNames = ['CheckNotificationCount', 'PasswordReset', 'DeleteProfileImage'];

const arena = Arena({
    Bull,
    queues: queueNames.map(q => ({
        name: q,
        ...defaultHostConfig,
    })),
});

router.use('/', arena);