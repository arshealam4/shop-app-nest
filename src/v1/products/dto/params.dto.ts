import { ApiProperty } from '@nestjs/swagger';

export class ParamDto {
    @ApiProperty()
    status: string;

    @ApiProperty()
    catId: string;
}
