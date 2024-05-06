const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,

  auth: {
    user: "gomycode_2023@outlook.com",
    pass: "Gomycode2023",
  },
});
async function main() {
  const info = await transporter.sendMail({
    from: '"GOMYCODE SESSION"<gomycode_2023@outlook.com>',
    to: "meddhia@gmail.com",
    subject: "Hello this is a test mail",
    text: "hello dhia , how are you ?",
    html: "<b>Hello world?</b>",
  });
  console.log("Message sent: %s", info.messageId);
}
main().catsh(console.error);
