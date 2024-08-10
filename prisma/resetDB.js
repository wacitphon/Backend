const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function run() {
  await prisma.$executeRawUnsafe('DROP Database repair_system')
  await prisma.$executeRawUnsafe('CREATE Database repair_system')
}
console.log('Reset DB')
run()