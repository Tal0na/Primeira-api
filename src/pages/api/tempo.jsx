export default function handler(req, res) {
  const dynamicDate = new Date();

  res.json({
    date: dynamicDate.toGMTString(),
  });
}