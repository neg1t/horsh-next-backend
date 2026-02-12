'use server'
import { prisma } from '@/shared/lib/prisma'

export async function createUser() {
  try {
    const user = await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john@gmail.com',
      },
    })

    return user
  } catch (error) {
    console.error('Error creating user:', error)
    throw new Error('Failed to create user')
  }

}
