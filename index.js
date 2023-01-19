const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("pozvan /");
  res.json({
    josip: "josip",
  });
});

app.listen(3000, () => {
  console.log(typeof "");
  let polje = [1, 2, 3, 6];
  let polje2 = [];
  polje.forEach((broj) => {
    polje2.push(broj);
  });
  console.log("polje2: ", polje2);
  console.log("123");
  console.log("Server start");
});
