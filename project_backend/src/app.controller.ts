import { Controller, Get, Post, Body} from '@nestjs/common';
import { AppService } from './app.service';
import {CompanyService} from './services/company.service';
import {CourseService} from './services/course.service';
import {EnrollsService} from './services/enrolls.service';
import {Company as CompanyModel, Participant as ParticipantModel} from '@prisma/client';
import { CompanyDto } from './dto/company.dto';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly companyService: CompanyService,
    private readonly courseService: CourseService,
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('companies/')
  async getCompanies(): Promise<CompanyModel []> {
    return this.companyService.companies();
  }


  @Post()
  async addCompany(
    @Body() postData: CompanyDto
  ) : Promise<CompanyModel>{
      console.log(postData.company_email);
      return this.companyService.insertCompany(postData);
  }

  @Get('courses/')
  async getCourses(): Promise<any[]> {
    return this.courseService.getCourses();
  }

}
