import { ICourse } from './course.model';

export let courseList: ICourse[] = [
    new Course(1, 'Learn JavaScript Basics', 120, new Date(),
        'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'),

    new Course(2, 'Learn JavaScript Basics', 120, new Date(),
        'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'),

    new Course(3, 'Learn JavaScript Basics', 120, new Date(),
        'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj')];

class Course implements ICourse {

    constructor(public id: number, public name: string, public duration: number,
                public startDate: Date, public description: string) {

    }
}

