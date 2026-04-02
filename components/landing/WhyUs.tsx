import { Truck, Leaf, Star, MapPin } from "lucide-react";

const trustPoints = [
  {
    icon: Truck,
    title: "Fully Mobile",
    description: "We come to your home, office, or wherever you are.",
  },
  {
    icon: Leaf,
    title: "Eco-Safe Products",
    description: "Products that are safe for paint, leather, and the environment.",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Consistently rated 5 stars across Google and Yelp.",
  },
  {
    icon: MapPin,
    title: "Locally Owned",
    description: "Based in West Boylston, serving Worcester County.",
  },
];

export function WhyUs() {
  return (
    <section id="about" className="py-24 px-4 bg-surface">
      <h2 className="font-serif text-4xl text-center mb-16 text-text-primary">
        Why MJP?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {trustPoints.map((point) => {
          const Icon = point.icon;
          return (
            <div key={point.title}>
              <Icon className="w-12 h-12 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-text-primary text-center mb-2">
                {point.title}
              </h3>
              <p className="text-text-secondary text-sm text-center">
                {point.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
