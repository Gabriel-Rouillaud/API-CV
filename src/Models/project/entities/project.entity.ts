import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Project {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    img: string;

    @Column()
    description: string;

    @Column()
    link: string;

    @Column()
    progressing: boolean;


}
