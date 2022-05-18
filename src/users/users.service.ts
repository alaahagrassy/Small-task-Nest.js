import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './users.interface';
import {Model} from 'mongoose'

const UserProjection = {
  __v:false
}


@Injectable()


export class UsersService {


  constructor(@InjectModel('Users') private UserModel:Model<IUser>){}
   

  async create(User) {
    const newUser = await new this.UserModel(User);
    let user = await newUser.save();
    return user;

  }

  async findAll() {
    const AllUsers = await this.UserModel.find({},UserProjection).exec();
    return AllUsers;
  }

  async findOne(id: string) {
    const findUser = await this.UserModel.findById(id , UserProjection)
    return findUser
  }

   async update(id: string, updateUserDto: UpdateUserDto) {
    const data = await this.UserModel.findByIdAndUpdate(id , {updateUserDto})
    const updated = data.save();
    return updated
  }

   async remove(id: string) {
   const DeleteUser = await this.UserModel.findByIdAndDelete(id);
   return 'Deleted'
  }
}


