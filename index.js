const axios = require('axios');
const cheerio = require("cheerio");
const puppeteer = require ('puppeteer');

axios.get('https://www.forextradingbig.com/instaforex-broker-review/')
       .then(response => {
          const html = response.data; 

          const $ = cheerio.load(html);   
          console.log($);    
const scrapedata = $('a', '.comment-bubble').text()
console.log(scrapedata);
       }).catch((error) => {
        console.log(error);
      });
