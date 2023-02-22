import { ApiProperty } from '@nestjs/swagger';

export class SkillsDTO {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    img: string;

    @ApiProperty()
    description: string;
}
