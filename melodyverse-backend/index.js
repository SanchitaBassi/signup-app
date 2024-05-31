// index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./db');


dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());
// app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    const authRoutes = require('./Routes/auth');
    const postsRoutes = require('./Routes/posts');
const User = require('./Models/User');
    
    app.use('/api/auth', authRoutes);
    app.use('/api', postsRoutes);

    mongoose.connect('mongodb://127.0.0.1:27017/test')

app.get('/get',(req, res) => {
User.find()
.then(result => res.json(result))
.catch(err => res.json(err))
})

    
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


