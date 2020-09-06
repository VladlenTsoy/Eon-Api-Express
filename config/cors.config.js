const cors = require('cors')
const corsConfig = cors({
    origin: 'http://localhost:3000',
    credentials: true,
});

module.exports = {corsConfig}