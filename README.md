# AuthLog

## Server side application to manage authentication. It is built using Node.js and Express, and persist data using a MongoDB database. 

### Postman collection

[https://documenter.getpostman.com/view/18999728/2s8ZDX53ig](https://documenter.getpostman.com/view/18999728/2s8ZDX53ig)

### Endpoints

1. A POST route to sign up
    
``` 
POST /auth/signUp
HOST authlog-oc6c.onrender.com
```

> Body

| Field | Description |
| --- | --- |
| **name** | name of the user |
| **email** | valid email of the user|
| **password** | password for the account |
| **age** | valid numeric age of the user |
| **address** | address of the user |
    
2. A POST route to log in
    
```
GET /auth/logIn
HOST authlog-oc6c.onrender.com
```
    
> Body

| Field | Description |
| --- | --- |
| **email** | valid email of the user|
| **password** | password for the account |
    

https://documenter.getpostman.com/view/18999728/2s8ZDX53ig
