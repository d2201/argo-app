import express from 'express'

const app = express()
const PORT = process.env.PORT || 3100

app.all('*', (req, res) => {
  const result = {
    path: req.path,
    method: req.method,
    query: req.query,
    body: req.body,
    headers: req.headers,
  }

  res.send(`
<html>
<body>
  <h5>Payload you're sending</h5>
  <pre>${JSON.stringify(result, null, 2)}</pre>
</body>
</html>  
`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})