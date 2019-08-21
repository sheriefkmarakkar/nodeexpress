import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  name:String;
  age:number;
  hobbies=[];
  constructor() { 
    this.name="Sherief"
    this.age=24;
    this.hobbies=["sherief","km"];
  
  }

  ngOnInit() {
  }

}
