import { Joi } from "celebrate";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Student{
    @PrimaryGeneratedColumn()
    id?:number;

    @Column()
    name:string;

    @Column()
    birth:Date;

    @Column()
    email:string;

    @Column()
    city:string;

    constructor(data?:Record<string, any>){
        this.id = data?.id;
        this.name = data?.name;
        this.email = data?.email;
        this.city = data?.city;
        this.birth = data?.birth;
    }
}

export const StudentSchema = {
    id: Joi.number(),
    name: Joi.string().required(),
    birth: Joi.date().required(),
    email: Joi.string().required().email(),
    city: Joi.string().required()
}

export const UpdateStudentSchema = {
    name: Joi.string(),
    birth: Joi.date(),
    email: Joi.string().email(),
    city: Joi.string()
}