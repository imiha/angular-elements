# to build the app:
npm run build

# to run the angular app:
ng serve --open

# to compile and serve as a standalone web component:
In app.module:
  - comment line 
  bootstrap: [AppComponent]
  - uncomment line:
  ngDoBootstrap() {}
Build the app (see here above).
In GitBash:
- go to the app folder (~/angular-element)
- run command "./custombuild.sh"
- run command "npx live-server preview"


# the tutorial used for this app:
https://blog.bitsrc.io/using-angular-elements-why-and-how-part-1-35f7fd4f0457



# AngularElements

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
