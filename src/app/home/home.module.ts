import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';  

const routes: Route[] = [
	{ path: "", component: LoginComponent},
	{ path: "register", component: RegisterComponent },

]

@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent],
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
