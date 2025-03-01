const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Error with transporter configuration on line 24:", error);
  } else {
    console.log("Server is ready to send emails! (verified on line 26)");
  }
});

app.post("/send-welcome-email", async (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ message: "Email and Name are required" });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to King Hub Food!",
      html: `
        <h2>Welcome, ${name}!</h2>
        <p>Thank you for joining King Hub Food. We're excited to serve you delicious meals!</p>
        <p>Explore our menu and enjoy great deals on your favorite dishes.</p>
        <p>Best Regards, <br> The King Hub Food Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Welcome email sent successfully!" });
  } catch (error) {
    console.error("Error sending email on line 53:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
});