import { ShowProductUseCase } from './ShowProductUseCase';

import { Request, Response } from "express";

export class ShowProductController{
  async handle(req: Request, res: Response){
    const {product_name, product_category, product_price} = req.body

    const showProductUseCase = new ShowProductUseCase;

    const result = await showProductUseCase.execute()

    return res.status(201).json(result);
  }
}