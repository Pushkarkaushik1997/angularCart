import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle2',
  templateUrl: './middle2.component.html',
  styleUrls: ['./middle2.component.css']
})
export class Middle2Component implements OnInit {

  flag = true;

  change(){
    if(this.flag==true){
      this.flag=false;
    }
    else if(this.flag==false)
    {
      this.flag=true;
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
