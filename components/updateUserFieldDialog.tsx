"use client"

import { useState } from "react"
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
import { toast } from "sonner"
import { z } from "zod"
import {
  nameSchema,
  usernameSchema,
  bioSchema,
  imageSchema,
} from "@/lib/schema/updateUserSchema"

interface DialogComponentProps {
  label: string
  field: "name" | "username" | "bio" | "image"
  initialValue: string
}

const schemaMap: Record<string, z.ZodSchema> = {
  name: nameSchema,
  username: usernameSchema,
  bio: bioSchema,
  image: imageSchema,
}

export const DialogComponent: React.FC<DialogComponentProps> = ({
  label,
  field,
  initialValue,
}) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(initialValue)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const schema = schemaMap[field]
    const parsed = schema.safeParse({ [field]: value })

    if (!parsed.success) {
      const errorMsg = parsed.error.issues[0]?.message || "Invalid input"
      toast.error(errorMsg)
      setLoading(false)
      return
    }

    try {
      const res = await fetch(`/api/updateuser/${field}`, {
        method: "PATCH", // ✅ changed from POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [field]: value }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Update failed")
      }

      toast.success(`${label} updated successfully 🎉`)
      setOpen(false)
      window.location.reload() // ✅ Better UX
    } catch (err: any) {
      toast.error(err.message || "Something went wrong")
      console.error("Update failed:", err)
    } finally {
      setLoading(false)
    }
  }



  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-full sm:w-[20%] h-12 min-w-[100px] rounded-lg border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black transition-all duration-300 translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[-4px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_#fabb20] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none border-0"
          variant="outline"
        >
          Edit {field}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit {field}</DialogTitle>
          <DialogDescription>
            Make changes to your {field} here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-3">
              <Label htmlFor={field}>{label}</Label>
              <Input
                id={field}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full resize-none bg-white h-12 px-6 py-3 font-semibold  
                      lg:bg-[#fabb20] lg:text-black lg:hover:bg-white
                      transition-all duration-300
                      translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] 
                      translate-y-[-4px] lg:translate-y-[0px] 
                      hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
                      hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] 
                      active:rounded-2xl active:shadow-none
                      border-none focus:border-none focus:outline-none focus:ring-0 
                      focus-visible:ring-0 ring-0 outline-none"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                type="button"
                className="h-10 rounded-2xl border-2 border-black border-dashed"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={loading}
              className="h-10 min-w-38 rounded-2xl border-2 border-dashed border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black transition-all duration-300 translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[-4px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_#fabb20] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
