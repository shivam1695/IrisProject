import {RegisterComponent} from "../app/register/register.component"
import {Register1Component} from "../app/register/register1.component"
import {Register2Component} from "../app/register/register2.component"
import {Register3Component} from "../app/register/register3.component"

export const routes = [
  { path: "", component: RegisterComponent },
  { path: "register1", component:Register1Component },
  { path: "register", component: RegisterComponent},
  { path: "register2", component: Register2Component},
  { path: "register3", component: Register3Component}
];

export const navigatableComponents = [
  RegisterComponent,
  Register1Component,
  Register2Component,
  Register3Component
];