import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) { }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Patch('modify')
  update(@Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(updateProfileDto);
  }

}
