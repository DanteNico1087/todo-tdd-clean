import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (_req, res) => res.json({ ok: true }))

const port = process.env.PORT ? Number(process.env.PORT) : 4000
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
