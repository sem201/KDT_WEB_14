const accounts = require("../model/account").accounts();

const loginPage = (req, res) => {
  res.render("login");
};

// Post /login
const login = (req, res) => {
  const { userid, pw } = req.body;
  if (
    accounts.find((account) => account.userid == userid && account.pw == pw)
  ) {
    res.send(true);
  } else {
    res.send(false);
  }
};

module.exports = { loginPage, login };
