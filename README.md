# nasa-apod-backend

Backend for my infinite scrolling Astronomy Picture of the Day React App.

Serves as a proxy server to protect the identity of a Nasa API key.

If a request has never been made before then, a GET request is sent to the NASA APOD API, the response data is then cached into a MONGODB.

## Installation

Clone or download this repository.

```
git clone git@github.com:jakefrancis/nasa-apod-backend.git
```

Install the required dependencies.

```npm install```

Create a ```.env``` file in the root of the directory  
Open the file and create the following env variables.

```
PORT=3003 or whatever you like
API_KEY=YOUR_API_KEY
MONGODB_URI=ADDRES_OF_YOUR_MONGODB_SERVER
TEST_MONGODB_URI=ADDRES_OF_YOUR_MONGODB_TEST_SERVER
```

To start a production server.

```npm run start```

To start a development server running Nodemon for hot reload on save.

```npm run dev```









