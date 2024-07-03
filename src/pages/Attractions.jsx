const Attractions = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Popular Attractions in Seville</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <div className="space-y-2">
          <img src="/placeholder.svg" alt="Attraction 4" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold">Attraction 4</h3>
          <p>A brief description of the attraction.</p>
        </div>
        <div className="space-y-2">
          <img src="/placeholder.svg" alt="Attraction 5" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold">Attraction 5</h3>
          <p>A brief description of the attraction.</p>
        </div>
        <div className="space-y-2">
          <img src="/placeholder.svg" alt="Attraction 6" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold">Attraction 6</h3>
          <p>A brief description of the attraction.</p>
        </div>
      </div>
    </div>
  );
};

export default Attractions;