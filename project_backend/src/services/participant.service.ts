import {Injectable} from '@nestjs/common';
import {PrismaService} from './prisma.service';
import {Participant, Prisma} from '@prisma/client';

@Injectable()
export class ParticipantService{
    constructor(private prismaService: PrismaService){}
    
    getParticipants(): Participant[] | Promise<Participant[]> {
        try{
            return this.prismaService.participant.findMany();
        }catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
              // The .code property can be accessed in a type-safe manner
              console.log("Error:" + e.code + " Message:" + e.message)
            }
            throw e
        }
        
    }
    
}