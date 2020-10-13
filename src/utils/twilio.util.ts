import twilio from 'twilio';
import yenv from 'yenv';

const env = yenv();

export default class {

  static send(phone: number, message: string) {
    console.log(env.TWILIO.SID);
    console.log(env.TWILIO.TOKEN);
    const client = twilio(env.TWILIO.SID, env.TWILIO.TOKEN);

    return client.messages
        .create({
          body: message,
          from: '+14809332398',
          to: `+51${phone}`
        })
  }
}
