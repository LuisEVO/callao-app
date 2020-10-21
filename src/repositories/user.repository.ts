import { UserDocument } from '../interfaces';
import { User } from '../models';
import { GenericRepository } from '.';
import { Model } from 'mongoose';
import moment from 'moment';

export default class extends GenericRepository<
  Model<UserDocument>,
  UserDocument
> {
  constructor() {
    super(User);
  }

  async getUserByPhone(phone: number): Promise<UserDocument> {
    const user: UserDocument = await User.findOne({ phone });
    return user;
  }

  async updateUserValidationCode(phone: number): Promise<UserDocument> {
    const user: UserDocument = await User.findOne({ phone });
    user.validationCode = Math.floor(Math.random() * (9999 - 1111 + 1) + 1111);
    user.validationExpirationDate = moment().add(5, 'minutes');
    user.save()
    return user;
  }
}
