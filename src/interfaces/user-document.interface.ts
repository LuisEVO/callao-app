import { Moment } from 'moment';
import { Document } from 'mongoose';

export default interface document extends Document {
  nick: string;
  phone: number;
  validationCode: number;
  validationExpirationDate: Moment;
}
