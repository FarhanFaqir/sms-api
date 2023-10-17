const express = require('express');
const axios = require('axios');

const app = express();

app.get("/send-sms", (req, res) => {
    if(req.query['otp'] === "as12dqTe"){
        const APIKey = '26aae3a585c7389ebbb15f2c7414b730';
        const receiver = req.query['receiver'];
        const sender = 'KeySol DEMO';
        const message = 'This is a test sms form Esipick Directus.';
                
        const url = `http://bsms.keysol.com.pk/sms/api.php?key=${APIKey}&to=${receiver}&sender=${sender}&msg=${encodeURIComponent(message)}`;
                
        axios.get(url)
            .then(response => {
                res.json({ message: 'SMS sent successfully', data: response.data });
            })
            .catch(error => {
                res.send(`Failed to send SMS: ${error.message}`)
            });
    } else {
        res.send("Unauthorized");
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})