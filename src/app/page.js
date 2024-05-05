import cardsData from "../../public/cards.json";

const CityCard = ({ card }) => (
  <div className="w-full shadow-xl rounded-lg overflow-hidden md:flex ">
    <img
      src={card.image}
      alt={card.city}
      className="object-cover w-full md:w-1/3 "
    />
    <div className="md:w-2/3 hover:bg-indigo-100 cursor-pointer p-2 md:pt-4 md:pl-4">
      <div className="font-raleway text-2xl md:text-3xl font-bold leading-10 text-left text-darkGrayText">
        {card.city}
      </div>
      <div className="font-raleway text-base md:text-lg font-semibold leading-5 text-left text-lightGrayText mb-2">
        {card.country}
      </div>
      <p className="font-raleway text-base md:text-lg font-medium leading-7 text-left">
        {card.description}
      </p>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="font-raleway text-4xl font-bold leading-tight text-left hover:underline">
        CITIES TO VISIT IN EUROPE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 mt-8 ">
        {cardsData.map((card) => (
          <CityCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
