# express-assess

The API is be able to able to fetch a list of users from a json file. The API also allows the user to fetch a specific user from the JSON file.

## Getting Started

View the project in the Master branch to preview the code.  

### Prerequisites

Git clone the master branch
```
Git clone to your local computer to run it locally.
```

### Installing

Ensure you have Node and NPM installed on your local machine.

```
Run npm install to install all the dependemcies
```

```
Use the command node server.js or nodemon to run the application.
```

```
To test the application run your localhost on postman. Use '/secure' before visiting the API endpoints.
```


### Break down into end to end tests

Use /secure to visit the homepage
```
GET localhost:5000/secure/
```
Use /secure/users to get all users
```
GET localhost:5000/secure/users
```
Use /secure/users/:user_id to get a specific user
```
GET localhost:5000/secure/users/1
```


## Built With

* [NodeJs](https://nodejs.org/en/) - The JS runtime used.
* [Express](https://expressjs.com/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management


## Authors

* **Norbert Anjichi** - *Initial work* - [Lupamo3](https://github.com/lupamo3)


## License

This project is licensed under the GNU General Public License v3.0 License - see the [LICENSE.md](LICENSE.md) file for details