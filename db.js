
const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017";
const User = require('./schema/User');

async function createNewUser() {
        const checkMultipleUsers1 = await User.findOne({ email: 'test@new.com' });
        if (!checkMultipleUsers1) {
            const user= new User({email: 'test@new.com',username: 'test',password: 'test123'});
            const result = user.save(function(err, data) {
                if (err) return console.error(err);
                console.log("done", data)
            });
            console.log(result);
        }
   else{
    console.log("collection exist");
   }
}

const connectToMongo = () => {
    mongoose.connect(mongoURI, { dbName: 'webauth' }, () => {
        console.log("Connected To Mongo Successfully!!");
    });


createNewUser();

};


module.exports = connectToMongo;