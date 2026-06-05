import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Elena R.",
    quote: "The cashmere overcoat I purchased is an absolute masterpiece. The craftsmanship is evident in every single stitch.",
    rating: 5,
  },
  {
    id: 2,
    name: "James T.",
    quote: "LUXE consistently delivers pieces that define my wardrobe. Timeless, elegant, and worth the investment.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia L.",
    quote: "A beautiful shopping experience from start to finish. The silk dress fits like it was made for me.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-secondary" data-testid="section-testimonials">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-20">The LUXE Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg md:text-xl font-serif italic text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <span className="uppercase tracking-widest text-xs font-medium text-muted-foreground">
                — {testimonial.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}