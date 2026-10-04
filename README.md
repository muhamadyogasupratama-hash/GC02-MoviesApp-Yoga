# P2-Challenge-2 (Client Side)

> Tuliskan API Docs kamu di sini

# MOVIE APP SERVER

> Public IPv4: 13.214.151.202

> URL: https://moviesapp.mystools.web.id/

> Movie app server is an application to search movies. It performs standard CRUD actions based on RESTfull concept.

 This app has :
* RESTful endpoint for asset's CRUD operation
* JSON formatted response
 
 Tech Stack used to build this app :
* Node JS
* Express JS framework
* PostgreSQL
* Sequelize
* Bcryptjs

## Global Responses
>These responses are applied globally on all endpoints

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal server error"
}
```

_Response (400 - Bad Request)_
```
{
  "error.name": "{SequelizeValidationError}"
}
```

_Response (401 - Unauthorized)_
```
{
  "error.name": "{Unauthorized || JsonWebTokenError}",
  "message": "Please login first"
}
```

_Response (403 - Forbidden)_
```
{
  "error.name": "{Forbidden}",
  "message": "Forbidden"
}
```

_Response (404 - Not Found)_
```
{
  "message": "Not found"
}
```



## RESTful endpoints
### POST /movies
> Create new movie
_Request Header_
```
{
    'access_token':'<Bearer access_token>'
}
```
_Request Body_
```
{
    "title": "<movie name to get insert into>",
    "synopsis": "<movie synopsis to get insert into>",
    "trailerUrl": "<movie trailerUrl to get insert into>",
    "imgUrl": "<posted movie imgUrl to get insert into>",
    "rating": <movie rating to get insert into>,
    "genreId": <movie genreId to get insert into>,
    "authorId": <movie authorId to get insert into>
}
```
_Response (201)_
```
{
    "message": "Succeed create new movie",
    "data":
    [
        {
            "id": <given id by system>,
            "title": "<posted movie name>",
            "synopsis": "<posted movie synopsis>",
            "trailerUrl": "<posted movie trailerUrl>",
            "imgUrl": "<posted movie imgUrl>",
            "rating": <posted movie rating>,
            "genreId": <posted movie genreId>,
            "authorId": <posted movie authorId>,

        }
    ]
}
```
### GET /movies
> Get all movies

_Request Header_
```
{
    'access_token':'<Bearer access_token>'
}
```
_Request Body_
```
not needed
```
_Response (200)_
```
{
    "message": "Succeed read movies",
    "data": 
    [
        {
            "id": 1,
            "title": "<movie name>",
            "synopsis": "<movie synopsis>",
            "trailerUrl": "<movie trailerUrl>",
            "imgUrl": "<movie imgUrl>",
            "rating": <movie rating>,
            "genreId": <movie genreId>,
            "authorId": <movie authorId>,
            "User": {
                "id": 1,
                "email": "<user email>",
                "role": "<user role>",
                "phoneNumber": "<user phoneNumber>",
                "address": "<user address>"
            },
            "Genre": {
                "id": 1,
                "name": "<genre name>"
            }
        },
        {
            "id": 2,
            "title": "<movie name>",
            "synopsis": "<movie synopsis>",
            "trailerUrl": "<movie trailerUrl>",
            "imgUrl": "<movie imgUrl>",
            "rating": <movie rating>,
            "genreId": <movie genreId>,
            "authorId": <movie authorId>,
            "User": {
                "id": 2,
                "email": "<user email>",
                "role": "<user role>",
                "phoneNumber": "<user phoneNumber>",
                "address": "<user address>"
            },
            "Genre": {
                "id": 2,
                "name": "<genre name>"
            }
        },
    ]
}
```
### GET /movies/:id
> Get single movie as defined by the id provided

_Request Header_
```
{
    'access_token':'<Bearer access_token>''
}
```
_Request Body_
```
not needed
```
_Response (200)_
```
{
    "message": "Succeed read detail movie",
    "data":
    {
        "id": 1,
        "title": "<movie name>",
        "synopsis": "<movie synopsis>",
        "trailerUrl": "<movie trailerUrl>",
        "imgUrl": "<movie imgUrl>",
        "rating": <movie rating>,
        "genreId": <movie genreId>,
        "authorId": <movie authorId>,
        "User": {
            "id": 1,
            "email": "<user email>",
            "role": "<user role>",
            "phoneNumber": "<user phoneNumber>",
            "address": "<user address>"
        },
        "Genre": {
            "id": 1,
            "name": "<genre name>"
        }
    }
}
```
### PUT /movies/:id
> Update an movie defined by the id provided
_Request Header_
```
{
    'access_token':'<Bearer access_token>'
}
```
_Request Body_
```
{
    "title": "<movie name to get insert into>",
    "synopsis": "<movie synopsis to get insert into>",
    "trailerUrl": "<movie trailerUrl to get insert into>",
    "rating": <movie rating to get insert into>,
    "genreId": <movie genreId to get insert into>,
    "authorId": <movie authorId to get insert into>
}
```
_Response (200 - OK)_
```
{
    "message": "Update succeed",
    "data":
    {
        "id": <given id by system>,
        "title": "<posted movie name>",
        "synopsis": "<posted movie synopsis>",
        "trailerUrl": "<posted movie trailerUrl>",
        "imgUrl": "<posted movie imgUrl>",
        "rating": <posted movie rating>,
        "genreId": <posted movie genreId>,
        "authorId": <posted movie authorId>,
    }
}
```
### PATCH /movies/:id
> Update an image URL from file upload on body
_Request Header_
```
{
    'access_token':'<Bearer access_token>'
}
```
_Request Body_
```
{
    "imgUrl": <File Upload>
}
```
_Response (200 - OK)_
```
{
    "message": "Update succeed",
    "data":
    {
        "id": <given id by system>,
        "title": "<posted movie name>",
        "synopsis": "<posted movie synopsis>",
        "trailerUrl": "<posted movie trailerUrl>",
        "imgUrl": "<update posted movie imgUrl>",
        "rating": <posted movie rating>,
        "genreId": <posted movie genreId>,
        "authorId": <posted movie authorId>,
    }
}
```
### DELETE /movies/:id
> Delete a movie defined by the id provided
_Request Header_
```
{
    'access_token':'<Bearer access_token>'
}
```
_Request Body_
```
not needed
```
_Response (200 - OK)_
```
{
    "message": "Delete succeed",
    "deleteMovieById": {
        "id": <id provided>,
        "title": "<delete movie name>",
        "synopsis": "<delete movie synopsis>",
        "trailerUrl": "<delete movie trailerUrl>",
        "imgUrl": "delete movie imgUrl",
        "rating": <delete movie rating>,
        "genreId": <delete movie genreId>,
        "authorId": <delete movie authorId>,
        "createdAt": "2026-09-22T11:13:27.940Z",
        "updatedAt": "2026-09-22T11:13:27.940Z"
    }
}
```


### POST /genres
> Create new genre
_Request Header_
```
{
    'access_token':'<Bearer access_token>'
}
```
_Request Body_
```
{
    "name": "<genre name to get insert into>",
}
```
_Response (201)_
```
{
    "message": "Succeed create genre",
    "data": {
        "id": <given id by system>,
        "name": "<post genre name>"
    }
}
```

### GET /genres
> Get all genres

_Request Header_
```
{
    'access_token':'<Bearer access_token>'
}
```
_Request Body_
```
not needed
```
_Response (200)_
```
{
    "message": "Succeed read genres",
    "data": [
        {
            "id": 1,
            "name": "<genre name>"
        },
        {
            "id": 2,
            "name": "<genre name>"
        },
        {
            "id": 3,
            "name": "<genre name>"
        },
    ]
}
```
### PUT / genres/:id
> Update an genre defined by the id provided
_Request Header_
```
{
    'access_token':'<Bearer access_token>'
}
```
_Request Body_
```
{
    "name": "<genre name to get insert into>",
}
```
_Response (200 - OK)_
```
{
    "message": "Update succeed",
    "data": {
        "id": <id provided>,
        "name": "<post genre name>",
        "updatedAt": "2026-09-22T16:15:25.499Z"
    }
}
```
### DELETE / genres/:id
> Delete a genre defined by the id provided
_Request Header_
```
{
    'access_token':'<Bearer access_token>'
}
```
_Request Body_
```
not needed
```
_Response (200 - OK)_
```
{
    "message": "Delete succeed",
    "deleteGenreById": {
        "id": <id provided>,
        "name": "<post genre name>",
        "created": "2026-09-22T16:15:25.499Z"
        "updatedAt": "2026-09-22T16:15:25.499Z"
    }
}
```

### GET /pub/movies
> Get all movies public

_Request Header_
```
    not needed
