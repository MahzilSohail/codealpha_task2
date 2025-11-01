import React from 'react'
import { Button } from "@/components/ui/button"
export function ButtonDefault() {
  return <Button>Button</Button>
}

export function ButtonDestructive() {
  return <Button variant="destructive">Destructive</Button>
}

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { DialogDemo } from './edit'
function Blogcard({ id, heading }) {
  return (
    <div className='bg-white rounded-md py-4 px-7 w-2xs'>
        <h1 className='font-bold text-2xl '>{heading}</h1>
        <p className='line-clamp-4'>Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the text of the printing and typesetting industry</p>
        <div className='flex pt-4 space-x-5'>
          {/* <Button variant="outline">Edit</Button> */}
          <DialogDemo/>
          <Button variant="destructive">
          <AlertDialog>
                <AlertDialogTrigger>Delete</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure you want to delete this blog?</AlertDialogTitle>
                        <AlertDialogDescription>
                            
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Ok</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
          </Button>
        </div>
      </div>
  )
}

export default Blogcard