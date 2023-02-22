import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Experience {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    img: string;

    @Column()
    description: string;

    @Column()
    location: string;

    @Column()
    start: Date;

    @Column()
    end: Date;

    @Column()
    post: string;
}
