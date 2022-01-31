import { IsString, IsNotEmpty } from 'class-validator';
 
export class CompanyDto {
  
  @IsString()
  @IsNotEmpty()
  company_phone: string;

  @IsString()
  @IsNotEmpty()
  company_name: string;

  @IsString()
  @IsNotEmpty()
  company_email: string;
}