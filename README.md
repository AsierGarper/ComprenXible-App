# ComprenXible

## Introduction

Comprenxible is a web application developed by [Asier García][Asier_link], [Mireia Taboada][Mireia_linl] and [Enrique Ortega][Enrique_link] as a final project in the context of [BBK Bootcamp][Bootcamp]. The aim of this application is to **detect symptoms of anxiety and depression** in the users, and to give them an orientative diagnostic.
It was [Accexible][accexible], a startup that works in software for early diagnostic of dementia, that proposed us this challenge. We worked hard for three weeks and this is the result. We hope you find it interesting!

## How it works

Through our application, users may register and take the **test**, wich consists of two parts: **nine questions** with closed answers, and a conversation with our chatbot **Berta**, that will guide the talk in order to get enough information for the analysis. Berta gets each user's answer and calls the API to check if she has enough or has to keep talking.

The answers are finally sent to our **API**, that analyzes them and sends a report to the user via **email**. For analyzing the talk with Berta, we look at factors like answer time, rumination, use of exclusively first person pronouns, and repetition of certain keywords. That's why, by the moment, *our application only works with spanish speakers*.

If the user presents high risk, the email will contain also a list of **psychological assistance centers** near to their location. Note that stored data is **encrypted** through user's password. No readable data is stored in the database, so confidentiality is guaranteed.

## Technologies 

- 💙 Microsoft ASP .Net Core (C#)
- ⚛️ React
- 📒 ️Javascript
- 🍎 Html
- 🐋 CSS
- 📚 SQL database
- 🔐 Encryption (Pbkdf2, AES)
- ⚙️ Object Oriented Programming (OOP)

We've built an API with **Microsoft ASP .Net Core**, in C#, that is called via Axios by a single page application made with **React**, CSS, Html and JS, and a relational database with SQL. All stored data is encrypted with a combination of Pbkdf2 and AES algorithms.

## Setup

If you want to run Comprenxible in your computer, you'll need several things first.

- To work with [React][react] an run the front-end application, you'll need to instal [Node.js][node].
- You'll need to create a relational database. You can find the necessary .sql files in the project's main folder
- Then, you have to connect the API to the new database.
- Further API documentation can be found in the 'Documentation' folder
- Notice that, to be able to use Google geolocalization API, you'll need a [key][google_key] that you should introduce in the axios calls located at *comprenXible_React/src/pages/BertaChatbot/MessageParser.js*:
```
21  axios.post("https://www.googleapis.com/geolocation/v1/geolocate?key=your_api_key")
```
- However, if you don't mind about geolocalization, you can run the application normally without adding this key.

## Contact

If you found this project interesting, you can check out our GitHub portfolios: 
- [Mireia][Mireia_git]
- [Asier][Asier_git]
- [Enrique][Enrique_git]

and also contact us via LinkedIn:
- [Mireia][Mireia_link]
- [Asier][Asier_link]
- [Enrique][Enrique_link]

Thanks a lot!!

   [accexible]: <https://accexible.com>
   [Enrique_link]: <https://www.linkedin.com/in/enrique-ortega-full-stack/>
   [Asier_link]: <https://www.linkedin.com/in/asiergarciaperez/>
   [Mireia_link]: <https://www.linkedin.com/in/mtz-full-stack-developer/>
   [Enrique_git]: <https://github.com/EnriqueTheDog>
   [Asier_git]: <https://github.com/AsierGarper>
   [Mireia_git]: <https://github.com/mireiatz>
   [bootcamp]: <https://bbkbootcamp.com>
   [node]: <https://nodejs.org/en/>
   [react]: <https://es.reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial>
   [google_key]: <https://developers.google.com/maps/documentation/geolocation/get-api-key>
