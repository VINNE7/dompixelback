import { Request, Response } from "express";

export class ServerRunningController {
  async handle(req: Request, res: Response) {
    return res
      .status(200)
      .json({ message: "API Fullstack Job Test - DomPixel running" });
  }
}
