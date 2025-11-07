
import 'dotenv/config'
import { Config } from '../types'

export const config : Config = {
    port    :   Number(process.env.PORT) || 3001,
    databaseUrl :   process.env.DATABASE_URL || "",
    jwt_secret  :   process.env.JWT || "",
}