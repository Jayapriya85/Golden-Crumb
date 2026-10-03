import { Cake, Croissant, Cookie, Coffee, Gift, UtensilsCrossed } from 'lucide-react';

const specialties = [
  {
    icon: Cake,
    title: 'Custom Celebration Cakes',
    text: 'From whimsical birthday tiers to elegant wedding showstoppers — each cake is hand-decorated to make your moment unforgettable.',
    image:
      'https://images.pexels.com/photos/10455239/pexels-photo-10455239.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Most Loved',
  },
  {
    icon: Croissant,
    title: 'Artisan Breads',
    text: 'Crusty sourdough, pillowy brioche, and rustic country loaves — baked fresh every morning from our heritage wild yeast starter.',
    image:
      'https://images.pexels.com/photos/30826793/pexels-photo-30826793.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Fresh Daily',
  },
  {
    icon: Cookie,
    title: 'Pastries & Viennoiseries',
    text: 'Buttery croissants, flaky pain au chocolat, and delicate fruit tarts that melt in your mouth. Pure indulgence, baked to perfection.',
    image:
      'https://images.pexels.com/photos/2245293/pexels-photo-2245293.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Bestseller',
  },
  {
    icon: UtensilsCrossed,
    title: 'Event Catering',
    text: 'Weddings, corporate gatherings, and intimate parties — let us craft a custom dessert spread that your guests will be talking about.',
    image:
      'https://images.pexels.com/photos/2337821/pexels-photo-2337821.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'By Appointment',
  },
  {
    icon: Coffee,
    title: 'Coffee & Pairings',
    text: 'Locally roasted espresso and specialty teas, perfectly paired with your favorite bake. Pull up a chair and stay a while.',
    image:
      'https://images.pexels.com/photos/18059555/pexels-photo-18059555.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Cozy Corner',
  },
  {
    icon: Gift,
    title: 'Gift Boxes & Hampers',
    text: 'Curated assortments of our finest treats, beautifully wrapped. The perfect way to say "thank you" or "thinking of you."',
    image:
      'https://images.pexels.com/photos/7405059/pexels-photo-7405059.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Perfect for Gifting',
  },
];

export default function Services() {
  return (
    <section
      id="specialties"
      className="relative bg-gradient-to-b from-crust-50 to-cream py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-golden-600">
            What We Create
          </p>
          <h2 className="text-4xl font-bold leading-tight text-crust-800 sm:text-5xl">
            Our Specialties
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-crust-600">
            Every item is crafted in small batches with obsessive attention to
            detail. Explore what comes out of our ovens each day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-crust-200/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-crust-300/40"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crust-900/40 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold text-crust-700 shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-golden-100 text-golden-600 transition-colors group-hover:bg-golden-500 group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-crust-800">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-crust-500">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-cherry-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-cherry-500/30 transition-all hover:bg-cherry-600 hover:shadow-2xl hover:shadow-cherry-500/40"
          >
            Place a Custom Order
          </a>
        </div>
      </div>
    </section>
  );
}
