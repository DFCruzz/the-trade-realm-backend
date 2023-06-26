import { Router } from "express";
import { listMainCategories, listSubCategories } from "../controllers/itemsController";

const itemsRoute = Router()

itemsRoute.get("/", listMainCategories);
itemsRoute.get("/:mainCategoryId", listSubCategories)

export { itemsRoute }