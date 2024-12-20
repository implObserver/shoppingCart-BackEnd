import 'dotenv/config';
import mongoose from 'mongoose';

const mongoDB = process.env.MONGODB_URI2 || 'default_uri';
console.log(process.env.MONGODB_URI2)
export const connectLibraryDB = () => {
  mongoose
    .connect(mongoDB)
    .then(() => {
      console.log('Connected To database :)');
    })
    .catch((err) => console.log('error', err));
};

export const disconnectLibraryDB = () => {
  mongoose.connection.close();
  console.log('Debug: Closing mongoose');
};
