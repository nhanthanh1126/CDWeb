require('dotenv').config();
//import { result } from 'lodash';

import nodemailer from 'nodemailer';
//const nodemailer = require("nodemailer");


let sendSimpleEmail = async (dataSend) => {
    // send mail with defined transport object
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });
    let info = await transporter.sendMail({
        from: '"Đặt Lịch Khám Bệnh" <datlichkhambenh@gmail.com>', // sender address
        to: dataSend.receiverEmail, // list of receivers
        subject: "Thông tin đặt lệnh khám bệnh", // Subject line
        text: "Hello world?", // plain text body
        // html: getBodyHTMLEmail(dataSend), // html body
        html: "Hello", // html body
    });
}


// let getBodyHTMLEmail = (dataSend) => {
//     let result = ''
//     if (dataSend.language === 'vi') {
//         result = `


//     <h3>Xin Chào ${dataSend.patientName}</h3>
//     <p> Bạn nhận được email này vì đã đặt lịch khẩm bệnh online trên Booking Care</p>
//     <p>Thông tin đặt lịch khám bệnh:</p>
//     <div><b>Thời gian: ${dataSend.time}</b></div>
//     <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

// <p>Nếu các thông tin trên là đúng sự thật, vui lòng click vào đường link bên dưới

// để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh.

// </p>
// <div>

// <a href=${dataSend.redirectLink} target="_blank">Click here</a>

// </div>
// <div>Xin chân thành cảm ơn </div>

//     `
//     }
//     if (dataSend.language === 'en') {
//         result = `


//     <h3>Dear ${dataSend.patientName}</h3>
//     <p> You received this email because you booked an online medical examination on Booking Care</p>
//     <p>Information for scheduling medical examination:</p>
//     <div><b>Time: ${dataSend.time}</b></div>
//     <div><b>Doctor: ${dataSend.doctorName}</b></div>

// <p>If the above information is true, please click on the link below

// to confirm and complete the medical appointment booking procedure.
// </p>
// <div>

// <a href=${dataSend.redirectLink} target="_blank">Click here</a>

// </div>
// <div>Thank you </div>
//     `
//     }
//     return result;
// }
module.exports = {
    sendSimpleEmail: sendSimpleEmail,
    //sendAttachment: sendAttachment
}