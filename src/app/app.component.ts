import { Component } from '@angular/core';
import {ItemsService} from'./items.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestApi';
data:any=[];
constructor(private item:ItemsService)
{
  this.item.getData().subscribe(data=>{
    console.warn(data);
    this.data=data;
    console.log(data);
  });
}

}
