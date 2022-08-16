import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {CreateCommentDto} from "./dto/create-comment.dto";

@Controller("/tracks")
export class TrackController {
    constructor(private trackService: TrackService) {
    }

    @Post()
    create(@Body() dto: CreateTrackDto) {
        return this.trackService.create(dto);
    }

    @Get()
    getAll() {
        return this.trackService.getAll();
    }

    @Get(":id")
    getOne(@Param("id") id: string) {
        return this.trackService.getOne(id);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.trackService.remove(id);
    }

    @Post("/comment")
    addComment(@Body() dto: CreateCommentDto) {
        return this.trackService.addComment(dto);
    }
}
