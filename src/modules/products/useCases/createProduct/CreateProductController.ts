import { CreateProductUseCase } from './CreateProductUseCase';
import { Request, Response } from "express";

export class CreateProductController{
  async handle(req: Request, res: Response){
    const {product_name, product_category, product_price} = req.body

    const createProductUseCase = new CreateProductUseCase();

    const result = await createProductUseCase.execute({product_name,product_category,product_price})

    return res.status(201).json(result);
  }
}