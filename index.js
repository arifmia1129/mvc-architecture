const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [
    {
        id: 1,
        name: "Arif",
        age: 32,
    },
    {
        id: 2,
        name: "Binu",
        age: 25
    }
]

const htmlFor = `
    <form action="/users" type="post">
        <input type="text" name="name" placeholder="Enter name"/>
        <input type="number" name="age" placeholder="Enter age"/>
        <button type="submit">Submit</button>
    </form>
`

app.get("/users", (req, res) => {
    res.send(htmlFor);
})


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})