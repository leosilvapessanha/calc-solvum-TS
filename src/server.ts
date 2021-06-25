import express from 'express';
import { errors } from 'celebrate';
import cors from 'cors';

import routes from './routes';
import './database';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

const port = process.env.PORT || 3333;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('🤘🤘🤘Back-end running mate!🤘🤘🤘');
});
