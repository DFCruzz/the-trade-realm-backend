import { AuthenticatedRequest } from "@/middlewares/authMiddleware";
import { RequestError } from "@/protocols";
import itemsService from "@/services/itemsService";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function listMainCategories(req: Request, res: Response, next: NextFunction) {

    try {
        const mainCategories = await itemsService.listMainCategories();
        return res.status(httpStatus.OK).send(mainCategories)
    } catch (error) {
        next(error)
    }
}

export async function listSubCategories(req: Request, res: Response, next: NextFunction) {
    const mainCategoryId = Number(req.params.mainCategoryId)

    try {
        const subCategories = await itemsService.listMainSubCategories(mainCategoryId)
        return res.status(httpStatus.OK).send(subCategories)
    } catch (error) {
        next(error)
    }
}