import {Document} from 'mongoose'


export interface IOrder extends Document{
    userId:string,
    description:string,
    quantity:number

}