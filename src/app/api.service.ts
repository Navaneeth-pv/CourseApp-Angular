import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private htpp:HttpClient) { }

  fetchCourses =()=>

  {
    return this.htpp.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  addCourse=(dataToSend:any)=>
  {
    return this.htpp.post("https://mylinkurcodesapp.herokuapp.com/addcourse",dataToSend)
  }
}
