import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log("main function");
}

main().catch(error => {
    throw error
})