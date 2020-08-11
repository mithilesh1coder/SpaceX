# Spacexmissions
**Angular Universal SSR**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Development server

Run `npm run dev:ssr` for a dev server in Server Side Rendering mode. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build:ssr` to build the project. The build artifacts will be stored in the `dist/` directory. 
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### About The Spacexmissions Application    
The application has been divided into 1 module and two components i.e mission.component and the app.component.   
The application also has service for HTTP request to the api endpoint i.e. spacemission.service   

**Mission Component**   
It has both the side nav filtering section and the main section for the mission.SASS is being used with box layout to develop and style the UI interface.   
spacemission.service is being as as a dependency injection for API requests.Functionality for filter is developed using conditinal rendering using structural directives.  


## Live App   
https://tranquil-bastion-34842.herokuapp.com/
