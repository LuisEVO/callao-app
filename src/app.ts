import express, { Application, Request, Response } from 'express';
import { cors } from 'cors';
import { AuthController } from './controllers';
import { ControllerRoute } from './interfaces';
import { UserRepository } from './repositories';
import { attachRoutes } from './utils';

const app: Application = express();

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const controllers: ControllerRoute[] = [
  { class: AuthController, dependencies: [UserRepository] },
];

attachRoutes(app, controllers);

app.use((req: Request, res: Response) => {
  res.status(404).send('Path not found');
});

export default app;
