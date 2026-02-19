import Image from 'next/image';

const cards = [
  {
    number: '01',
    tag: 'Direct Communication',
    title: 'No Middleman.\nNo Miscommunication.',
    body1:
      'Our service platform was designed to minimize the gap between you, the customer, and the actual electrician doing the job. The issue most people have with any electrical service company is miscommunication between the customer\'s request and what the electricians are told they will be doing.',
    body2:
      'This results in electricians showing up to work with the wrong materials, adding more time and cost to you. If you\'re in need of any electrical service, give us a call — we\'d appreciate the chance to be YOUR ELECTRICIAN.',
    image: '/images/cms_upload_food3_1491519149.jpg',
    imageAlt: 'Tiger Electrical food bank project — direct communication in action',
    imageLeft: true,
  },
  {
    number: '02',
    tag: 'Design Build',
    title: 'True Craftsmanship.\nEvery Project.',
    body1:
      'Design build or remodeling an existing facility is one of the major trends in construction right now. Tiger Electrical Services is second to none in the ability to integrate your needs into a set of plans and complete the electrical project with true craftsmanship and customer satisfaction.',
    body2:
      'We are well-trained residential and commercial electricians here to help you complete your project, no matter how large or small. Contact us — we\'d appreciate the opportunity to be YOUR ELECTRICIAN.',
    image: '/images/cms_upload_tower11_1491521927.jpg',
    imageAlt: 'Tiger Electrical tower components project — design build craftsmanship',
    imageLeft: false,
  },
];

export default function Difference() {
  return (
    <section id="difference" className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-4">
        <p className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-5">
          Our Advantage
        </p>
        <h2 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-16">
          What Makes<br />Us Different
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24 md:pb-32 flex flex-col gap-4">
        {cards.map((card) => (
          <div
            key={card.number}
            className={`grid grid-cols-1 lg:grid-cols-2 overflow-hidden border border-white/5`}
          >
            {/* Image */}
            <div
              className={`relative h-72 lg:h-auto min-h-[400px] overflow-hidden ${
                card.imageLeft ? 'lg:order-1' : 'lg:order-2'
              }`}
            >
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Corner accent */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-primary" />
            </div>

            {/* Text */}
            <div
              className={`bg-surface p-10 md:p-14 lg:p-16 flex flex-col justify-center ${
                card.imageLeft ? 'lg:order-2' : 'lg:order-1'
              }`}
            >
              <p className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-5">
                {card.number} / {card.tag}
              </p>
              <h3 className="text-white font-black text-3xl md:text-4xl leading-tight mb-6 whitespace-pre-line">
                {card.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-4">{card.body1}</p>
              <p className="text-text-muted leading-relaxed">{card.body2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
