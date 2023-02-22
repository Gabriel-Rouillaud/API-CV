import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Profile {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    title: string;

    @Column()
    img: string;

    @Column()
    search: string;

    @Column()
    Availability: string;

    @Column()
    description: string;

    @Column()
    license: string;
}
