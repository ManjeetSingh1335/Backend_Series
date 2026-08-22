require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const githubData={
  "login": "ManjeetSingh1335",
  "id": 236349405,
  "node_id": "U_kgDODhZn3Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/236349405?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ManjeetSingh1335",
  "html_url": "https://github.com/ManjeetSingh1335",
  "followers_url": "https://api.github.com/users/ManjeetSingh1335/followers",
  "following_url": "https://api.github.com/users/ManjeetSingh1335/following{/other_user}",
  "gists_url": "https://api.github.com/users/ManjeetSingh1335/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ManjeetSingh1335/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ManjeetSingh1335/subscriptions",
  "organizations_url": "https://api.github.com/users/ManjeetSingh1335/orgs",
  "repos_url": "https://api.github.com/users/ManjeetSingh1335/repos",
  "events_url": "https://api.github.com/users/ManjeetSingh1335/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ManjeetSingh1335/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Manjeet Singh Teotia ",
  "company": null,
  "blog": "",
  "location": "new Delhi ",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 2,
  "following": 2,
  "created_at": "2025-10-06T09:45:10Z",
  "updated_at": "2026-06-22T18:17:34Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.send('<h1>This is me, Manjeet singh<h1/>');
})

app.get('/github', (req,res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
})