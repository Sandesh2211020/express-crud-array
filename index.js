const express = require('express')

const app = express();
const port  = 3000


app.get("/", (req, resp) => {
    const myDetail = {
        name: 'IIMS',
        address:'Dhbidhara',
    }
    resp.json(myDetail);
});

app.listen(port, () => {
    console.log('Application is running on port: ', port)
})