import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log("main function");
}

main().catch(e => {
    throw e
}).finally(async () => {
    await prisma.disconnect()
})