import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Comment} from "../comment/comment.model";

interface TrackCreationAttribute {
    name: string;
    artist: string;
    track: string;
    picture: string;
    audio: string;
    listens: number;
    comments: Comment[];
}

@Table({tableName: "tracks"})
export class Track extends Model<Track, TrackCreationAttribute> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: true})
    text: string;

    @Column({type: DataType.STRING, allowNull: true})
    picture: string;

    @Column({type: DataType.STRING, allowNull: true})
    audio: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    listens: number;

    @HasMany(() => Comment)
    comments: Comment[];
}
