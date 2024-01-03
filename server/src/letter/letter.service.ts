import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Letter } from './models/letter.module';

@Injectable()
export class LetterService {
    constructor(@InjectModel(Letter) private letterModel: typeof Letter) { }

    async sendLetter(senderId: number, recipientId: number, subject: string, text: string): Promise<Letter> {
        try {
            const sendDate = new Date();
            const letter = await this.letterModel.create({
                sender_id: senderId,
                recipient_id: recipientId,
                subject: subject,
                text: text,
                send_date: sendDate,
            });

            return letter;
        } catch (e) {
            throw new HttpException(`Error: ${e}`, HttpStatus.BAD_REQUEST);
        }
    }

    async getReceivedLetters(recipientId: number): Promise<Letter[]> {
        try {
            const receivedLetters = await this.letterModel.findAll({
                where: { recipient_id: recipientId },
            });

            return receivedLetters;
        } catch (e) {
            throw new HttpException(`Error: ${e}`, HttpStatus.BAD_REQUEST);
        }
    }


    async getSentLetters(senderId: number): Promise<Letter[]> {
        try {
            const sentLetters = await this.letterModel.findAll({
                where: { sender_id: senderId },
            });

            return sentLetters;
        } catch (e) {
            throw new HttpException(`Error: ${e}`, HttpStatus.BAD_REQUEST);
        }
    }
}
