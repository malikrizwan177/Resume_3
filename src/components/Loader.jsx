import { loader_gif } from "../assets"

export const Loader = () => {
  return (
    <div className="h-lvh flex flex-row justify-center items-center">
        <img src={loader_gif} alt="loader_gif" className="w-32 h-32"/>
    </div>
  )
}
