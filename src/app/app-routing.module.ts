import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
	{
		path : 'departments' , component : DepartmentListComponent
	},
	{
		path : 'employees' , component : EmployeeListComponent
	},
	{
		path : 'posts' , component : PostsComponent
	},
	{
		path : 'users' , component : UsersComponent
	},
	{
		path : 'details/:id' , component : DetailsComponent
	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
	DepartmentListComponent,
	EmployeeListComponent,
	PostsComponent,
	UsersComponent,
	DetailsComponent
]
