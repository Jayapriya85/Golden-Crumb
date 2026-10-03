import { ArrowRight, Star } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/32459865/pexels-photo-32459865.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Warm, inviting bakery interior with fresh bread on display"
          className="h-full w-full object-cover animate-slow-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-crust-950/70 via-crust-900/50 to-crust-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-cream/10 px-5 py-2 backdrop-blur-sm ring-1 ring-cream/20 animate-fade-in"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          <Star className="h-4 w-4 fill-golden-400 text-golden-400" />
          <span className="text-sm font-medium text-cream">
            Family-owned since 1987
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-shadow-lg text-5xl font-bold leading-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Freshly Baked
          <span className="block text-golden-400">With Love</span>
        </h1>

        {/* Subtext */}
        <p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/90 text-shadow-sm sm:text-xl animate-fade-in-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          From golden-crusted artisan breads to delicate, hand-decorated cakes
          every bite tells a story of warmth, tradition, and the simple joy of
          something made from scratch.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          <a
            href="#specialties"
            className="group inline-flex items-center gap-2 rounded-full bg-golden-500 px-8 py-4 text-lg font-semibold text-crust-900 shadow-xl shadow-golden-500/30 transition-all hover:bg-golden-400 hover:shadow-2xl hover:shadow-golden-500/40"
          >
            Explore Our Menu
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-8 py-4 text-lg font-semibold text-cream ring-1 ring-cream/30 backdrop-blur-sm transition-all hover:bg-cream/20"
          >
            Visit Us Today
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-cream/40 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
        </div>
      </div>
    </section>
  );
}
