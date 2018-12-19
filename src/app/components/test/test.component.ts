import { Component, OnInit } from '@angular/core';
import { TestService } from '../../helper/test.service';
import { Observable } from 'rxjs' ;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  title:String = "Something" ;

  constructor(private testService : TestService){

  }

  ngOnInit(){
      console.log(this.testService.testTItle);
      var user = this.testService.getData().subscribe((data:any)=>{
        console.log(data);
        this.title = data.name ;
      });
  }

}
