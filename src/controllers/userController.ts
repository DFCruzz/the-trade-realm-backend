import userService from '../services/userService';
import { Request, Response } from 'express';
import httpStatus from 'http-status';


export async function singIn(req: Request, res: Response) {
    const { email, password } = req.body

    try {
        const result = await userService.singIn(email, password)

        return res.status(httpStatus.OK).send(result)
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send(error)
    }
}

export async function createUser(req: Request, res: Response) {
    const { email, password } = req.body;
  
    try {
      const user = await userService.createUser(email, password);
      return res.status(httpStatus.CREATED).json({
        id: user.id,
        email: user.email,
      });
    } catch (error) {
      if (error.name === 'DuplicatedEmailError') {
        return res.status(httpStatus.CONFLICT).send(error);
      }
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
  }