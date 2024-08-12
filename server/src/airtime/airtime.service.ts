import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AirtimeService {
  private prisma = new PrismaClient();

  async createAirtimeTransaction(
    provider: string,
    phoneNumber: string,
    amount: number,
  ) {
    return await this.prisma.airtimeTransaction.create({
      data: {
        provider,
        phoneNumber,
        amount,
      },
    });
  }
}
