import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service"
import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getAllUsers() {
      return this.userService.getAllUsers();
    }
  
    @Get(':userId')
    async getUserById(@Param('userId') userId: number) {
      return this.userService.getUserById(userId);
    }

    @Get('/findByName/:fullName')
    async findUserByName(@Param('fullName') fullName: string) {
      try {
        return await this.userService.findUserByName(fullName);
      } catch (e) {
        throw new HttpException(`Error: ${e.message}`, HttpStatus.BAD_REQUEST);
      }
    }

    @Post('create')
    createUser(@Body() dto: CreateUserDto) {
         return this.userService.createUser(dto)
    }


    @Delete(':userId')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteUser(@Param('userId') userId: number) {
      return this.userService.deleteUser(userId);
    }
}
