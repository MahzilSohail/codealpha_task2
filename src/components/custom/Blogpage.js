import React from 'react'
import { Button } from "@/components/ui/button"

import { blog } from "@/blog";
import Blogcard from '@/components/custom/Blogcard';
export function ButtonDefault() {
    return <Button>Button</Button>
}

export function ButtonDestructive() {
    return <Button variant="destructive">Destructive</Button>
}

export function ButtonOutline() {
    return <Button variant="outline">Outline</Button>
}

function Blogpage({ id, heading }) {
    return (
        <div className='min-h-screen bg-gradient-to-r from-yellow-200 to-orange-300 '>
            <div className='p-8'>
                <Button>Add Blog</Button>
                <div className='pt-6 grid grid-cols-4 gap-10'>
                    {blog.map((blog) => {
                        return (
                            <Blogcard
                                key={blog.id}
                                id={blog.id}
                                heading={blog.heading}
                            />
                        );
                    })}
                </div>
            </div>

        </div>
    )
}

export default Blogpage