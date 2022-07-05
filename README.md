# Pholockr
Now live on Heroku! https://pholockr.herokuapp.com/

## About Pholockr:
Pholockr is a Flickr clone created by Xiangyou Wang. User can view images that uploaded by all users.
Users can sign up and log in. Users can also log in as a demo user. Users logged in can upload, edit and delete his own image, as well as leave comments and delete comments.

## Technologies Used:
Javascript
Sequelize
Express
React
Redux
HTML
CSS

## Preparation:
Download this repository.

Run ```npm install``` in both ```backend``` and ```frontend``` folder.

Setup the environment:
```
PORT=5000
DB_USERNAME=auth_app
DB_PASSWORD=password
DB_DATABASE=auth_db
DB_HOST=localhost
JWT_SECRET=
JWT_EXPIRES_IN=
```

Setup the database:
```npx dotenv sequelize db:create```
```npx dotenv sequelize db:migrate```
```npx dotenv sequelize db:seed:all```

Navigate to both ```backend``` and ```frontend``` folder and run ```npm start```.








