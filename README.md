# Gdevice



# Agregar rutas.
Durante la creacion del proyecto especificamos que vamos a trabajar con rutas `ng new nombreDeProyecto --routing`

1. Se importan los componentes que querimos mostror en el archivo `app-routing.module.ts` ejemplo:

` import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { DevicesComponent }  from "./components/devices/devices.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component"; `

2. en la cosntante `routes` agregamos la direccion (path) y el componente a renderizar. ejemplo:

`  const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'devices', component:DevicesComponent},
  {path: '**', component:NotFoundPageComponent}
]; `











This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

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
