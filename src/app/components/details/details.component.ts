import { Component, OnInit } from '@angular/core';
import { DataService } from '../../helper/data.service';
import { Observable } from 'rxjs' ;
import { ActivatedRoute } from '@angular/router' ;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user$ : Object ;
  userCity$ : String ;
  user_name : String ;
  user_email : String ;
  user_website : String ;
  user_phone : String ;
 	

  constructor(private data : DataService, private route : ActivatedRoute){
  		this.route.params.subscribe( (params) => { 
  			this.user$ = params.id 
  			console.log('user$ var is set to :',params)
  		})
  }

  ngOnInit() {
  	this.data.getUser(this.user$).subscribe((data:any) => {
      this.userCity$ = data.address.city ;
      this.user_name = data.name ;
      this.user_email = data.email ;
      this.user_website = data.website ;
      this.user_phone = data.phone ;
      console.log(data);
  	});
  }

}
