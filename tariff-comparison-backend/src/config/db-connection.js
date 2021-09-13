const mongoose = require('mongoose');



const dbConnection = async() => {

    try {

        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    
        console.log('Connection db work it');

    } catch (error) {
        console.log(error);
        throw new Error('Error with connection db');
    }


}



module.exports = {
    dbConnection
}
