import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/user/models/user.model';

interface LetterAttributes {
    letter_id: number;
    sender: User;
    sender_id: number;
    recipient: User;
    recipient_id: number;
    subject: string;
    text: string;
    send_date: Date;
  }

@Table({ tableName: "letters", timestamps: false })
export class Letter extends Model<Letter, LetterAttributes> {

    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    letter_id: number

    @BelongsTo(() => User, { foreignKey: 'sender_id', onDelete: 'CASCADE' })
    sender: User;

    @ForeignKey(() => User)
    @Column
    sender_id: number;


    @BelongsTo(() => User,{ foreignKey: 'recipient_id', onDelete: 'CASCADE' })
    recipient: User;

    @ForeignKey(() => User)
    @Column
    recipient_id: number;

    @Column({type: DataType.STRING})
    subject: string

    @Column({type: DataType.STRING, allowNull: false})
    text: string

    @Column({ type: DataType.DATE, allowNull: true })
    send_date: Date;
}