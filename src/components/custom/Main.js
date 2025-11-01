import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function ButtonDefault() {
  return <Button>Button</Button>
}

function Main() {
  return (
    <div className='min-h-screen  flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold mb-3'>Explore our Blogs</h2>
        <Link href={"/Blog/"}>
        <Button>Explore</Button>
        </Link>
    </div>
  )
}

export default Main