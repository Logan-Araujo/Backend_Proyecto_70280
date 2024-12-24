/*
import { createTransport } from "nodemailer";

const transport = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: ""
});

const sendVerifyEmail = async({ to, verifyCode }) =>{
    try {
       await transport.verify();
       await transport.sendEmail({
        from: "",
        subject: "Verify your email",
        html: ""
       })
    } catch (error) {
        throw error
    }
}

export { sendVerifyEmail };
*/