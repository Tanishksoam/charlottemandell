import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea className="min-h-[120px]" id="message" placeholder="Write your message here..." />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
