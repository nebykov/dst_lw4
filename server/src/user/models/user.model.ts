import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
    full_name: string;
    date_of_birth: Date;
}

@Table({ tableName: "users", timestamps: false })
export class User extends Model<User, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    user_id: number

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    full_name: string;

    @Column({ type: DataType.DATE, allowNull: true })
    date_of_birth: Date;
}