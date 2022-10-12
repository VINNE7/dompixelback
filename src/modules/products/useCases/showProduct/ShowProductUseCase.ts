import { Products } from '.prisma/client';
import { prisma } from "../../../../prisma/client";

export class ShowProductUseCase{
  async execute(): Promise<Products[]>{
    const products = await prisma.products.findMany({})

    return products;
  }
}