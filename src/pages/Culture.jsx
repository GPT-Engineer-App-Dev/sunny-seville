const Culture = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Culture of Seville</h2>
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Festivals</h3>
        <p>Seville is known for its vibrant festivals, including the famous Feria de Abril and Semana Santa.</p>
        <img src="/placeholder.svg" alt="Festivals" className="mx-auto object-cover w-full h-[300px]" />
      </section>
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Food</h3>
        <p>Seville offers a rich culinary experience with traditional dishes like tapas, gazpacho, and paella.</p>
        <img src="/placeholder.svg" alt="Food" className="mx-auto object-cover w-full h-[300px]" />
      </section>
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Traditions</h3>
        <p>The city is steeped in traditions, from flamenco dancing to bullfighting.</p>
        <img src="/placeholder.svg" alt="Traditions" className="mx-auto object-cover w-full h-[300px]" />
      </section>
    </div>
  );
};

export default Culture;