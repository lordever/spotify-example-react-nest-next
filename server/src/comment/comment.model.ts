import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Track} from "../track/track.model";

interface CommentsCreationAttribute {
    username: string;
    text: string;
}

@Table({tableName: "comments"})
export class Comment extends Model<Comment, CommentsCreationAttribute> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    username: string;

    @Column({type: DataType.STRING, allowNull: false})
    text: string;

    @ForeignKey(() => Track)
    @Column({type: DataType.INTEGER, allowNull: false})
    trackId: string;

    @BelongsTo(() => Track)
    track: Track;
}
