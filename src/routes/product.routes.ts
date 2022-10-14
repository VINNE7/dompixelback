import { ShowProductByIdController } from "./../modules/products/useCases/showProductById/ShowProductByIdController";
import { ShowProductController } from "./../modules/products/useCases/showProduct/ShowProductController";
import { CreateProductController } from "./../modules/products/useCases/createProduct/CreateProductController";
import { ServerRunningController } from "./../modules/products/useCases/serverRunning/ServerRunningController";
import { Router } from "express";
import { EditProductController } from "../modules/products/useCases/editProduct/EditProductController";
import { DeleteProductController } from "../modules/products/useCases/deleteProduct/DeleteProductController";

const createProductController = new CreateProductController();
const showProductUseController = new ShowProductController();
const serverRunningController = new ServerRunningController();
const showProductByIdController = new ShowProductByIdController();
const editProductController = new EditProductController();
const deleteProductController = new DeleteProductController();
const productRoutes = Router();

productRoutes.post("/products", createProductController.handle);
productRoutes.get("/products", showProductUseController.handle);
productRoutes.get("/products/:id", showProductByIdController.handle);
productRoutes.get("/", serverRunningController.handle);
productRoutes.put("/products/:id", editProductController.handle);
productRoutes.delete("/products/:id", deleteProductController.handle);

export { productRoutes };
