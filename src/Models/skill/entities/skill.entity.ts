import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Skill {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    img: string;

    @Column()
    description: string;
}
