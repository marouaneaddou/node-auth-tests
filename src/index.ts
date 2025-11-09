import app from './app';
import { config } from './config';
import { connectDatabase } from './db/setup';
import { setupSwageer } from './docs/setup';

const PORT = config.port;

app.listen( PORT, async () => {
    await connectDatabase();
    console.log(`Server is running at http://localhost:${PORT}`);
    setupSwageer(  );
    console.log( `Swagger is running at http://localhost:${PORT}/api/docs`);
});