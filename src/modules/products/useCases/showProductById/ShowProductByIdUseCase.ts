import { Products } from ".prisma/client";
import { prisma } from "../../../../prisma/client";

export class ShowProductByIdUseCase {
  async execute(product_id: string): Promise<Products[] | null | Products> {
    const product = await prisma.products.findUnique({
      where: { product_id: product_id },
    });
    return product;
  }
}
