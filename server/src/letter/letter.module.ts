import { Module } from '@nestjs/common';
import { LetterController } from './letter.controller';
import { LetterService } from './letter.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Letter } from './models/letter.module';

@Module({
  controllers: [LetterController],
  providers: [LetterService],
  imports: [
    SequelizeModule.forFeature([Letter]),
    LetterModule
  ],
  exports: [SequelizeModule]
})
export class LetterModule {}
