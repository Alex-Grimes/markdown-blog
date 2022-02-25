const express = require('express')
const mongoose = require('mongoose')
const app = express()
const articleRouter = require('./routes/articles')


mongoose.connect('mongodb;//localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    },
    {
    title: 'Test Article2',
    createdAt: new Date(),
    description: 'Test Description2'
    }]

    


    res.render('index', { articles: articles })
})
app.listen(5005)

