
import dotenv from 'dotenv';
import { Config } from '../types'

dotenv.config({
    path : process.env.NODE_ENV === 'production'
      ? '.env.production'
      : process.env.NODE_ENV === 'test'
      ? '.env.test'
      : '.env',
})

export const config : Config = {
    port        :   Number(process.env.PORT)    ||  3001,
    databaseUrl :   process.env.DATABASE_URL    ||  "",
    jwt_secret  :   process.env.JWT_SECRET      ||  "",
    
}