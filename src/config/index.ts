
// import 'dotenv/config';
// import { Config } from '../types';

// let port;

// switch ( process.env.NODE_ENV ) {
//     case 'production':
//     process.env.DATABASE_URL = process.env.DATABASE_URL_PRODUCTION!;
//     port = Number(process.env.PORT_PRODUCTION) || 8080;
//     break;
//   case 'test':
//     process.env.DATABASE_URL = process.env.DATABASE_URL_TEST!;
//     port = Number(process.env.PORT_TEST) || 4001;
//     break;
//   default:
//     process.env.DATABASE_URL = process.env.DATABASE_URL_DEVELOPMENT!;
//     port = Number(process.env.PORT_DEVELOPMENT) || 3001;
// }

// export const config : Config = {
//     port        :   port,
//     databaseUrl :   process.env.DATABASE_URL,
//     jwt_secret  :   process.env.JWT_SECRET      ||  "",
    
// }

import dotenv from 'dotenv';
import { Config } from '../types'

dotenv.config({
    path : process.env.NODE_ENV === 'production'
      ? '.env.production'
      : process.env.NODE_ENV === 'test'
      ? '.env.test'
      : '.env', override: true })

export const config : Config = {
    port        :   Number(process.env.PORT)    ||  3001,
    databaseUrl :   process.env.DATABASE_URL    ||  "",
    jwt_secret  :   process.env.JWT_SECRET      ||  "",
    
}