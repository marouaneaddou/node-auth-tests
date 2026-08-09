
import express from 'express';

import authRouter   from './routers/auth.route';
// import adminRouter  from './routers/admin.route';

import { errorHandler } from './middlewares/error.middleware';
const app = express();

app.use( express.json() );

app.use( '/api/v1/auth/', authRouter );
// app.use('/api/admin', adminRouter );

app.use( errorHandler );

export default app;