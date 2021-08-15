const express = require("express")
const app = express();
const cors = require("cors")
require('dotenv').config()

const db = require("./models");

app.use(express.json())
app.use(cors());


//Routers
const PostRouter = require("./routes/Posts")
app.use("/posts", PostRouter)

const commentsRouter = require("./routes/Comments")
app.use("/comments", commentsRouter)

const usersRouter = require("./routes/Users")
app.use("/auth", usersRouter)

const likesRouter = require("./routes/Likes")
app.use("/likes", likesRouter)


db.sequelize.sync().then(() => {
 app.listen(process.env.PORT || 3306, () => {
  console.log("Backend is working")
 });
})
.catch((err) => {
 console.log(err)
});

