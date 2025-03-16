# Team Details
- Name: uh huh
- Product: Roomies

# About
With the housing, living, rental, everything crisis imploding in our day-to-day life, we've seen people struggling to make ends meet and scraping the bottom trying to survive. 

In particular, being students surrounded by people who live out of home, we've seen **the difficulty of finding a compatible roommate/share house mates** especially as most "good", affordable places are usually 3+ bedroom houses -- afterall, **a good sharehouse mate or roommate, makes or breaks a rental experience**. Common techniques to tackle this problem includes spamming instagram stories looking for roommates/places, going through an arduous (or even minimal) number of friends to see if they want to rent with them, or even the borderline useless Flatmates platform.

We wanted to create the bridge between renters so that they can 'vibe check' their potential roomies before actually signing the lease with them.

# What it does
A website akin to Hinge where instead of finding dates, you **swipe for whether you would like to possibly share an accommodation, except every suggestion is tailored for you**! After sending the 'like' and the other person approves, you are able to chat with them directly to discuss common interests, needs, and perhaps even organise a hang out. This is meant to encourage a space to detect if they are a potentially 'good' roomie.

# Features
- Tailored matches using Langflow API.
- Calming design to soothe stressful situation
- Can put in preferences a user has.

# Tech stack
- Frontend: Typescript, React, HTML/CSS, Bootstrap, Tailwind
- Backend: Typescript, Langflow API, REST API, Express.JS, Node.JS, MongoDB, Astra DB

# Screenshots
![landing_page](https://github.com/user-attachments/assets/4ce60cb8-2cad-4965-b8bd-5aa10761bb4a)
![image](https://github.com/user-attachments/assets/e20df9b8-7651-4a85-8881-f1a74571cba8)
![image](https://github.com/user-attachments/assets/9a614686-ea37-47e4-8bf1-79966f8ebf6c)

## How to run

1. `cd frontend`
2. `npm i`
3. `npm run build`
4. `cd ..\backend`
5. `npm i`
6. `npm run dev`
7. Click the localhost link in terminal.

## Frontend/Backend

Make sure you're in the respective directory.

Here, you can run:

- `npm start` to run the app without the backend
- `npm run build` to build the app for production (and to test with the backend)

### Environment Variables
```
PORT="8080"
OPEN_AI_API_KEY=
ASTRA_DB_TOKEN=
ASTRA_DB_CONN_STRING=
MONGO_DB_CONN_STRING=
GEMINI_API_KEY=
```
