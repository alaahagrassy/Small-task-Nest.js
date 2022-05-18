import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { IOrder } from './user.interface';
import {Model} from 'mongoose'

const orderProjection = {
  __v:false
}

@Injectable()
export class OrdersService {
 
  constructor(@InjectModel('Orders') private OrderModel: Model<IOrder>){}
   
  async create(createOrderDto: CreateOrderDto) {
   const NewOrder = await new this.OrderModel(createOrderDto)
   const order = await NewOrder.save();
   return order
  }

  async findAll() {
    const AllOrders = await this.OrderModel.find({},orderProjection).exec()
    return AllOrders
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
