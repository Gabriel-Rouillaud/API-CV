import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoftSkillService } from './soft_skill.service';
import { CreateSoftSkillDto } from './dto/create-soft_skill.dto';
import { UpdateSoftSkillDto } from './dto/update-soft_skill.dto';

@Controller('soft-skill')
export class SoftSkillController {
  constructor(private readonly softSkillService: SoftSkillService) {}

  @Post()
  create(@Body() createSoftSkillDto: CreateSoftSkillDto) {
    return this.softSkillService.create(createSoftSkillDto);
  }

  @Get()
  findAll() {
    return this.softSkillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.softSkillService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoftSkillDto: UpdateSoftSkillDto) {
    return this.softSkillService.update(+id, updateSoftSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.softSkillService.remove(+id);
  }
}