```
_Request Body_
```
not needed
```
_Response (200)_
```
{
    "message": "Succeed read movies",
    "data": 
    [
        {
            "id": 1,
            "title": "<movie name>",
            "synopsis": "<movie synopsis>",
            "trailerUrl": "<movie trailerUrl>",
            "imgUrl": "<movie imgUrl>",
            "rating": <movie rating>,
            "genreId": <movie genreId>,
            "authorId": <movie authorId>,
            "Genre": {
                "id": 1,
                "name": "<genre name>"
            }
        },
        {
            "id": 2,
            "title": "<movie name>",
            "synopsis": "<movie synopsis>",
            "trailerUrl": "<movie trailerUrl>",
            "imgUrl": "<movie imgUrl>",
            "rating": <movie rating>,
            "genreId": <movie genreId>,
            "authorId": <movie authorId>,
            "Genre": {
                "id": 2,
                "name": "<genre name>"
            }
        },
    ]
}
```

### GET /pub/movies/:id
> Get single movie as defined by the id provided

_Request Header_
```
not needed
```
_Request Body_
```
not needed
```
_Response (200)_
```
{
    "message": "Succeed read detail movie",
    "data":
    {
        "id": 1,
        "title": "<movie name>",
        "synopsis": "<movie synopsis>",
        "trailerUrl": "<movie trailerUrl>",
        "imgUrl": "<movie imgUrl>",
        "rating": <movie rating>,
        "genreId": <movie genreId>,
        "authorId": <movie authorId>,
        "Genre": {
            "id": 1,
            "name": "<genre name>"
        }
    }
}
```

### GET /genres
> Get all genres

_Request Header_
```
not needed
```
_Request Body_
```
not needed
```
_Response (200)_
```
{
    "message": "Succeed read genres",
    "data": [
        {
            "id": 1,
            "name": "<genre name>"
        },
        {
            "id": 2,
            "name": "<genre name>"
        },
        {
            "id": 3,
            "name": "<genre name>"
        },
    ]
}
```