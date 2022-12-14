import { ShowProductUseCase } from "./ShowProductUseCase";

import { Request, Response } from "express";

export class ShowProductController {
  async handle(req: Request, res: Response) {
    const showProductUseCase = new ShowProductUseCase();

    const result = await showProductUseCase.execute();

    return res.status(200).json(result);
  }
}
