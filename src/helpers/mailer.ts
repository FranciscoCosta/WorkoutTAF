import nodemailer from "nodemailer";

import User from "@/app/ models/userModel";

import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY_EMAIL") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET_PASSWORD") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    const mailOptions = {
      from: "francisco100eg@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY_EMAIL"
          ? "Verificação de email"
          : "Resetar password",
      html: `<p>Clique no link para ${
        emailType === "VERIFY_EMAIL" ? "verificar" : "resetar"
      } seu email</p>
            <a href="http://localhost:3000/${
              emailType === "VERIFY_EMAIL" ? "verifyemail" : "resetpassword"
            }?token=${hashedToken}">Clique aqui</a>`,
    };

    const mailResponse = transport.sendMail(mailOptions);

    return mailResponse;

  } catch (error: any) {
    throw new Error(error);
  }
};
