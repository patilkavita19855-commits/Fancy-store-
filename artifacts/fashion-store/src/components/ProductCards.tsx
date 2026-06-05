import { motion } from "framer-motion";

const PRODUCTS = [
  { id: 1, name: "Silk Slip Dress", price: 450, image: "/images/prod-dress.png" },
  { id: 2, name: "Cashmere Overcoat", price: 1200, image: "/images/prod-coat.png" },
  { id: 3, name: "Leather Weekender", price: 850, image: "/images/prod-bag.png" },
  { id: 4, name: "Gold Chain Necklace", price: 320, image: "/images/prod-necklace.png" },
  { id: 5, name: "Pleated Trousers", price: 280, image: "/images/prod-trousers.png" },
  { id: 6, name: "Merino Wool Sweater", price: 350, image: "/images/prod-coat.png" }, // Fallback to existing
  { id: 7, name: "Silk Scarf", price: 150, image: "/images/prod-dress.png" }, // Fallback to existing
  { id: 8, name: "Oxford Loafers", price: 420, image: "/images/prod-bag.png" }, // Fallback to existing
];

export function ProductCards() {
  return (
    <section className="py-24 bg-white" data-testid="section-products">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">New Arrivals</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-sm">Pieces of the moment</p>
          </div>
          <button className="uppercase tracking-widest text-sm font-medium border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className="group"
              data-testid={`card-product-${product.id}`}
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button
                  className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-4 uppercase tracking-widest text-xs translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                  data-testid={`button-add-to-cart-${product.id}`}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{product.name}</h3>
                </div>
                <span className="text-sm font-medium">${product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}