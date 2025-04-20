const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

exports.sendResetEmail = async (toEmail, resetUrl) => {
    await transporter.sendMail({
        from: `"Pisa Restaurant" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: 'Password Reset Request',
        html: `<p>You requested a password reset. Click the link below:</p>
             <a href="${resetUrl}">${resetUrl}</a>
             <p>This link expires in 1 hour.</p>`
    });
};

exports.sendOrderConfirmation = async (toEmail, orderDetails) => {
    await transporter.sendMail({
        from: `"Pi-Sa Restaurant" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: 'Order Confirmation #' + orderDetails.orderId,
        html: `<h1>Thank you for your order!</h1>
            <p>Order ID: ${orderDetails.orderId}</p>
            <p>Total: ${orderDetails.total}៛</p>
            <p>Estimated delivery: ${orderDetails.estimatedDelivery.toLocaleTimeString()}</p>`
    });
};

exports.sendReservationConfirmation = async (toEmail, { id, name, date, time, people, table }) => {
    await transporter.sendMail({
        from: `"Pisa Restaurant" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: `Reservation Confirmation #${id}`,
        html: `
            <h1>Reservation Confirmed!</h1>
            <p>Dear ${name},</p>
            <p>Your reservation details:</p>
            <ul>
                <li>Date: ${date}</li>
                <li>Time: ${time}</li>
                <li>Party Size: ${people}</li>
                <li>Table: ${table}</li>
            </ul>
            <p>We look forward to serving you!</p>
        `
    });
};