const nodemailer = require('nodemailer');
require('dotenv').config();

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            },
            tls: {
                rejectUnauthorized: false // Отключение проверки сертификата
            }
        })
    }

    async sendActivationMail(data) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER,
            subject: 'The application from Motors Prima', 
            text: '',
            html:
                `
                <div style="display: flex; justify-content: center; align-items: center;">
                    <div>
                        <h1>MOTORS PRIMA</h1>
                        ${data.map(field => {
                            return `<div><b>${field[0]}</b>: ${field[1]}</div>`
                        }).join('')}
                    </div>
                </div>
                `
        })
    }
}


module.exports = new MailService();