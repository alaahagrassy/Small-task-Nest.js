import { IsNotEmpty, IsNumber, Length } from "class-validator";

export class CreateOrderDto {

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
