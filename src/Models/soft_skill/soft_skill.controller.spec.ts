import { Test, TestingModule } from '@nestjs/testing';
import { SoftSkillController } from './soft_skill.controller';
import { SoftSkillService } from './soft_skill.service';

describe('SoftSkillController', () => {
  let controller: SoftSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoftSkillController],
      providers: [SoftSkillService],
    }).compile();

    controller = module.get<SoftSkillController>(SoftSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
