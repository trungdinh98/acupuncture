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
        disease_name: "Huyết áp cao",
    },
]

subdiseases = [
    {
        subdisease_id: 1001,
        disease_id: 1001,
        subdisease_name: "Thuần túy",
    },
    {
        subdisease_id: 1002,
        disease_id: 1001,
        subdisease_name: "Viêm họng - Ho sốt",
    },
    {
        subdisease_id: 1003,
        disease_id: 1001,
        subdisease_name: "Cảm cúm - Viêm sốt cao",
    },
    {
        subdisease_id: 1004,
        disease_id: 1001,
        subdisease_name: "Viêm phổi",
    },
    {
        subdisease_id: 1005,
        disease_id: 1001,
        subdisease_name: "Viêm phế quản mãn tính - Hen mãn tính",
    },
    {
        subdisease_id: 1006,
        disease_id: 1001,
        subdisease_name: "Viêm xoang mãn tính",
    },
    {
        subdisease_id: 1007,
        disease_id: 1001,
        subdisease_name: "Ngưng nghiện rượu - Muốn bỏ rượu",
    },
    {
        subdisease_id: 1008,
        disease_id: 1001,
        subdisease_name: "Nghiện thuốc lá - Muốn bỏ thuốc lá",
    },
    {
        subdisease_id: 1009,
        disease_id: 1001,
        subdisease_name: "Giảm trọng lượng - Giảm cân",
    },
    {
        subdisease_id: 1010,
        disease_id: 1001,
        subdisease_name: "Rối loạn tiêu hoá - Ngộ độc thức ăn - Nhiễm khuẩn - Nhiêm độc tố vi rút",
    },
    {
        subdisease_id: 1011,
        disease_id: 1001,
        subdisease_name: "Táo bón thường xuyên",
    },
    {
        subdisease_id: 1012,
        disease_id: 1001,
        subdisease_name: "Rối loạn tiêu hoá - Đi ngoài hàng ngày nhiều lần - Nhiều ngày - Uống thuốc không đỡ",
    },
    {
        subdisease_id: 1013,
        disease_id: 1001,
        subdisease_name: "Trĩ nội - Trĩ ngoại",
    },
    {
        subdisease_id: 1014,
        disease_id: 1001,
        subdisease_name: "Dị ứng - Ngứa lở",
    },
    {
        subdisease_id: 1015,
        disease_id: 1001,
        subdisease_name: "Viêm thần kinh tọa - Đau lưng - Mông - Hông liên sườn",
    },
    {
        subdisease_id: 1016,
        disease_id: 1001,
        subdisease_name: "Bị trúng phong - Cứng cổ - Bó vai - Tê tay - Chân - Toàn thân đau mỏi khó vận động",
    },
    {
        subdisease_id: 1017,
        disease_id: 1001,
        subdisease_name: "Viêm khớp (Thoái hoá khớp) - Thấp khớp",
    },
    {
        subdisease_id: 1018,
        disease_id: 1001,
        subdisease_name: "Giãn khớp - Cột sống (Thoát vị - Viêm ổ đệm - Lồi ổ đệm)",
    },
    {
        subdisease_id: 1019,
        disease_id: 1001,
        subdisease_name: "Viêm dây thần kinh mặt (số 5; số 7 - Thần kinh sinh ba)",
    },
    {
        subdisease_id: 1020,
        disease_id: 1001,
        subdisease_name: "Viêm dây thần kinh mặt - Trúng phong - Co giật - Méo mặt - Liệt mặt",
    },
    {
        subdisease_id: 1021,
        disease_id: 1001,
        subdisease_name: "Đau dạ dày - Đau dạ dày mãn tính",
    },
    {
        subdisease_id: 1022,
        disease_id: 1001,
        subdisease_name: "Viêm gan - Xơ cứng gan",
    },
    {
        subdisease_id: 1023,
        disease_id: 1001,
        subdisease_name: "Viêm túi mật - Tắc ống mật",
    },
    {
        subdisease_id: 1024,
        disease_id: 1001,
        subdisease_name: "Tuyến giáp trạng - Amidan - Viêm hàm miệng - Viêm xoang miệng",
    },
    {
        subdisease_id: 1025,
        disease_id: 1001,
        subdisease_name: "Biếu cổ thiếu iốt",
    },
    {
        subdisease_id: 1026,
        disease_id: 1001,
        subdisease_name: "Suy thận - Lão hoá thận",
    },
    {
        subdisease_id: 1027,
        disease_id: 1001,
        subdisease_name: "Sỏi thận - Đau cấp",
    },
    {
        subdisease_id: 1028,
        disease_id: 1001,
        subdisease_name: "Viêm thận - Viêm tiết niệu - Viêm bàng quang - Đái dắt - Đái nhiều",
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

createSubDiseases = function() {
    subdiseases.forEach(element => {
        let sql_command = "INSERT INTO `subdiseases` (`subdisease_name`, `subdisease_id`, `disease_id`) VALUES (?, ?, ?)"
        connection.query(sql_command, [element.subdisease_name, element.subdisease_id, element.disease_id],
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
createSubDiseases()
createImages()

connection.end()
