import { Controller, Post, Body } from '@nestjs/common';
import { AirtimeService } from './airtime.service';
import { CreateAirtimeDto } from './create-airtime.dto';

@Controller('airtime')
export class AirtimeController {
  constructor(private readonly airtimeService: AirtimeService) {}

  @Post('purchase')
  async purchaseAirtime(@Body() createAirtimeDto: CreateAirtimeDto) {
    return await this.airtimeService.createAirtimeTransaction(
      createAirtimeDto.provider,
      createAirtimeDto.phoneNumber,
      createAirtimeDto.amount,
    );
  }
}
