import { ShowProductController } from "./../modules/products/useCases/showProduct/ShowProductController";
import { CreateProductController } from "./../modules/products/useCases/createProduct/CreateProductController";
import { ServerRunningController } from "./../modules/products/useCases/serverRunning/ServerRunningController";
import { Router } from "express";

const createProductController = new CreateProductController();
const showProductUseController = new ShowProductController();
const serverRunningController = new ServerRunningController();
const productRoutes = Router();

productRoutes.post("/products", createProductController.handle);
productRoutes.get("/products", showProductUseController.handle);
productRoutes.get("/", serverRunningController.handle);

export { productRoutes };
