<img src="https://github.com/aturancetin/angular-training-app/blob/main/src/assets/images/logo.png">


The aim of this project is to set up an Angular web application that has authentication mechanism, can connect to a remote REST API and fetch data to the UI. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.3.

## Development server

Run `npm install` to install all packages and dependencies this project has to your local machine.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Technologies and Packages

<li> Firebase SDK was used for authentication.</li>
<li> Angular 11 was used for the UI development.</li>
<li> Chart.js library was used to generate chart components.</li>
<li> ngx-lottie package was used for json lottie handling.</li>
<li> JSONPlaceholder REST API was used for the dummy data.</li>
<li> UX design was created with 'Miro'. </li>
<li> UI design was created with 'Figma' </li>

## Workflow and Pages

<li> On the route '/' user can login to the application. If user logins successfuly, it is redirected to 'dashboard' page.</li>
<li> On the route '/signup' user can signup to the application. If the user finishes signup process successfuly, the user will be redirected to login page. </li>
<li> On the route '/dashboard' which only authenticated users have access, there is a chart that displays the number of completed and uncompleted todos from https://jsonplaceholder.typicode.com/todos API endpoint. </li>
<li> On the route '/posts' which only authenticated users have access, there are posts that are fetched from https://jsonplaceholder.typicode.com/posts API endpoint. </li>
<li> On the route '/users' which only authenticated users have access, there is a list of users that are fetched from https://jsonplaceholder.typicode.com/users API endpoint. Also, there is a section that displays the selected user. </li>
