import { prisma } from '@/shared/lib/prisma'

export async function createUser() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@gmail.com',
    },
  })

  return user
}
