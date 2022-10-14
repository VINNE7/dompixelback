import { Request, Response } from "express";
import { EditProductUseCase } from "./EditProductUseCase";

export class EditProductController {
  async handle(req: Request, res: Response) {
    const { product_name, product_category, product_price } = req.body;
    const editProductUseCase = new EditProductUseCase();

    const result = await editProductUseCase.execute({
      product_name,
      product_category,
      product_price,
      product_id: req.params.id,
    });

    return res.status(200).json(result);
  }
}
