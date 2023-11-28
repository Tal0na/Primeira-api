"use client"

import React, { useState, useEffect } from "react"

const TempoComponent = () => {
  const [date, setDate] = useState("Carregando...")

  const fetchData = async () => {
    try {
      const response = await fetch("/api/tempo")
      const data = await response.json()
      setDate(data.date)
    } catch (error) {
      console.error("Erro ao buscar dados de tempo:", error)
    }
  }

  useEffect(() => {
    fetchData()

    const intervalId = setInterval(fetchData, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="bg-blue-100 p-4 rounded-md shadow-md mb-4">
      <p className="text-lg font-semibold text-blue-700">Tempo Atual: {date}</p>
    </div>
  )
}

export default TempoComponent
