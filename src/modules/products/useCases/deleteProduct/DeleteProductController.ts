import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductController {
  async handle(req: Request, res: Response) {
    const deleteProductUseCase = new DeleteProductUseCase();

    const result = await deleteProductUseCase.execute(req.params.id);

    return res.status(200).json({});
  }
}
