import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userModel: typeof User) { }

    async createUser(dto: CreateUserDto): Promise<User> {
        try {
            const user = await this.userModel.create({ full_name: dto.fullName, date_of_birth: dto.dateOfBirth })
            return user
        } catch (e) {
            throw new HttpException(`error ${e}`, HttpStatus.BAD_REQUEST)
        }
    }

    async findUserByName(fullName: string): Promise<User | null> {
        try {
          const user = await this.userModel.findOne({
            where: { full_name: fullName },
          });
    
          return user;
        } catch (e) {
          throw new HttpException(`Error: ${e}`, HttpStatus.BAD_REQUEST);
        }
      }


    async getAllUsers() {
        try {
            const users = await this.userModel.findAll()
            return users
        } catch (e) {
            throw new HttpException(`error ${e}`, HttpStatus.BAD_REQUEST)
        }
    }

    async getUserById(userId: number): Promise<User> {
        try {
            const user = await this.userModel.findByPk(userId)

            return user
        } catch (e) {
            throw new HttpException(`error ${e}`, HttpStatus.BAD_REQUEST)
        }
    }


    async deleteUser(userId: number) {
        try {
            const user = await this.userModel.destroy({where: {user_id: userId}})

            return user
        } catch (e) {
            throw new HttpException(`error ${e}`, HttpStatus.BAD_REQUEST)
        }
    }
}
