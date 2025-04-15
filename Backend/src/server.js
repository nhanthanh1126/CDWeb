import express from "express";
// thư viện cho phép lấy tham số từ phía client vd /user?id=7 
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";

require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;
// port === undefined => port = 6969

app.listen(port, () => {
    console.log("Backend nodejs is running on the port : " + port)
})