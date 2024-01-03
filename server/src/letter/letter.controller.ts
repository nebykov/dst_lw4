import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LetterService } from './letter.service';
import { Letter } from './models/letter.module';

@Controller('letter')
export class LetterController {
    constructor(private readonly letterService: LetterService) { }

    @Post('/send')
    async sendLetter(
        @Body('senderId') senderId: number,
        @Body('recipientId') recipientId: number,
        @Body('subject') subject: string,
        @Body('text') text: string,
    ): Promise<Letter> {
        return this.letterService.sendLetter(senderId, recipientId, subject, text);
    }

    @Get('/received/:recipientId')
    async getReceivedLetters(@Param('recipientId') recipientId: number): Promise<Letter[]> {
        return this.letterService.getReceivedLetters(recipientId);
    }

    @Get('/sent/:senderId')
    async getSentLetters(@Param('senderId') senderId: number): Promise<Letter[]> {
        return this.letterService.getSentLetters(senderId);
    }
}
