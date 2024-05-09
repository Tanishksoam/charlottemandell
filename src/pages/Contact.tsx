import { ContactForm } from "@/components/ContactForm";
import banner from "../assets/sections/typing.avif";
import { Title } from "@/components/typography/Title";

const Contact = () => {
  return (
    <div>
      <Title title="let's get in touch" background={banner} />
      {/* content */}
      <div className="max-w-6xl mx-auto py-6">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
