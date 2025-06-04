import { where } from "sequelize";
import db from "../models/index";
import { defaults } from "lodash";
require('dotenv').config();
import emailService from './emailServices';

let postBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.doctorId || !data.timeType || !data.date) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else {


                await emailService.sendSimpleEmail({
                    receiverEmail: data.email,
                    patientName: 'Nhan',

                    time: '8:00 Chủ Nhật',
                    doctorName: 'AAAAAAA',

                    redirectLink: `https://www.youtube.com/watch?v=0GL--Adfqhc&list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI&index=97`

                })

                let user = await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                        email: data.email,
                        roleId: 'R3'
                    }

                });

                if (user && user[0]) {
                    await db.Booking.findOrCreate({
                        where: { patientId: user[0].id },
                        defaults: {
                            statusId: 'S1',
                            doctorId: data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType
                        }


                    })
                }


                resolve({

                    errCode: 0,
                    errMessage: 'Save infor patient succeed!'
                })
            }

        } catch (e) {
            reject(e);
        }

    })

}
module.exports = {
    postBookAppointment: postBookAppointment
}