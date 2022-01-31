import { Controller, Get, Post, Body} from '@nestjs/common';
import {EnrollsService} from './../services/enrolls.service';
import { Enrolls as EnrollModel} from '@prisma/client';
import { EnrollsDto } from './../dto/enrolls.dto';


@Controller("enroll/")
export class EnrollController {
    constructor(private readonly enrollService: EnrollsService) {}

        @Get()
        async getEnrollments(): Promise<EnrollModel []> {
            return this.enrollService.getEnrollments();
          }
          
        @Post()
        async enrollParticipantFromCompany(
            @Body() postData: EnrollsDto
          ) : Promise<EnrollModel>{
              return this.enrollService.insertEnrollment(postData);
          }

}