import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from "class-validator";

class Item {
    @ApiProperty()
    @IsNotEmpty()
    id: string;
    @ApiProperty()
    @IsNotEmpty()
    price: number;
    @ApiProperty()
    @IsNotEmpty()
    quantity: number;
    @ApiProperty()
    @IsNotEmpty()
    title: string;
    @ApiProperty()
    @IsNotEmpty()
    total: number;
}

export class OrderDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    totalAmount: number;

    @ApiProperty()
    items: [Item];
}
