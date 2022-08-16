import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";

import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {Track} from "./track/track.model";
import {Comment} from "./comment/comment.model";

@Module({
    imports: [
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
        TrackModule
    ]
})
export class AppModule {
}
