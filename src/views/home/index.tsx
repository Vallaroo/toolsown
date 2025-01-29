import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='h-full w-full bg-black'>
      <Link href='/income-tax-calculator'>
        <Button>Calculate Income Tax</Button>
      </Link>
    </div>
  )
}

export default Home
