import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const presetAmounts = [500, 1000, 2500, 5000];

const DonatePage = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState<number | "">(1000);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Thank you for your generosity!",
      description: "Online payments are coming soon. We've saved your details and will reach out shortly.",
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
            <Heart className="w-7 h-7" />
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-3">Support Our Mission</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Your contribution fuels every clean-up drive, donation drive, and act of care by GreenCaps Foundation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Donation Details Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 shadow-sm space-y-6"
          >
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-1">Donation Details</h2>
              <p className="text-sm text-muted-foreground">Tell us a little about you and your contribution.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required placeholder="Your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required placeholder="Your last name" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+91 ..." />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Donation Amount (INR)</Label>
              <div className="flex flex-wrap gap-2">
                {presetAmounts.map((a) => (
                  <button
                    type="button"
                    key={a}
                    onClick={() => setAmount(a)}
                    className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors ${
                      amount === a
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border hover:bg-accent"
                    }`}
                  >
                    ₹{a.toLocaleString()}
                  </button>
                ))}
              </div>
              <Input
                type="number"
                min={1}
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : "")}
                placeholder="Enter custom amount"
                className="mt-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="purpose">Donation Purpose</Label>
              <select
                id="purpose"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                defaultValue="general"
              >
                <option value="general">Where it's needed most</option>
                <option value="cleanups">River & Lake Clean-ups</option>
                <option value="donations">Clothes & Food Drives</option>
                <option value="upcycle">Upcycling Initiatives</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea id="message" placeholder="Share a note with the team..." rows={4} />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Continue
            </Button>
          </form>

          {/* Payment Panel (locked) */}
          <aside className="lg:col-span-2">
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-sm overflow-hidden">
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-1">Payment Method</h2>
                <p className="text-sm text-muted-foreground mb-6">Choose how you'd like to contribute.</p>
              </div>

              <div className="space-y-3 opacity-50 pointer-events-none select-none">
                {["Credit / Debit Card", "UPI", "Net Banking", "International Card"].map((m) => (
                  <div
                    key={m}
                    className="flex items-center justify-between p-4 rounded-lg border border-border bg-background"
                  >
                    <span className="text-sm font-medium">{m}</span>
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20 text-center">
                <Lock className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">Online Payments Coming Soon</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Our secure payment gateway is under progress. Please share your details and our team will reach out
                  with manual payment options.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default DonatePage;