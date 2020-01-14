const mysql = require('mysql');
require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWD = process.env.DB_PASSWD;
const DB_NAME = process.env.DB_NAME;

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWD,
    database: DB_NAME
});

connection.connect(err => {
    if(err) {
        return err;
    }
    else {
        console.log("connected")
    }
});

diseases = [
    {
        disease_id: 1001,
        disease_name: "Cao huyết áp",
    },
    {
        disease_id: 1002,
        disease_name: "Tim mạch",
    },
    {
        disease_id: 1003,
        disease_name: "Máu nhiễm mỡ",
    },
]

images = [
    {
        disease_id: 1001,
        image_id: 1001,
        image_path: "/image/acupuncture/HuyetApCaoThuanTuy.png"
    },
    {
        disease_id: 1001,
        image_id: 1002,
        image_path: "/image/acupuncture/HuyetApCaoThuanTuy-Body.png"
    },
    {
        disease_id: 1001,
        image_id: 1003,
        image_path: "/image/acupuncture/HuyetApCaoThuanTuy-Back.png"
    },
    {
        disease_id: 1001,
        image_id: 1004,
        image_path: "/image/acupuncture/HuyetApCaoThuanTuy-Hand.png"
    },
    {
        disease_id: 1001,
        image_id: 1005,
        image_path: "/image/acupuncture/HuyetApCaoThuanTuy-Head.png"
    },
    {
        disease_id: 1001,
        image_id: 1006,
        image_path: "/image/acupuncture/HuyetApCaoThuanTuy-Leg.png"
    }
]

users = [
    {
        user_id: 1001,
        user_email: "e1@gmail.com",
        user_password: "$2b$10$3MjZKYQtTily46krrezCP.LOyEX.j6cFqiVOL2nFLs.zx6xnAql9a",
        user_firstname: "first1",
        user_lastname: "last1"
    },
    {
        user_id: 1002,
        user_email: "e2@gmail.com",
        user_password: "$2b$10$3MjZKYQtTily46krrezCP.LOyEX.j6cFqiVOL2nFLs.zx6xnAql9a",
        user_firstname: "first2",
        user_lastname: "last2"
    },
    {
        user_id: 1003,
        user_email: "e3@gmail.com",
        user_password: "$2b$10$3MjZKYQtTily46krrezCP.LOyEX.j6cFqiVOL2nFLs.zx6xnAql9a",
        user_firstname: "first3",
        user_lastname: "last3"
    },
    {
        user_id: 1004,
        user_email: "e4@gmail.com",
        user_password: "$2b$10$3MjZKYQtTily46krrezCP.LOyEX.j6cFqiVOL2nFLs.zx6xnAql9a",
        user_firstname: "first4",
        user_lastname: "last4"
    }
]

createDiseases = function() {
    diseases.forEach(element => {
        let sql_command = "INSERT INTO `diseases` (`disease_name`, `disease_id`) VALUES (?, ?)"
        connection.query(sql_command, [element.disease_name, element.disease_id],
            (err, results) => {
                if(err){
                    console.log(err);
                }
                else{
                    console.log(results);
                }
            })
    });
}

createImages = function() {
    images.forEach(element => {
        let sql_command = "INSERT INTO `images` (`image_id`, `disease_id`, `image_path`) VALUES (?, ?, ?)"
        connection.query(sql_command, [element.image_id, element.disease_id, element.image_path],
            (err, results) => {
                if(err){
                    console.log(err);
                }
                else{
                    console.log(results);
                }
            })
    })
}

createUsers = function(){
    users.forEach(element => {
        let sql_command = "INSERT INTO `users` (`user_id`, `user_email`, `user_password`, `user_lastname`, `user_firstname`) VALUES (?, ?, ?, ?, ?)"
        connection.query(sql_command, [element.user_id, element.user_email, element.user_password, element.user_lastname, element.user_firstname],
            (err, results) => {
                if(err){
                    console.log(err);
                }
                else{
                    console.log(results);
                }
            }) 
    })
}

createUsers()
createDiseases()
createImages()

connection.end()
