import {RegisterComponent} from "../app/register/register.component"
import {Register1Component} from "../app/register/register1.component"

export const routes = [
  { path: "", component: RegisterComponent },
  { path: "register1", component:Register1Component },
  { path: "register", component: RegisterComponent}
];

export const navigatableComponents = [
  RegisterComponent,
  Register1Component
];