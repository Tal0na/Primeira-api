import Image from "next/image"
import TempoComponent from "../components/TempoComponent"

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-purple-600 mb-4">
        Minha Primeira Página com API
      </h1>
      <TempoComponent />
    </>
  )
}
