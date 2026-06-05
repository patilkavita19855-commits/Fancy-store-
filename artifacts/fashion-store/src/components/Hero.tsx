import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Luxury Fashion Editorial"
          className="w-full h-full object-cover object-center"
          data-testid="img-hero"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white/80 uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6"
          data-testid="text-hero-subtitle"
        >
          The Autumn Collection
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8"
          data-testid="text-hero-title"
        >
          Confidence Meets Craftsmanship.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <button
            className="bg-white text-primary px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-accent hover:text-white transition-all duration-300"
            data-testid="button-shop-now"
          >
            Shop Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}