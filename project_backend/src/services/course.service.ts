import {Injectable} from '@nestjs/common';
import * as coursesList from './../endpoints/courses.json';

@Injectable()
export class CourseService{
    constructor(){}

    async getCourses() :Promise<any []>{
        return coursesList;
    }

    
}