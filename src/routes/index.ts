import { application, Router } from 'express';
import testsRouter from './tests.routes';
import listaRouter from './listas.routes';

const routes = Router();

routes.use('/tests', testsRouter);

routes.use('/lista', listaRouter);

export default routes;
