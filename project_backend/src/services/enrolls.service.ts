import {Injectable} from '@nestjs/common';
import {PrismaService} from './prisma.service';
import {Enrolls} from '@prisma/client';
import { EnrollsDto } from './../dto/enrolls.dto';

@Injectable()
export class EnrollsService{
    
    constructor(private prismaService: PrismaService){}

    getEnrollments(): Enrolls[] | Promise<Enrolls[]> {
        return this.prismaService.enrolls.findMany();
    }

    async insertEnrollment (input: EnrollsDto) :Promise <Enrolls>{

        //process course_date
        if(input['date'] != undefined)
            input['date'] = new Date(input.date);   
        console.log(input['date']);
        //creating enrollment in db
        const enrollment = await this.prismaService.enrolls.create({    
            data: {
                course_name: input.course_name,
                date: input.date,
                course_id: parseInt("" + input.course_id),
                company: {
                    create: {
                        company_email: input.company_email,
                        company_phone: input.company_phone,
                        company_name: input.company_name
                    }
                }
            }
        })

        //processing participant data
        //adding company_id and enrolls_id for each participant
        let participants = JSON.parse(input.participants);
        for(var participant of participants){
            participant['company_id'] = enrollment.company_id;
            participant['enrolls_id'] = enrollment.id;
        }
        console.log(participants)
        const registerParticipants = await this.prismaService.participant.createMany({    
            data: participants
        })
        return enrollment;
    }
}