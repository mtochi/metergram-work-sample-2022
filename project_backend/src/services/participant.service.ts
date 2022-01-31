import {Injectable} from '@nestjs/common';
import {PrismaService} from './prisma.service';
import {Participant} from '@prisma/client';

@Injectable()
export class ParticipantService{
    constructor(private prismaService: PrismaService){}

    getParticipants(): Participant[] | Promise<Participant[]> {
        return this.prismaService.participant.findMany();
    }
    
}