import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { LetterModule } from './letter/letter.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/models/user.model';
import { Letter } from './letter/models/letter.module';

@Module({
  imports: [
    UserModule, 
    LetterModule,
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'cyberDodik2077',
      database: 'lw3letters',
      models: [User, Letter],
      autoLoadModels: true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
