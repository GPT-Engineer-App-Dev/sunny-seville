import { Button } from "@/components/ui/button";
import sevilleSummer from '/images/seville-summer.jpg';

const Index = () => {
  return (
    <div className="text-center space-y-8">
      <div className="relative w-full h-[400px]">
        <img src={sevilleSummer} alt="Seville in Summer" className="mx-auto object-cover w-full h-[400px]" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Welcome to Seville</h1>
        </div>
      </div>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Discover the Beauty of Seville</h2>
        <p>Seville is a beautiful city with a rich history and vibrant culture. Explore its stunning architecture, delicious cuisine, and lively festivals.</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <img src="/placeholder.svg" alt="Attraction 1" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold">Attraction 1</h3>
          <p>A brief description of the attraction.</p>
        </div>
        <div className="space-y-2">
          <img src="/placeholder.svg" alt="Attraction 2" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold">Attraction 2</h3>
          <p>A brief description of the attraction.</p>
        </div>
        <div className="space-y-2">
          <img src="/placeholder.svg" alt="Attraction 3" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold">Attraction 3</h3>
          <p>A brief description of the attraction.</p>
        </div>
      </section>
    </div>
  );
};

export default Index;