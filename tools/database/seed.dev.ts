import { PrismaClient } from '@prisma/client'
import { POST_DATA, USER_DATA } from './seed-data'

const prisma = new PrismaClient()

async function main() {

// Seed User data
  await Promise.all(
    USER_DATA.map((user) => {
      return prisma.user.upsert({
        where: { id: user.id },
        update: user,
        create: user
      });
    })
  );

  await Promise.all(
    POST_DATA.map((post) => {
      const { id, authorId, ...rest } = post;  // Destructure to separate id from the rest of the data
      return prisma.post.upsert({
        where: { id: id, authorId: authorId },
        update: rest,  // Only pass the rest of the data to update
        create: rest   // Only pass the rest of the data to create
      });
    })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
