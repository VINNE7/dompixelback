import { Request, Response } from "express";
import { ShowProductByIdUseCase } from "./ShowProductByIdUseCase";

export class ShowProductByIdController {
  async handle(req: Request, res: Response) {
    const showProductByIdUseCase = new ShowProductByIdUseCase();

    const result = await showProductByIdUseCase.execute(req.params.id);
    return res.status(200).json(result);
  }
}
