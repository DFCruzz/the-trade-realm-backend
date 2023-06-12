import { User } from "@prisma/client"
import bcrypt from "bcrypt"
import userRepository from "../../repositories/userRepository"
import jwt from "jsonwebtoken"
import sessionRepository from "../../repositories/sessionRepository"

type SessionCredentials = {
    id: number,
    email: string,
    token: string
}

async function createUser(email: string, password: string): Promise<User> {
    const isEmailValid = await userRepository.findByEmail(email)

    if(isEmailValid) {
        throw new Error("Email already in use!")
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    return userRepository.createNewuser({
        email: email,
        password: hashedPassword
    })
}

async function singIn(email: string, password: string): Promise<SessionCredentials> {
    const loggedUser = await userRepository.findByEmail(email)

    if(!loggedUser) {
        throw new Error("User not registered!")
    }

    const isPasswordValid = await bcrypt.compare(password, loggedUser.password)
    if(!isPasswordValid) {
        throw new Error("Invalid password!")
    }
    
    const token = jwt.sign({ userId: loggedUser.id }, process.env.JWT_SECRET)

    await sessionRepository.createSession({
        token,
        userId: loggedUser.id,
      });

      return {
        id: loggedUser.id,
        email: loggedUser.email,
        token: token
      }
}

const userService = {
    createUser,
    singIn
}

export default userService