import { IsString, IsNotEmpty, IsDefined, ValidateNested } from 'class-validator';
import { CompanyDto } from './company.dto';
 
export class ParticipantDto {
  @IsString()
  @IsNotEmpty()
  participant_name: string;
 
  @IsString()
  participant_phone: string;

  @IsString()
  participant_email: string;

  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  company: CompanyDto;
}