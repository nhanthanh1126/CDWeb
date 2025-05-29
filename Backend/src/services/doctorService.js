import { where } from "sequelize";
import db from "../models/index";

let getTopDoctorHome = (limit) => {
    return new Promise (async(resolve, reject)=>{
        try{
            let users = await db.User.findAll({
                limit: limitInput,
                where: {roleId: 'R2'},
                order:  [['createdAt','DESC']],
                attributes: {
                        exclude: ['password']
                    },
                    include: [
                        { mode: db.Allcode, as: 'positionData', attributes: ['valueEn','valueVi']},
                        { mode: db.Allcode, as: 'genderData', attributes: ['valueEn','valueVi']},
                        
                    ],
                    raw: true,
                    nest: true
        
            })
            resolve({
                errCode: 0,
                data: users
                
            })
        }catch(e) {
            reject(e);

        }
    })
}
    module.exports = {
        getTopDoctorHome: getTopDoctorHome
}