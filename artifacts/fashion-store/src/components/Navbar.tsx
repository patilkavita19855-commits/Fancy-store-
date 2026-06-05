import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Women", href: "/women" },
    { name: "Men", href: "/men" },
    { name: "Accessories", href: "/accessories" },
    { name: "Collections", href: "/collections" },
    { name: "Sale", href: "/sale" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border/50 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          data-testid="button-mobile-menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="text-3xl md:text-4xl font-serif font-bold tracking-widest text-foreground hover:text-accent transition-colors" data-testid="link-home">
          LUXE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest font-medium text-foreground hover:text-accent transition-colors relative group"
              data-testid={`link-${link.name.toLowerCase()}`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="text-foreground hover:text-accent transition-colors" data-testid="button-search">
            <Search className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button className="text-foreground hover:text-accent transition-colors relative" data-testid="button-cart">
            <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-background z-50 flex flex-col pt-24 px-8"
            data-testid="mobile-menu-overlay"
          >
            <button
              className="absolute top-6 left-6 text-foreground hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="button-close-mobile-menu"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-serif text-foreground hover:text-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}