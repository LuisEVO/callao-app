import { Response } from 'express';
import { IError } from '../interfaces';

export default class {
  static sentOk(res: Response, data?: object) {
    res.status(200).json(data);
  }

  static sentErrorDatabase(res: Response, message: object) {
    res.status(500).json({
      status: 500,
      message,
    });
  }

  static sentError(res: Response, message: string) {
    return res.status(500).json(message);
  }

  static sentErrorServer(res: Response, err: IError) {
    const dataError: any = {
      status: err.status,
      message: err.message,
    };

    if (process.env.NODE_ENV === 'development') {
      dataError.stack = err.stack;
    }

    res.status(err.status).json(dataError);
  }

  static sendErrorParameters(res: Response, error: any) {
    console.log(error);
    res.status(411).json({ status: 411, error });
  }
}
