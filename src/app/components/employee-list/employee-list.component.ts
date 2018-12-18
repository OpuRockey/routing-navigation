import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  rForm : FormGroup ;
  post : any;
  description:String = '';
  name:String = '';

  constructor(private formBuilder: FormBuilder){
  	this.rForm = formBuilder.group({
  		'name' : [null,Validators.required],
  		'description' : [
  			null,
  			Validators.compose([
  				Validators.required,
  				Validators.minLength(30),
  				Validators.maxLength(60)
  			])
  		]
  	})
  }

  ngOnInit() {
  }

  addPost(post){
  		console.log(post);
  		this.name = post.name ;
  		this.description = post.description ;
  }

}
