import { Products } from ".prisma/client";
import { prisma } from "../../../../prisma/client";
import { EditProductDTO } from "../../dtos/editProductDTO";

export class EditProductUseCase {
  async execute({
    product_name,
    product_category,
    product_price,
    product_id,
  }: EditProductDTO): Promise<Products> {
    const product = await prisma.products.update({
      where: { product_id: product_id },
      data: {
        product_name,
        product_category,
        product_price,
      },
    });

    return product;
  }
}
