import { Module } from '@nestjs/common';
import { SoftSkillService } from './soft_skill.service';
import { SoftSkillController } from './soft_skill.controller';

@Module({
  controllers: [SoftSkillController],
  providers: [SoftSkillService]
})
export class SoftSkillModule {}
