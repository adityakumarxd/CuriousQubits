const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Session Middleware
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // HTTPS ho to `true`
  })
);

// Passport Initialization
app.use(passport.initialize());
app.use(passport.session());

// Passport Serialization
passport.serializeUser((user, done) => {
  done(null, user.profile); // 🔹 Store full profile instead of just ID
});

passport.deserializeUser((profile, done) => {
  done(null, profile); // 🔹 Directly use profile object
});

// Spotify OAuth Setup
passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/spotify/callback",
    },
    (accessToken, refreshToken, expires_in, profile, done) => {
      return done(null, { profile, accessToken });
    }
  )
);

// Routes
app.get("/", (req, res) => {
  res.send("Backend is Running! 🚀");
});

// Spotify Login Route
app.get("/auth/spotify", passport.authenticate("spotify", { scope: ["user-top-read"] }));

// Spotify Callback Route
app.get(
  "/auth/spotify/callback",
  passport.authenticate("spotify", { failureRedirect: "/" }),
  (req, res) => {
    res.send(`Login Successful! Welcome, ${req.user.displayName || "User"}`);
  }
);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
