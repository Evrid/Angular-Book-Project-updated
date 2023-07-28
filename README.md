# MyBookstore

Responsive CRUD application with token management and built in Angular 15 and .NET 6 C# API

 

 The goal is to create a responsive CRUD web application using Angular 15 for the front-end and .NET 6 C# for the back-end API. Additionally, you need to implement token management for user authentication, use Bootstrap and Font Awesome icons for styling, and add a "My Quotes" page where users can add and view their favorite quotes.

 

Requirement:

 

      Implement a web application with a page that displays a list of all books.
      Create a home page with a button to add a new book.
      If you click the "Add new book" button, users should be redirected to a form where they can enter information about a new book (eg title, author, publication date).
      After submitting the form, the user should be redirected back to the home page, where they can see the new book added to the list.
      Each book in the list should have an "Edit" button that can be used to a form where they can edit the details of the book.
      After submitting the form, the user should be redirected back to the home page, where they can see the updated book details in the list.
      Each book in the list should have a "Delete" button that allows the user to remove the book.
      After removing a book, the user should see the book removed from the list.

 

Token Management:

 

      Implement user authentication using JWT (JSON Web Tokens).
      Create a simple login page where users can enter their credentials (eg username and password).
      After successful login, the back-end should generate a token and send it back to the front-end.
      The front-end should store the token securely (eg in local storage or a cookie) and use it for subsequent API requests to the back-end.
      Implement token validation on the back-end to ensure that only authenticated users can access the CRUD operations.

 

My quote page:

 

      Create a separate view called "My Quotes".
      View the list of 5 quotes you like.

 

Responsive Design Testing:

 

      Ensure that the application's layout and components adapt smoothly to different screen sizes, including desktops, tablets and mobile devices.
      Test applications by resizing the browser window and verifying that all elements align correctly.
      Check that navigation menus collapse to a responsive mobile menu on smaller screens.
      Verify that form fields, buttons, and other UI elements maintain proper spacing and alignment across different viewports.
      Test applications on different devices (eg smartphones, tablets) and browsers to ensure consistent behavior.

 

Bootstrap and Font Awesome:

 

       Use Bootstrap to create a responsive and visually appealing layout for the application.

       Use Bootstrap classes to design buttons, forms, and other UI components.

       Include Font Awesome icons to enhance the program's visual elements.

       Verify that the Font Awesome icons display correctly and are used correctly throughout the application.

 

Additional Challenge:

 

Implement a button e that allows the user to switch between light and dark UX design for the application.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
