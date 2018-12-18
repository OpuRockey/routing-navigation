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
  $userCity : String ;
 	

  constructor(private data : DataService, private route : ActivatedRoute){
  		this.route.params.subscribe( (params) => { 
  			this.user$ = params.id 
  			console.log('user$ var is set to :',params)
  		})
  }

  ngOnInit() {
  	this.data.getUser(this.user$).subscribe((data) => {
  		this.user$ = data ;
  		this.userCity$ = data.address.city ;
  		console.log('user$ var is set to :',this.user$)
  	});
  }

}
