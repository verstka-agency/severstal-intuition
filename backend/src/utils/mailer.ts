import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail', // Или используйте другой SMTP-сервис
    auth: {
        user: "severstal2025@gmail.com",
        pass: "acwo lkhi fmnx tfdy",
    },
})

export const sendMagicLink = async (email: string, link: string) => {
    const mailOptions = {
        from: "severstal2025@gmail.com",
        to: email,
        subject: 'Your Magic Link',
        html: `<p>Click <a href="${link}">here</a> to log in.</p>`,
    }

    console.log(mailOptions)

    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.error(error)
    }
}