import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  create(createProfileDto: CreateProfileDto) {
    return 'This action adds a new profile';
  }

  findAll() {
    return `This action returns all profile`;
  }

  update(updateProfileDto: UpdateProfileDto) {
    return `This action updates your profile`;
  }

}
