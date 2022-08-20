import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";

import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {Track} from "./track/track.model";
import {Comment} from "./comment/comment.model";
import { FileService } from './file/file.service';
import { FileModule } from './file/file.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [
                Track,
                Comment
            ],
            autoLoadModels: true
        }),
        TrackModule,
        FileModule
    ]
})
export class AppModule {
}
