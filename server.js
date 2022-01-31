const express = require("express");
const path = require("path");

const fs = require("fs");
const bodyParser = require("body-parser");
const { default: AvLoop } = require("material-ui/svg-icons/av/loop");
const PORT = process.env.PORT || 5000;

const app = express();
const fetch = require('node-fetch');
const util = require('util')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))




// app.post('/view/:id', function (req, res) {
//   console.log(req.body)
//   res.send('POST request to homepage')
// })


// const show = (
//   app.post('/view/:id', function (req, res) {
//     // console.log(req.body)
//     res.send('POST request to ffffhomepage')
//   })

// )
app.get("/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});


app.get("/room/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});





app.get("/teachercreate/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});




app.get("/profile/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});





app.get("/lesson/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});





app.get("/obzor/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});






app.get("/about/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});




app.get("/reset/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});




app.get("/Aps/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});





app.get("/rend/*/*", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});





app.get("/paygroup/*", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});




app.get("/payment/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});








app.get("/auth/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});




app.get("/authp/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});


app.get("/newa/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});


app.get("/newas/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});

app.get("/headers/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});



app.get("/reg/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});





app.get("/users/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});







app.get("/pack/*/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});
app.get("/groups/*/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});
app.get("/gconf/*/*/*/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});
app.get("/conference/*/*/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});









app.get("/newtime/*/*/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});



app.get("/maio/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});


app.get("/group/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});


app.get("/footerm/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});






app.get("/payment/?order_id=:*", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});






app.get("/payment/?order_id=:*", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});




app.get("/docs/ethical_code_of_tutors.html", (req, res) => {


  res.sendFile(path.join(__dirname+'/docs/ethical_code_of_tutors.html'));
});



app.get("/docs/privacy_policy.html", (req, res) => {


  res.sendFile(path.join(__dirname+'/docs/privacy_policy.html'));
});



app.get("/docs/refound_and_cancelation.html", (req, res) => {


  res.sendFile(path.join(__dirname+'/docs/refound_and_cancelation.html'));
});



app.get("/docs/terms_and_conditions.html", (req, res) => {


  res.sendFile(path.join(__dirname+'/docs/terms_and_conditions.html'));
});



app.get("/docs/terms_and_conditions_for_tutors.html", (req, res) => {


  res.sendFile(path.join(__dirname+'/docs/terms_and_conditions_for_tutors.html'));
});




app.get("/view/*", (req, res) => {


  const dates = req.headers
  console.log(req.params[0]);

  const filePath = path.resolve(__dirname, "./build", "index.html");

  // console.log("req body:"+req.body);//outputs '[object object]'
  fs.readFile(filePath, "utf8", (err, data) => {









    fetch('https://api.mydars.uz/api/content/main_page/', {
      method: 'POST',
      headers: {
        // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',

        // 'Content-Type': 'application/json',
        'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",

      },
      body: JSON.stringify({

        "teacher_id": req.params[0]


      })

    })


      .then(res => res.json())

      .then((data4) => {


        // console.log(JSON.parse(data4.main_page.teacher_profile.teacher_lessons[0].name))
   
        
        if (data4.main_page) {
          console.log(util.inspect(data4.main_page.teacher_profile, false, null, true /* enable colors */))

          if (err) {
            // return console.log(err);DESCRIPTION
          }

          data = data
            // .replace(/__TITLE__/g, JSON.stringify(req.query.name))
            // .replace(/__IMG__/g, JSON.stringify(req.query.img));

            .replace(/__TITLE__/g, data4.main_page.teacher_profile.name + ' ' + data4.main_page.teacher_profile.surename)
            .replace(/__IMG__/g, data4.main_page.teacher_profile.avatar_url)
            .replace(/__DESCRIPTION__/g, data4.main_page.teacher_profile.teacher_lessons[0].name + '\r\n' +  'Занимайтесь онлайн с лучшими преподавателями на My Dars!')
          res.send(data)
        }

      }
      )




  });
});




app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})