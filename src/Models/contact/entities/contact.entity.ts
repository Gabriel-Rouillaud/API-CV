import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    location: string;

    @Column()
    tel: string;

    @Column()
    email: string;

    @Column()
    linkedin: string;

    @Column()
    github: string;

    @Column()
    extra: string;

}
