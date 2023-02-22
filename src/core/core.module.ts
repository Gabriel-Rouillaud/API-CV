import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from 'src/Models/contact/contact.module';
import { ProfileModule } from 'src/Models/profile/profile.module';
import { UserModule } from 'src/Models/user/user.module';
import { SkillModule } from 'src/Models/skill/skill.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '1234',
                database: 'grdb',
                entities: [],
                synchronize: false,
                autoLoadEntities: true,
            })
        }),
        UserModule,
        ProfileModule,
        ContactModule,
        SkillModule,
    ],
})
export class CoreModule { }
