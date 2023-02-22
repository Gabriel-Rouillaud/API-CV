import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillsDTO } from './dto/skills.dto';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) { }

  @Post()
  async create(@Body() data: SkillsDTO) {
    const skill = await this.skillService.create(data);

    return {
      statusCode: HttpStatus.OK,
      message: 'Skill created successfully',
      skill
    }
  }

  @Get()
  async findAll() {
    const skills = await this.skillService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Skills fetched successfully',
      skills
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const data = await this.skillService.findOne(id);

    return {
      statusCode: HttpStatus.OK,
      message: 'Skill fetched successfully',
      data
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: Partial<SkillsDTO>) {
    await this.skillService.update(id, data);

    return {
      statusCode: HttpStatus.OK,
      message: 'Skill updated successfully',
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.skillService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Skill deleted successfully',
    }
  }
}
