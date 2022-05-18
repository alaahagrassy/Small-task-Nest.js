import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, Max, Min, } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsString()
    @Length(3,10)
    username:string;

    @IsNotEmpty()
    @IsNumber()
    @Min(10)
    @Max(50)
    age:number

    @IsEmail()
    @IsNotEmpty()
    email:string
}
