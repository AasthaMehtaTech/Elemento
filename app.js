const express = require("express");
const passport = require("passport");
const session = require("express-session");

const elementRouter = require("./routes/elementRoute");
const authRouter = require("./routes/authRoute");

const connectDB = require("./config/db");

const app = express();

const port = process.env.PORT || 5000;
connectDB();

app.use(
  session({
    secret: "googleOAuth",
    resave: false,
    saveUninitialized: true,
  })
);

// Passport Config
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/elements", elementRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
