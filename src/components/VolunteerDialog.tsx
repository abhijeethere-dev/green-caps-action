import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VolunteerDialog = ({ open, onOpenChange }: Props) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast({
        title: "Thank you for signing up! 🌿",
        description: "We'll reach out to you soon with upcoming volunteer opportunities.",
      });
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Join as a Volunteer</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll connect you with our next drive.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Your name" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
          </div>
          <div>
            <Label htmlFor="message">Why do you want to volunteer?</Label>
            <Textarea id="message" placeholder="Tell us a little about yourself..." rows={3} />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Sign Up"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteerDialog;
