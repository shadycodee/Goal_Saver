import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Contact", path: "/contact" },

];
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Goal Saver</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
            <Button
              key={link.path}
              variant="ghost"
              onClick={() => navigate(link.path)}
            >
              {link.name}
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          {/* Mobile Menu */}
          <SheetContent side="left" className="w-64">
            <div className="flex justify-between items-center px-4 py-3">
              <h2 className="text-lg font-semibold">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4 mt-6">
              <Button variant="ghost" className="w-full text-left">
                Home
              </Button>
              <Button variant="ghost" className="w-full text-left">
                About
              </Button>
              <Button variant="ghost" className="w-full text-left">
                Services
              </Button>
              <Button variant="ghost" className="w-full text-left">
                Contact
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
