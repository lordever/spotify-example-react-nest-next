import {Module} from "@nestjs/common";
import {TrackController} from "./track.controller";
import {TrackService} from "./track.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Track} from "./track.model";
import {Comment} from "../comment/comment.model";
import {FileService} from "../file/file.service";

@Module({
    controllers: [TrackController],
    providers: [TrackService, FileService],
    imports: [
        SequelizeModule.forFeature([Track, Comment])
    ],
})
export class TrackModule {
}
