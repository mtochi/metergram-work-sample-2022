import { Injectable, Module, NestMiddleware } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyService } from './services/company.service';
import { PrismaService } from './services/prisma.service';
import { CourseService } from './services/course.service';
import { EnrollsService } from './services/enrolls.service';
import {ParticipantService} from './services/participant.service';
import {EnrollController} from './controllers/enroll.controller';
import { NextFunction } from 'express';
import * as bodyParser from 'body-parser';


@Module({
  imports: [],
  controllers: [AppController, EnrollController],
  providers: [AppService, PrismaService, CompanyService, CourseService, EnrollsService, ParticipantService],
})
export class AppModule {}
