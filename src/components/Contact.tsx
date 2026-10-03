import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Wheat } from 'lucide-react';

const hours = [
  { day: 'Monday — Friday', time: '6:30 AM – 7:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 4:00 PM' },
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function Contact() {
  return (
    <footer id="contact" className="relative bg-crust-900 text-cream">
      {/* Top contact section */}
      <div className="border-b border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-golden-400">
              Come Say Hello
            </p>
            <h2 className="text-4xl font-bold leading-tight text-cream sm:text-5xl">
              Visit Us & Taste the Difference
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/70">
              Whether you are picking up a loaf for dinner or planning a custom
              cake for a special day — we would love to see you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Address card */}
            <div className="rounded-3xl bg-crust-800 p-8 ring-1 ring-cream/10 transition-all hover:ring-golden-400/30">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-golden-500/15 text-golden-400">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-cream">Find Us</h3>
              <p className="leading-relaxed text-cream/70">
                Golden Crumb Bakery
                <br />
                142 Thupathi Post
                <br />
                Erode - 638057.
              </p>
              <a
                href="https://maps.google.com/?q=142+Maplewood+Lane+Portland+OR"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-golden-400 transition-colors hover:text-golden-300"
              >
                Get directions →
              </a>
            </div>

            {/* Hours card */}
            <div className="rounded-3xl bg-crust-800 p-8 ring-1 ring-cream/10 transition-all hover:ring-golden-400/30">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-golden-500/15 text-golden-400">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-cream">Opening Hours</h3>
              <ul className="space-y-3">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between border-b border-cream/5 pb-3 text-sm last:border-0"
                  >
                    <span className="text-cream/70">{h.day}</span>
                    <span className="font-medium text-cream">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact card */}
            <div className="rounded-3xl bg-crust-800 p-8 ring-1 ring-cream/10 transition-all hover:ring-golden-400/30">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-golden-500/15 text-golden-400">
                <Phone className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-cream">Reach Out</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="tel:+15035551234"
                    className="flex items-center gap-3 text-cream/70 transition-colors hover:text-golden-400"
                  >
                    <Phone className="h-4 w-4 text-golden-400/70" />
                    (+91) 7623097680
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@goldencrumb.com"
                    className="flex items-center gap-3 text-cream/70 transition-colors hover:text-golden-400"
                  >
                    <Mail className="h-4 w-4 text-golden-400/70" />
                    hello@goldencrumb.com
                  </a>
                </li>
              </ul>
              <div className="mt-5 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream/5 text-cream/70 transition-all hover:bg-golden-500 hover:text-crust-900"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Wheat className="h-6 w-6 text-golden-400" />
            <span className="font-display text-xl font-bold text-cream">
              Golden Crumb
            </span>
          </div>
          <p className="text-sm text-cream/40">
            © {new Date().getFullYear()} Golden Crumb Bakery. Baked with love
            in Erode.
          </p>
        </div>
      </div>
    </footer>
  );
}
