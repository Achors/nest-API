import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreateAirtimeDto {
  @IsNotEmpty()
  @IsString()
  provider: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  amount: number;
}
