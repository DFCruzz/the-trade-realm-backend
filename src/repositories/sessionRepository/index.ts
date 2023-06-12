import { Prisma } from "@prisma/client";
import { prisma } from "../../config//database"

async function createSession(data: Prisma.SessionUncheckedCreateInput) {
    return prisma.session.create({
        data
    })
}

const sessionRepository = {
    createSession,
  };
  
  export default sessionRepository;