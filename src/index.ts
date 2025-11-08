import app from './app';
import { config } from './config';
import { connectDatabase } from './db/setup';

const PORT = config.port;

console.error( process.env.DATABASE_URL )
app.listen( PORT, async () => {
    await connectDatabase();
    console.log(`Server is running at http://localhost:${PORT}`);
});