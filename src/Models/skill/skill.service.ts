import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from './entities/skill.entity';
import { SkillsDTO } from './dto/skills.dto';

@Injectable()
export class SkillService {

  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>,
  ) { }

  async create(data: SkillsDTO) {
    const user = this.skillRepository.create(data);
    await this.skillRepository.save(data);
    return user;
  }

  async findAll() {
    return await this.skillRepository.find();
  }

  findOne(id: number) {
    return this.skillRepository.findOneBy({ id });
  }

  async update(id: number, data: Partial<SkillsDTO>) {
    await this.skillRepository.update({ id }, data);
    return await this.skillRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.skillRepository.delete(id);

    return { deleted: true }
  }

}
