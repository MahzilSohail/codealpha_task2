import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>Add Blog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Blog</DialogTitle>
            <DialogDescription>
              
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Title</Label>
              <Input id="name-1" name="name" defaultValue="" placeholder="Enter Title" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Description</Label>
              <Input id="username-1" name="username" defaultValue="" placeholder="Enter Description"/>
            </div>
          </div>
          <DialogFooter>
            {/* <DialogClose asChild>
              <Button variant="outline"></Button>
            </DialogClose> */}
            <Button type="submit">Add</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
