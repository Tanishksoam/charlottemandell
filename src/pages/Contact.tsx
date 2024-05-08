import { ContactForm } from '@/components/ContactForm'
import banner from '../assets/sections/trees.jpg'
import { Title } from '@/components/typography/Title'

const Contact = () => {
  return (
    <div>
      <Title title="let's get in touch" background={banner} />
      <ContactForm />
    </div>
  )
}

export default Contact