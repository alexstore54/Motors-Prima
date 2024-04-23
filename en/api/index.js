
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5123;
const cors = require('cors');
const userMailer = require('./services/userServices');


app.use(cors());
app.use(express.json());


app.post('/send-mail', async (req, res) => {
    try {
        const fields = ["FirstName", "LastName", "Email", "Phone"];
        const userData = [];
        
        fields.forEach(field => {
            if(req.body[field]){
                let arrField = [];
                arrField.push(field)
                arrField.push(req.body[field])
                userData.push(arrField);
            }
        })

        await userMailer.sendActivationMail(userData); // Ожидаем завершения отправки письма
        res.status(200).json(userData);

    }catch(e){
        console.log(e);
        res.status(500).json("Server Error");
    }
})




app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));