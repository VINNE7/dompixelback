import { ShowProductByIdUseCase } from "./ShowProductByIdUseCase";

import { Request, Response } from "express";

export class ShowProductController {
  async handle(req: Request, res: Response) {
    const { product_name, product_category, product_price } = req.body;

    const showProductUseCase = new ShowProductByIdUseCase();

    return res.status(200).json(result);
  }
}
