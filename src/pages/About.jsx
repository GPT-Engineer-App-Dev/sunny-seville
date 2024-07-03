const About = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Seville</h2>
        <p>Seville is the capital of southern Spain’s Andalusia region. It's famous for flamenco dancing, particularly in its Triana neighborhood. Major landmarks include the ornate Alcázar castle complex, built during the Moorish Almohad dynasty, and the 18th-century Plaza de Toros de la Maestranza bullring. The Gothic Seville Cathedral is the site of Christopher Columbus’s tomb and a minaret turned bell tower, the Giralda.</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="/placeholder.svg" alt="Seville History" className="mx-auto object-cover w-full h-[300px]" />
        <img src="/placeholder.svg" alt="Seville Significance" className="mx-auto object-cover w-full h-[300px]" />
      </section>
    </div>
  );
};

export default About;