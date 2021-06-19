const mongoose = require('mongoose');
require('dotenv/config')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.REACT_APP_MONGO_URI,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true
            },
        );
        console.log('DB Connected' + " " + mongoose.connection.host);

    } catch (err) {
        console.error(err.message);
        //EXIT PROCESS ON FAILURE
        process.exit(1);
    }
};

module.exports = connectDB;