const express = require("express");
const mysql = require("mysql");

const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");


const bcrypt = require("bcrypt");
const { query } = require("express");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "loginsyetem",
});


// Vehicle master

app.post("/vehicle", (req, res) => {
  const regno = req.body.regno;
  const make = req.body.make;
  const model = req.body.model;
  const name = req.body.name;
  const enginno = req.body.enginno;
  const chasisno = req.body.chasisno;
  const auto = req.body.auto;

  db.query(
    "INSERT INTO vehilce (regno,make,model,name,enginno, chasisno,auto) VALUES (?,?,?,?,?,?,?)",
    [regno, make, model, name, enginno, chasisno, auto],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.get("/vehicle", (req, res) => {
  db.query("SELECT * FROM vehilce", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/vehicle/:id", (req, res) => {
  const id = req.params.id;
  console.log("DELETE FROM vehilce WHERE id = " + id + "");
  db.query("DELETE FROM vehilce WHERE id = " + id + "", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/editform/:id", (req, res) => {
  var id = req.params.id;
  console.log("Editt id " + id)
  db.query("SELECT * FROM vehilce where id = " + id + "", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result)
      res.send(result);
    }
  });
});
// const make = req.body.make;
// const model = req.body.model;
// const name = req.body.name;
// const enginno = req.body.enginno;
// const chasisno = req.body.chasisno;
// const auto = req.body.auto;
// app.put("/vupdate", (req, res) => {
//   const id = req.body.id;
//   const regno = req.body.regno;

//   console.log(regno);
//   console.log(id);
//   db.query(
//     "UPDATE vehilce SET regno = ?,  WHERE id = ?",
//     // make= ?, model= ?,name = ?, enginno= ?,chasisno= ?,auto=?
//     [regno],
//       // make,model,name,enginno,chasisno,auto],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );

// });

app.put("/vupdate", (req, res) => {
  const id = req.body.id;
  const regno = req.body.regno;
  const make = req.body.make;
  const model = req.body.model;
  const name = req.body.name;
  const enginno = req.body.enginno;
  const chasisno = req.body.chasisno;
  const auto = req.body.auto;


  console.log(id);
  console.log(regno);
  console.log(model);
  console.log(name);
  console.log(enginno);
  console.log(chasisno);
  console.log(auto);
  db.query(
    "UPDATE vehilce SET regno = ? ,make = ? ,model= ? , name= ? ,enginno= ? ,chasisno= ? ,auto= ? WHERE id = ?",
    [regno, make, model, name, enginno, chasisno, auto, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );

});






app.get("/employees", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/form/:id", (req, res) => {
  var id = req.params.id;
  console.log("Editt id " + id)
  db.query("SELECT * FROM record where id = " + id + "", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result)
      res.send(result);
    }
  });
});



app.put("/update", (req, res) => {

  const name = req.body.name;
  const id = req.body.id;

  console.log(name);
  console.log(id);
  db.query(
    "UPDATE record SET name = ? WHERE id = ?",
    [name, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );

});


app.get('/login/get', (req, res) => {

  db.query('SELECT * FROM record',
    (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send(result);
      }
    })
}
);

app.post("/accreg", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, email, password) VALUES (?,?,?)",
      [username, email, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});


// app.post("/register1", (req, res) => {
//     const name = req.body.name;
//     const desig = req.body.desig;

//    const sqlInsert=
//         "INSERT INTO record (name, desig) VALUES (?,?)";
//         db.query(sqlInsert, [name,desig],(err,result) => {
//           console.log(err);
//         });
//    });  


app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });



  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});


app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log("DELETE FROM record WHERE id = " + id + "");
  db.query("DELETE FROM record WHERE id = " + id + "", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});




app.listen(3001, () => {
  console.log("running server");
});
