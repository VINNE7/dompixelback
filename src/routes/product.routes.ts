import { ShowProductController } from './../modules/products/useCases/showProduct/ShowProductController';
import { CreateProductController } from './../modules/products/useCases/createProduct/CreateProductController';
import { Router } from "express";

const createProductController = new CreateProductController();
const showProductUseController = new ShowProductController();
const productRoutes = Router();

productRoutes.post("/products", createProductController.handle);
productRoutes.get("/", showProductUseController.handle);

export {productRoutes};