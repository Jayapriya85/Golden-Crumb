import { Heart, Clock, Wheat } from 'lucide-react';

const storyImage =
  'https://images.pexels.com/photos/8633662/pexels-photo-8633662.jpeg?auto=compress&cs=tinysrgb&w=1200';

const values = [
  {
    icon: Heart,
    title: 'Made with Love',
    text: 'Every recipe carries the warmth of three generations of family bakers.',
  },
  {
    icon: Wheat,
    title: 'Wholesome Ingredients',
    text: 'Locally sourced flour, farm-fresh butter, and never a single preservative.',
  },
  {
    icon: Clock,
    title: 'Baked Fresh Daily',
    text: 'Our ovens fire up at 4 AM so you wake up to bread that is still warm.',
  },
];

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-cream py-24 md:py-32">
      {/* Decorative shape */}
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-golden-100/50 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-cherry-50/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-crust-900/20">
              <img
                src={storyImage}
                alt="Freshly baked rustic sourdough loaves"
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[600px]"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl bg-white p-5 shadow-xl sm:-right-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-golden-100">
                <span className="font-display text-2xl font-bold text-golden-600">
                  37
                </span>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-crust-800">
                  Years of
                </p>
                <p className="text-sm text-crust-500">baking tradition</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-golden-600">
              Our Story
            </p>
            <h2 className="text-4xl font-bold leading-tight text-crust-800 sm:text-5xl">
              A Neighborhood Bakery
              <span className="block text-golden-600">Built on Warmth</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-crust-600">
              It started in 1987 with a tiny corner shop, a secondhand oven, and
              Grandma Rose's handwritten sourdough recipe. The smell of fresh
              bread drifted down the street, and before long, the whole
              neighborhood was gathering at our counter not just for a loaf,
              but for a moment of connection.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-crust-600">
              Three generations later, we still knead every dough by hand, still
              use the same wild yeast starter, and still believe that the best
              things in life are simple, honest, and shared with the people you
              love.
            </p>

            {/* Value cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-crust-100 bg-white/60 p-5 transition-all hover:shadow-lg hover:shadow-crust-200/40"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-golden-100 text-golden-600">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 text-base font-semibold text-crust-800">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-crust-500">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
