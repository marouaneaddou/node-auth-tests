import app from './app';
import 'dotenv/config';
import { connectDatabase } from './db/setup';

const PORT = process.env.PORT;

console.error( process.env.DATABASE_URL)
app.listen( PORT, async () => {
    await connectDatabase();
    console.log(`Server is running at http://localhost:${PORT}`);
});