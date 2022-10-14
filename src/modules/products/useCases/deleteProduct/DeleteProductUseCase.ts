import { Products } from ".prisma/client";
import { prisma } from "../../../../prisma/client";
import { EditProductDTO } from "../../dtos/editProductDTO";

export class DeleteProductUseCase {
  async execute(product_id: string): Promise<Products> {
    const product = await prisma.products.delete({
      where: { product_id: product_id },
    });

    return product;
  }
}
