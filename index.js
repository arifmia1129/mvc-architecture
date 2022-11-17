const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;
const usersRouter = require("./routes/users.route.js");
const productsRouter = require("./routes/products.route.js")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(usersRouter)
app.use(productsRouter)


app.use((req, res) => {
    res.json({
        message: "Can't get the URL"
    })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})