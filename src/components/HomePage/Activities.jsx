import React from "react";
import cricketFootball from "../../assets/football.avif";
import pickleball from "../../assets/pickleball.avif";
import padel from "../../assets/padel.webp";

const activities = [
  {
    title: "CRICKET AND FOOTBALL",
    image: cricketFootball,
  },
  {
    title: "PICKLEBALL",
    image: pickleball,
  },
  {
    title: "PADEL",
    image: padel,
  },
];

function PopularActivities() {
  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-12 tracking-wide">
          POPULAR ACTIVITIES
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {activities.map((item, index) => (
            <div
              key={index}
              className="relative w-[90%] md:w-[300px] h-[360px] overflow-hidden rounded-xl border-2 border-orange-500 shadow-lg group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent px-4 py-4">
                <p className="text-white font-extrabold text-lg tracking-wide drop-shadow-md">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularActivities;
