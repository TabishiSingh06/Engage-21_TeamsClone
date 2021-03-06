
# Microsoft Teams Clone

> This project is a part of the 'Build Phase' of the flagship Microsoft Engage Mentorship Programme 2021. <br>
>Full stack MERN Web App with React hooks, Redux, WebRTC, Socket.io & JWT authentication along with Google OAuth.

This is a project that I built under the "Microsoft Engage Mentorship Programme 2021".
I have successfully built the basic functionality, surprise feature (chat functionality) and  additional functionalities that have been documented below. <br>

I have used the agile methodology and have worked in sprints of 1 week. I've worked on one or two features per Sprint and then got them reviewed in the 1 on 1 meetings with the mentors.

</details>

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a >
    <img src="./client/src/images/microsoft-teams-1.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Read below for the complete documentation!</h3>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#project-overview">Project Overview </a></li>
        <li><a href="#front-end-technologies">Front End Technologies</a></li>
        <li><a href="#back-end-technologies">Back End Technologies</a></li>
        <li><a href="#database">Database</a></li>
        <li><a href="#structure">Structure ✨</a></li>
      </ul>
    </li>    
     <li>
      <a href="#functional-features">Functional Features 🌟✨</a>
    </li>
     <li>
      <a href="#installation">Installation </a>
    </li>
    <li>
      <a href="#references">References 📎</a>
    </li>
   
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
💻 A MERN Stack Video and Chat Application made using React hooks, Redux, WebRTC, Socket.io & JWT authentication along with Google OAuth. 

### Project Overview
Landing Page 

![image](https://user-images.githubusercontent.com/69653249/125422803-3c59e358-5349-4906-8096-d95cfaf26780.png)

Sign in Page

#### Authorisation and Login using JWT. You can also login using GoogleOAuth

![image](https://user-images.githubusercontent.com/69653249/125208856-ae399f00-e2b2-11eb-94c4-68e43a7e55c0.png)

Sign up Page

#### Authorisation and SignUp using JWT. You can also SignUp using GoogleOAuth

![image](https://user-images.githubusercontent.com/69653249/125208863-bb568e00-e2b2-11eb-92c6-a59bcec9f7d5.png)

Video App and Chat App Page 

Video App functionality using WebRTC, Socket.io using UUID for each chat room.
![image](https://user-images.githubusercontent.com/69653249/125208897-e6d97880-e2b2-11eb-9539-bededec4f4cb.png)
![image](https://user-images.githubusercontent.com/69653249/125208913-083a6480-e2b3-11eb-952b-f986a675f175.png)

## Front end Technologies

 Reactjs <br>
 Axios : To send asynchronous HTTP requests to REST endpoints <br>
 Simple-peer : WebRTC video, voice, and data channels <br>
 React router dom <br> 
 Shortid : To create a UUID <br>
 Socket.io-client : To enable real-time bidirectional event-based communication. <br>

## Back end Technologies

NodeJs
ExpressJs
Socket.io

## Database 
MongoDB

## Structure

```
|-- middlewares
|-- models 
|-- routes
|-- passport-setup
`-- client
    `-- src 
        |-- components
        |   `-- chat 
        |   `-- header
        |   `-- HomePage
        |   `-- Login_Signup
        |   `-- Video_app
        |   `-- alert.js   
        |-- images
        |-- reducers
        |-- routes
        |-- utils
        |-- app.css
        |-- app.js
        |-- index.css
        |-- index.js
        
```

## Functional Features

 1. Two people video conferencing
 2. Video on/off Button
 3. Audio on/off Button
 4. Call decline and Accept button
 5. Chat Functionality with rooms
 6. Authentication using JWT
 7. Google OAuth - login & signup
 8. Dynamic Error Handling at login and signup

## Installation

```
$ npm install
```
To run the server (PORT: 5000) and react script (PORT: 3000) concurrently
```
$ npm run dev
```

## References

 JavaScript Mastery  :  https://github.com/adrianhajdin
 True Coder  :  https://github.com/sefyudem
 DevEd  :  https://github.com/developedbyed

