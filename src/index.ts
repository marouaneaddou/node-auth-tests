import app from './app';
import { config } from './config';
import { connectDatabase } from './db/setup';
import { setupSwageer } from './docs/setup';

const PORT = config.port;

const startServer = async ( ) => {
    try {
        await connectDatabase();
        if (process.env.NODE_ENV !== "production") {
            setupSwageer();
        }
    
        app.listen(PORT, () => {
          console.log(`Server is running at http://localhost:${PORT}`);
          if (process.env.NODE_ENV !== "production") {
            console.log(`Swagger is running at http://localhost:${PORT}/api/docs`);
          }
        });
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
}

startServer();