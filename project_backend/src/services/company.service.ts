import {Injectable} from '@nestjs/common';
import {PrismaService} from './prisma.service';

import {Company} from '@prisma/client';
import { CompanyDto } from './../dto/company.dto';

@Injectable()
export class CompanyService{
    constructor(private prismaService: PrismaService){}

    async companies() :Promise<Company[]>{
        return this.prismaService.company.findMany();
    }

    async insertCompany(input: CompanyDto): Promise<Company> {
        return this.prismaService.company.create({
            data: input
        });
    }
}