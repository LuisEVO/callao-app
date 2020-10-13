import { genericDatabase } from '../interfaces/database.interface';
import mongoose from 'mongoose';
import { Message } from '../utils';
import yenv from 'yenv';

const env = yenv();

export default class implements genericDatabase {
  async initialize() {
    Message.log('Starting DB');

    const promiseInitialize = new Promise((resolve, reject) => {
      const connectionString = `mongodb+srv://${env.DATABASE.USER}:${env.DATABASE.PASS}@${env.DATABASE.HOST}/${env.DATABASE.DB}?retryWrites=true&w=majority`         

      const options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        poolSize: 10,
      };

      const callback = (error: any) => {
        if (error) {
          Message.log('Error DB');

          reject(error);
        } else {
          Message.log('Connected to MongoDB');
          resolve();
        }
      };

      mongoose.connect(connectionString, options, callback);
    });

    await promiseInitialize;
  }

  disconnect() {
    mongoose.disconnect();
  }
}
