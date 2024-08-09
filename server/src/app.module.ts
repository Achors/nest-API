import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirtimeController } from './airtime/airtime.controller';
import { AirtimeService } from './airtime/airtime.service';
import { AirtimeModule } from './airtime/airtime.module';

@Module({
  imports: [AirtimeModule],
  controllers: [AppController, AirtimeController],
  providers: [AppService, AirtimeService],
})
export class AppModule {}
