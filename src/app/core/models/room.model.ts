import { Block } from "./block.model"

export interface Room{
roomId:number,
roomNumber:number,
blockId?:number,
roomType:string,
availability:string,
createdOn:string,
block?:Block
}