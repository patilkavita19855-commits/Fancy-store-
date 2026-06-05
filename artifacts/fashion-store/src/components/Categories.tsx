import { motion } from "framer-motion";

const CATEGORIES = [
  { id: "women", name: "Women's Collection", image: "/images/cat-women.png" },
  { id: "men", name: "Men's Collection", image: "/images/cat-men.png" },
  { id: "accessories", name: "Accessories", image: "/images/cat-accessories.png" },
  { id: "new", name: "New Arrivals", image: "/images/cat-new.png" },
];

export function Categories() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto" data-testid="section-categories">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif mb-4">Curated Edits</h2>
        <p className="text-muted-foreground uppercase tracking-widest text-sm">Shop by Category</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative group aspect-[4/5] md:aspect-[3/4] overflow-hidden cursor-pointer"
            data-testid={`card-category-${category.id}`}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
              <h3 className="text-white text-2xl md:text-3xl font-serif">{category.name}</h3>
              <span className="text-white uppercase tracking-widest text-xs border-b border-white pb-1 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Explore
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}