import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Track} from "./track.model";
import {Comment} from "../comment/comment.model";
import {CreateTrackDto} from "./dto/create-track.dto";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {FileService, FileType} from "../file/file.service";
import {Op} from "sequelize";

@Injectable()
export class TrackService {

    constructor(@InjectModel(Track) private trackModel: typeof Track,
                @InjectModel(Comment) private commentModel: typeof Comment,
                private fileService: FileService) {
    }

    async create(trackDto: CreateTrackDto, picture, audio): Promise<Track> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const track = await this.trackModel.create({
            ...trackDto,
            comments: [],
            listens: 0,
            audio: audioPath,
            picture: picturePath
        });
        return track;
    }

    async getAll(count: number = 10, offset: number = 0): Promise<Track[]> {
        const tracks = await this.trackModel.findAll({include: Comment, limit: count, offset});
        return tracks;
    }

    async getOne(id: string): Promise<Track> {
        const track = await this.trackModel.findOne({where: {id}, include: Comment});
        return track;
    }

    async remove(id: string): Promise<number> {
        const track = await this.trackModel.findOne({where: {id}});
        await track.destroy();
        return track.id;
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findOne({where: {id: dto.trackId}, include: Comment});

        const comment = await this.commentModel.create({...dto});
        track.comments.push(comment);
        await track.save();
        return comment;
    }

    async listen(id: number) {
        const track = await this.trackModel.findOne({where: {id}});
        track.listens += 1;

        track.save();

        return track.listens;
    }

    async search(query: string): Promise<Track[]> {
        const searchAttribute = query ? {
            where: {
                name: {
                    [Op.iRegexp]: query
                }
            }
        } : null;

        const tracks = await this.trackModel.findAll(searchAttribute);

        return tracks;
    }
}
