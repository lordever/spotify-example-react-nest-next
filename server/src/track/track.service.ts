import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Track} from "./track.model";
import {Comment} from "../comment/comment.model";
import {CreateTrackDto} from "./dto/create-track.dto";
import {CreateCommentDto} from "./dto/create-comment.dto";

@Injectable()
export class TrackService {

    constructor(@InjectModel(Track) private trackModel: typeof Track,
                @InjectModel(Comment) private commentModel: typeof Comment) {
    }

    async create(trackDto: CreateTrackDto): Promise<Track> {
        const track = await this.trackModel.create({...trackDto, comments: [], listens: 0});
        return track;
    }

    async getAll(): Promise<Track[]> {
        const tracks = await this.trackModel.findAll({include: {all: true}});
        return tracks;
    }

    async getOne(id: string): Promise<Track> {
        const track = await this.trackModel.findOne({where: {id}, include: {all: true}});
        return track;
    }

    async remove(id: string): Promise<number> {
        const track = await this.trackModel.findOne({where: {id}});
        await track.destroy();
        return track.id;
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findOne({where: {id: dto.trackId}, include: {all: true}});

        const comment = await this.commentModel.create({...dto});
        track.comments.push(comment);
        await track.save();
        return comment;
    }
}
