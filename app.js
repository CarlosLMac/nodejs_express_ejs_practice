// Imports
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
// Use JSON-encoded bodies support
app.use(express.json())
// Use URL-encoded bodies support
app.use(express.urlencoded({ extended: true }))

// Use static files folder
app.use(express.static('public'))

// Set view engine
app.set('view engine', 'ejs')

// Set router
app.use('', require('./routes/pages/navigation'))
app.use('/api/sum', require('./routes/api/sum'))

// Set app listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))