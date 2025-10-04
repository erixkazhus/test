import React from "react";
import CaribeanCruise from '../assets/Caribbean_gay_cruise_2026.jpg'
import Corfu from '../assets/Corfu_Greece_gay_cruise_2023.jpg'
import Vacaya from '../assets/Vacaya_Caribbean_Gay_Cruise-26.jpg'
import Norway from '../assets/Norway_Fjords_Gay_Cruise.jpg'
const posts = [
  {
    title: " Symphony Caribbean All-Gay Cruise 2026 World's Largest Gay Cruise ",
    date: "Sep 10, 2026",
    excerpt:
      "The World’s Biggest Gay Festival at Sea! Set sail on an all-new adventure when the Atlantis mega-cruise lands on the spectacular Symphony of the Seas for the first time! Indulge in the world’s biggest.",
    image: CaribeanCruise
  },
  {
    title: "Corfu Greece All-Gay Cruise 2026",
    date: "Oct 5, 2026",
    excerpt:
      "Discover the myths that are hidden behind the history of every Greek island, by having your holidays in Greece combined with our breathtaking Corfu all-gay cruise. A gay cruise in the Ionian islands means admiring the magnificent landscapes between white cliffs and turquoise waters while disconnecting and enjoying a relaxing holiday, rocked by the sun. The Ionian Islands are an emerald scattering of seven main islands – Ithaca, Corfu, Kefalonia,",
    image: Corfu
  },
  {
    title: "Vacaya Caribbean Gay Cruise 2026",
    date: "Feb 14, 2026",
    excerpt:
      "DisIt’s Valentine’s Day 2026 and there’s NO BETTER WAY TO CELEBRATE than with a picture-perfect and musically-inspired sailing from everyone’s favorite starting point – fabulous and super-LGBT-friendly Fort Lauderdale! For nearly a decade, VACAYA has redefined the LGBT+ cruise experience, creating an inclusive haven where adventure, connection, and freedom converge to form unforgettable memories. ",
  
    image: Vacaya},
  {
    title: "Norway Fjords Luxury All-Gay Cruise 2026",
    date: "Dec 20, 2025",
    excerpt:
      "Seven Breathtaking Ports…Four Enchanting Fjords One Epic Scandinavian Adventure! We are thrilled to invite you to our luxury all-gay Norway Fjords Cruise - a journey born from your stories, dreams, and requests. You’ve shared your love for breathtaking landscapes and epic adventures–and we’ve listened. Norway is simply one of the most beautiful countries on the planet. Imagine sailing through a painting of enchanting fjords, towering cliffs, and rainbow-laced waterfalls. You’ll immerse yourself in a dreamscape of breathtaking panoramic beauty that must be experienced to be believed.",
  
    image: Norway},
];

export default function ToursAdventure() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-pink-500">
        All Gay Cruises
      </h1>

      <div className="flex flex-col gap-12">
        {posts.map((post, index) => (
         <div
            key={post.title}
            className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
            } items-stretch md:items-stretch gap-6`} // items-stretch ensures both divs stretch
            >
            {/* Text */}
            <div className="md:w-1/2">
                <div className="border border-black shadow-lg rounded-lg p-6 bg-white h-full flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-500 mb-2">{post.date}</p>
                    <p className="text-gray-700">{post.excerpt}</p>
                </div>
                </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
                <img
                src={post.image}
                alt={post.title}
                className="border border-black shadow-lg rounded-lg w-full h-full object-cover"
                />
            </div>
            </div>

        ))}
      </div>
    </div>
  );
}
