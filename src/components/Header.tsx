
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="flex flex-col gap-4 py-6">
      <img src={logo} alt="Parrot Logo" className="h-24 lg:h-32 text-center mx-auto" />
      <h1 className="text-3xl mx-auto w-fit">Charlotte Mandell</h1>
    </div>
  )
}

export default Header