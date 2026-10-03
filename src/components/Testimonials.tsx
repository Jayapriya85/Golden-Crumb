import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Eleanor Whitfield',
    role: 'Regular since 1995',
    avatar:
      'https://images.pexels.com/photos/11579595/pexels-photo-11579595.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: "Walking into Golden Hearth feels like coming home. The smell, the warmth, the smile from the counter — it's the same today as it was thirty years ago. Their sourdough is the best I've ever had, hands down.",
  },
  {
    name: 'Marcus',
    role: 'Wedding Client',
    avatar:
      'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: 'They made our wedding cake and it was an absolute showstopper. Not just gorgeous — every layer was moist, flavorful, and pure perfection. Guests are still asking about it months later.',
  },
  {
    name: 'Sophie',
    role: 'Saturday Morning Regular',
    avatar:
      'https://images.pexels.com/photos/16160801/pexels-photo-16160801.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: "My Saturday isn't complete without a croissant and a flat white from here. The pastry shatters perfectly, the coffee is smooth, and the staff knows my order by heart. It's my little ritual.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-crust-800 py-24 md:py-32"
    >
      {/* Decorative blurs */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-golden-500/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-cherry-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-golden-400">
            Kind Words
          </p>
          <h2 className="text-4xl font-bold leading-tight text-cream sm:text-5xl">
            Loved by Our Community
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/70">
            We measure success not in sales, but in smiles. Here is what our
            neighbors have to say.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-3xl bg-crust-700/50 p-8 ring-1 ring-cream/10 transition-all hover:bg-crust-700/70 hover:ring-golden-400/30"
            >
              <Quote className="mb-4 h-9 w-9 text-golden-400/60" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-golden-400 text-golden-400"
                  />
                ))}
              </div>

              <blockquote className="text-base leading-relaxed text-cream/85">
                "{t.text}"
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-golden-400/40"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-lg font-semibold text-cream">
                    {t.name}
                  </p>
                  <p className="text-sm text-cream/50">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 rounded-3xl bg-crust-700/30 p-8 text-center ring-1 ring-cream/10 md:grid-cols-4">
          {[
            { value: '37+', label: 'Years of Baking' },
            { value: '120k', label: 'Loaves Sold' },
            { value: '4.9', label: 'Average Rating' },
            { value: '8k+', label: 'Happy Customers' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-golden-400 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-cream/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
