import mongoose, { Schema } from 'mongoose';
import { UserDocument } from '../interfaces';

const schema: Schema = new Schema({
  nick: {
    type: String,
    required: true,
    trim: true,
  },

  phone: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },

  validationCode: {
    type: Number,
    default: null
  },

  validationExpirationDate: {
    type: Date,
    default: null,
  },

});

export default mongoose.model<UserDocument>('User', schema);
