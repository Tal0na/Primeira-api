# TempoComponent

O componente `TempoComponent` exibe o tempo atual obtido de uma API. Ele também é configurado para atualizar automaticamente a cada minuto.

## Uso

```jsx
import React, { useState, useEffect } from "react";

const TempoComponent = () => {
  const [date, setDate] = useState("Carregando...");

  const fetchData = async () => {
    try {
      const response = await fetch("/api/tempo");
      const data = await response.json();
      setDate(data.date);
    } catch (error) {
      console.error("Erro ao buscar dados de tempo:", error);
    }
  };

  useEffect(() => {
    // Chama a função fetchData imediatamente ao montar o componente
    fetchData();

    // Configura um intervalo para chamar fetchData a cada 1 minuto (60000 milissegundos)
    const intervalId = setInterval(fetchData, 60000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-blue-100 p-4 rounded-md shadow-md mb-4">
      <p className="text-lg font-semibold text-blue-700">
        Tempo Atual: {date}
      </p>
    </div>
  );
};

export default TempoComponent;
