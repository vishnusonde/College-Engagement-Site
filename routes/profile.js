const express = require("express");
const {getProfile} = require("../controllers/profileController");
const isAuth = require("../middlewares/isAuth");
const User = require("../model/user")
const router = express.Router();
//const request = require("request")

// name // username //email
router.get("/profile", isAuth, getProfile);
router.get("/search/:username", async (req, res) => {
    
    const username = req.params.username;
    console.log(username)
    let data = await User.findOne({username: username});

    if (data) {
        let msg = {
            message: "User exists"
        }
        let dataToSend = await JSON.stringify(msg);
        res.send(dataToSend)
    }else{
        let msg = {
            message: "Username can be used"
        }
        let dataToSend = await JSON.stringify(msg);
        res.send(dataToSend)
    }
})
router.get("/dummy", async (req, res) => {
    // request("https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean", async (err, response, body) => {
    //     if (err) {
    //         console.log(err)
    //     } else if (response.statusCode === 200) {
    //         console.log(response);
    //         console.log(body);
    //         let obj2 = await JSON.parse(body);
    //         console.log(obj2.results);
    //     }
    // })
    // request("http://localhost:3000/blog", async(err, response, body) => {
    //     let data = await JSON.parse(body)
    //     console.log(data.blogs)
    // })
    // let obj = {
    //     name: "vishnu",
    //     roll: 11
    // }
    // '{"name" : "vishnu" , "roll" : 11 }'
    // let json1 = await JSON.stringify(obj);
    // console.log(json1, typeof(json1))

    res.render("dummy.ejs")
})


module.exports = router;
