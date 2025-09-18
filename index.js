import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/resume-request", async (req, res) => {
  const { email } = req.body;
  console.log("Resume request from:", email);

  // Notify yourself
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: { user: process.env.MY_EMAIL, pass: process.env.MY_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL, // your email
      subject: "New Resume Download Request",
      text: `User requested your resume: ${email}`,
    });

    // Optional: Auto-send resume to user
    // await transporter.sendMail({
    //   from: process.env.MY_EMAIL,
    //   to: email,
    //   subject: "Your Requested Resume",
    //   text: "Hi, here is my resume as requested.",
    //   attachments: [{ filename: "resume.pdf", path: "./public/resume.pdf" }],
    // });

    res.status(200).json({ message: "Request received" });
  } catch (err) {
    res.status(500).json({ message: "Error sending email" });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
