export default function handler(req, res) {
  
  const dynamicDate = new Date()
  const options = { timeZone: "America/Sao_Paulo" }
  const formattedDate = dynamicDate.toLocaleString("pt-BR", options)

  res.json({
    date: formattedDate,
  })
}
