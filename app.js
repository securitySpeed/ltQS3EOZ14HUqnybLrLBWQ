const express=require("express")
const app=express()
const helmet=require('helmet')

require('dotenv').config()

const rateLimit=require('express-rate-limit')

const path=require('path')

app.use(
  rateLimit({ // light rate‑limiter (200 req / 15 min per IP)
    windowMs: 15 * 60 * 1000,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

app.disable('x-powered-by'); 

app.use(helmet());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.use(express.static('public'))



// 404 fallback
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});


app.listen(5500, ()=>{
    console.log(`listening to 5500`)
})