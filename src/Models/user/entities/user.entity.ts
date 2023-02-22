import { Entity, Column, PrimaryColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';

@Entity('users')
export class User {
    @PrimaryColumn()
    id: number;

    @Column()
    username: string;

    @BeforeInsert()
    hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }

    @Column()
    password: string;

    @Column()
    role: string;

}
