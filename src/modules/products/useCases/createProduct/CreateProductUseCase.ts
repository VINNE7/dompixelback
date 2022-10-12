import { Products } from ".prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateProductDTO } from "../../dtos/createProductDTO";


export class CreateProductUseCase{
  async execute({product_name, product_category, product_price}: CreateProductDTO): Promise<Products> {
    const product = await prisma.products.create({
      data:{
        product_name,
        product_category,
        product_price
      }
    })

    return product;
  }
}