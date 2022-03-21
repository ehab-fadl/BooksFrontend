import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }
  getData()
  {
    let url="http://192.168.0.10:8888/api/books";
    return this.http.get(url);
  }
}
//THB//http://192.168.0.100:6555/api/books