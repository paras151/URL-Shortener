const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../models/Url');
router.post('/shorten',async (req,res)=>{
    const {longUrl} = req.body;
    console.log(typeof longUrl)
    const baseUrl = config.get('baseUrl');
    
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('invalid base url')
    }

    const urlCode = shortid.generate();
    if(validUrl.isUri(longUrl)){
        try{
            let url = await Url.findOne({longUrl});
            if(url){
                res.json(url);
            }
            else{
                const shortUrl = baseUrl+"/"+urlCode;
                console.log(shortUrl)
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date:new Date()
                });

                await url.save();

                res.json(url);
            }
        }
        catch(err){
            console.log(err)
            res.status(500).json('Server Error')
        }
    }
    else{
        res.status(401).json('Invalid Url');
    }
})

module.exports = router;