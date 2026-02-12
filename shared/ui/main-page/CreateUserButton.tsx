'use client'
import { type FC, useTransition } from 'react'

import { createUser } from '@/app/actions/createUser'

export const CreateUserButton: FC = () => {
  const [isPending, startTransition] = useTransition()

  const handleButtonClick = () =>
    startTransition(async () => {
      const user = await createUser()

      alert('User successful created: ' + JSON.stringify(user))
    })

  return (
    <button onClick={handleButtonClick}>
      {isPending ? 'Loading...' : 'Create user'}
    </button>
  )
}
