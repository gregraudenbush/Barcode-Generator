import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  color = ['green', 'aquamarine', 'yellow', 'red', 'pink', 'black', 'blue', 'purple', 'orange', 'white'];
    
  randomcolor = function(){
    var randomcolor = Math.floor(Math.random()*10);
    return randomcolor
  };

}
