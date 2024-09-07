import mongoose from 'mongoose';
import User from '../model/wallet-schema.js'; 

const connectDB = async () => {
    const url = "mongodb://127.0.0.1:27017/Vuexy";
    mongoose.set('strictQuery', true);

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        
        await User.deleteMany({});
        console.log('Existing data cleared');

        const users = [
            { username: 'john_doe', referredID: 1001, status: 'paid', value: 100, earnings: 50 },
            { username: 'jane_smith', referredID: 1002, status: 'unpaid', value: 200, earnings: 150 },
            { username: 'alice_jones', referredID: 1003, status: 'paid', value: 300, earnings: 200 },
            { username: 'bob_brown', referredID: 1004, status: 'unpaid', value: 400, earnings: 250 },
            { username: 'charlie_white', referredID: 1005, status: 'paid', value: 500, earnings: 300 },
            { username: 'david_clark', referredID: 1006, status: 'unpaid', value: 600, earnings: 350 },
            { username: 'emily_harris', referredID: 1007, status: 'paid', value: 700, earnings: 400 },
            { username: 'frank_martin', referredID: 1008, status: 'unpaid', value: 800, earnings: 450 },
            { username: 'grace_lewis', referredID: 1009, status: 'paid', value: 900, earnings: 500 },
            { username: 'henry_taylor', referredID: 1010, status: 'unpaid', value: 1000, earnings: 550 }
        ];

        await User.insertMany(users);
        console.log('Data successfully inserted');
        
    } catch (err) {
        console.error('Failed to connect, clear or insert data:', err);
    }
};

export default connectDB;
