import {Injectable} from '@nestjs/common';
import {PrismaService} from './prisma.service';

import {Company, Prisma} from '@prisma/client';
import { CompanyDto } from './../dto/company.dto';

@Injectable()
export class CompanyService{
    constructor(private prismaService: PrismaService){}

    async companies() :Promise<Company[]>{
        try{
            return this.prismaService.company.findMany();
        }catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
              // The .code property can be accessed in a type-safe manner
              console.log("Error:" + e.code + " Message:" + e.message)
            }
            throw e
        }
        
    }

    async insertCompany(input: CompanyDto): Promise<Company> {
        try{
            return this.prismaService.company.create({
            data: input
        });}
        catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
              // The .code property can be accessed in a type-safe manner
              console.log("Error:" + e.code + " Message:" + e.message)
            }
            throw e
        }
    }
}