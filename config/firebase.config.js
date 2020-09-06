const admin = require('firebase-admin');
const serviceAccount = require('../eon-cabinet-b273ca690c3c.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db