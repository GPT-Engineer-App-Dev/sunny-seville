import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <Input id="name" type="text" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <Input id="email" type="email" placeholder="Your Email" />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
          <Input id="subject" type="text" placeholder="Subject" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <Textarea id="message" placeholder="Your Message" />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
      <div className="w-full h-[400px]">
        <img src="/placeholder.svg" alt="Map" className="mx-auto object-cover w-full h-[400px]" />
      </div>
    </div>
  );
};

export default Contact;