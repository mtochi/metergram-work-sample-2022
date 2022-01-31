import { IsString, IsNotEmpty, IsDate, ValidateNested, IsDefined, IsNumber, IsJSON} from 'class-validator';
import {ParticipantDto} from './participant.dto';
 
export class EnrollsDto {
  @IsString()
  @IsNotEmpty()
  course_name: string;
 
  @IsDate()
  date: Date;

  @IsNumber()
  @IsNotEmpty()
  course_id: number;

  @IsString()
  @ValidateNested()
  @IsNotEmpty()
  participants: string;

  @IsString()
  @IsNotEmpty()
  participant_name: string;
 
  @IsString()
  participant_phone: string;

  @IsString()
  participant_email: string;

  @IsString()
  @IsNotEmpty()
  company_phone: string;

  @IsString()
  @IsNotEmpty()
  company_email: string;

  @IsString()
  @IsNotEmpty()
  company_name: string;

  // @IsDefined()
  // @IsNotEmpty()
  // @ValidateNested()
  // participant: ParticipantDto;
}