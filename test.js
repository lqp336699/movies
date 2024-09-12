const express = require('express')
const app = express()
const path = require('path')
const superagent = require('superagent'); //requset请求
const cheerio = require('cheerio');
const fs = require('fs')
let targeturl ='https://www.bilibili.com/tv/?spm_id_from=333.1007.0.0'
const port = 3000

app.get('/api/getMovieList', (req, res) => {
    superagent.get(targeturl).end((err,res2)=>{
      $ = cheerio.load(res2.text)
      let fruits = []
        $('img').each((i,elem)=>{
          let temp =  {
            'title':$(elem).find('h3 , a').text
          }
          console.log($(elem))
          fruits.push($(elem).find('span').text()) ;
        })
        console.log(fruits)

      // var fruits = [];
      // $.each((i,elem)=>{
      //   // fruits[i] = $.img;
      // })
      // fruits.join(', ');
      // console.log(fruits,"nbnbnb")
      res.send('oo');
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})