import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, Length } from 'class-validator';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {

    @IsNotEmpty()
    @IsNumber()
    UserId:number

    @IsNotEmpty()
    @Length(10,Infinity)
    description:string

    @IsNotEmpty()
    @IsNumber()
    quantity:number
}
