const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  
  const Users = await prisma.user.createMany({
    data: [
      {
        email: '',
        name: '',
        password: '',
        phone: '',
        role: '',
      },

    ],
    skipDuplicates: true,
  });

}

main()