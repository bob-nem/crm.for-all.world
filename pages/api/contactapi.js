import nodemailer from 'nodemailer'
import API_KEY from '../../apikey'

export default async (req, res) => {
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    secure: true,
    auth: {
      user: API_KEY.user,
      pass: API_KEY.pass
    },
  });

  try {
    const emailRes = await transporter.sendMail({
    from: email,
    to: '79278500916@ya.ru',
    subject: `Contact form submission from ${name}`,
    html: `<p>You have a new contact form submission</p><br>
    <p><strong>Name: </strong> ${name} </p><br>
    <p><strong>E-mail: </strong> ${email} </p><br>
    <p><strong>Phone: </strong> ${phone} </p><br>
    <p><strong>Message: </strong> ${message} </p><br>
    `,
    });

    console.log('Message Sent', emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};