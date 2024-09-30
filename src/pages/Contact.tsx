import { ContactForm } from "@/components/ContactForm";
import banner from "../assets/sections/typing.avif";
import { Title } from "@/components/typography/Title";

const Contact = () => {
  return (
    <div className="mx-auto w-[80vw] mt-12">
      <Title title="Let's get in touch" description="Say hello! Use the form or details below for any inquiries or collaborations." background={banner} />
      
      <div className="max-w-6xl mx-auto py-6">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
