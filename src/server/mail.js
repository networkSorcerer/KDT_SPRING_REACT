require('dotenv').config();

const mailer = require("nodemailer");

const {hello} = require("./hello_template");

const getEmailData = (to, authCode) => {
  data = {
    from: "BabyAngel",
    to,
    subject: "hello",
    html: hello
  }
}