import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import priceRoutes from './getPrice.routes';

const routes = Router();

routes.use(
  '/getPrice',
  celebrate({
    [Segments.BODY]: {
      initialDate: Joi.date().required(),
      finalDate: Joi.date().required(),
      underEleven: Joi.number(),
      underSix: Joi.number(),
      single: Joi.number(),
      couple: Joi.number(),
    },
  }),
  priceRoutes
);

export default routes;
