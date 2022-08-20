import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";


const start = async () => {
    try {
        const server = await NestFactory.create(AppModule);
        const PORT = process.env.port || 5000;
        server.enableCors();
        await server.listen(PORT, () => {
            console.log(`Server runs on port: ${PORT}`);
        });
    } catch (e) {
        console.error("Something went wrong with server starting...: " + e)
    }
}

start();
