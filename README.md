# spotify-example-react-nest-next

### How run for development:

1. Start backend server:

   1.1 Go to the server folder

   1.2. Make `npm i` if you hadn't done yet

   1.2 Run `npm start:dev`. Server will start on 5000 port by default. **Port can be overriden in .development.env**

2. Client side server:
   2.1. Go to the client folder

   2.2 Make `npm i` if you hadn't done yet

   2.3 Run `npm run dev`. Server will start on http://localhost:3000 port, and you can open main page after that.



4. Swagger is available by url: localhost:5000/api/docs

5. For the connection to the database need to make next steps:

   3.1: Create database with name: nest-course

   3.2: Credentials should be next: username - **postgres**, password - **root**

   3.3. Port should be 5432

   3.4. **If you wanna change database parameters you can change it in .development.env**

### Used technologies

* React Js (Frontend, Functional Components)
* Nest Js (Backend)
* Next Js (Pre-render)
* Postgres SQL
* REST

### DB Spotify Diagram

![Diagram](helpers/pictures/Spotify%20Diagram.drawio.png)

### UI

![Main Page](helpers/pictures/Main%20page.png)
![Upload track page](helpers/pictures/Upload%20new%20track.png)
![Tracks page](helpers/pictures/Tracks%20page.png)
![Track detail page](helpers/pictures/Track%20detail.png)

