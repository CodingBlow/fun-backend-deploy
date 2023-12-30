require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 7000;

const gitHubData = {
  login: "CodingBlow",
  id: 128313620,
  node_id: "U_kgDOB6XpFA",
  avatar_url: "https://avatars.githubusercontent.com/u/128313620?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/CodingBlow",
  html_url: "https://github.com/CodingBlow",
  followers_url: "https://api.github.com/users/CodingBlow/followers",
  following_url:
    "https://api.github.com/users/CodingBlow/following{/other_user}",
  gists_url: "https://api.github.com/users/CodingBlow/gists{/gist_id}",
  starred_url: "https://api.github.com/users/CodingBlow/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/CodingBlow/subscriptions",
  organizations_url: "https://api.github.com/users/CodingBlow/orgs",
  repos_url: "https://api.github.com/users/CodingBlow/repos",
  events_url: "https://api.github.com/users/CodingBlow/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/CodingBlow/received_events",
  type: "User",
  site_admin: false,
  name: "Farhan Raza",
  company: null,
  blog: "",
  location: "India",
  email: null,
  hireable: true,
  bio: "Hello! I'm a frontend developer specializing in HTML, CSS, and JavaScript. With experience in various frontend frameworks like React. ",
  twitter_username: null,
  public_repos: 18,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2023-03-19T16:49:36Z",
  updated_at: "2023-12-30T11:24:10Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/github", (req, res) => {
  res.json(gitHubData );
});


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
