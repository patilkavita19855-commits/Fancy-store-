import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20 px-6 md:px-12" data-testid="footer">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        
        {/* Brand */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <Link href="/" className="text-4xl font-serif font-bold tracking-widest text-white">
            LUXE
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Refined clothing and accessories for those who dress with intention. Quality you can feel.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-social-instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-social-twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-social-facebook">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-white">Shop</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li><Link href="/women" className="hover:text-accent transition-colors">Women</Link></li>
            <li><Link href="/men" className="hover:text-accent transition-colors">Men</Link></li>
            <li><Link href="/accessories" className="hover:text-accent transition-colors">Accessories</Link></li>
            <li><Link href="/sale" className="hover:text-accent transition-colors">Sale</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-white">Company</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/stores" className="hover:text-accent transition-colors">Our Stores</Link></li>
            <li><Link href="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-white">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="flex" data-testid="form-newsletter" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent border-b border-gray-600 py-2 px-0 text-sm text-white focus:outline-none focus:border-accent w-full transition-colors"
              required
              data-testid="input-newsletter-email"
            />
            <button
              type="submit"
              className="border-b border-gray-600 py-2 px-4 uppercase tracking-widest text-xs hover:text-accent hover:border-accent transition-colors"
              data-testid="button-newsletter-submit"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
      
      <div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} LUXE. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}