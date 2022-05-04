import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "9027d385787336",
        pass: "04b244bf0fb112"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@geedget.com>',
            to: 'Samuel Oliveira <samuelloliiveira42@gmail.com>',
            subject,
            html: body,
        })
    }
}