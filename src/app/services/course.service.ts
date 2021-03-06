import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor( private http:HttpClient) {
  
  }
  getCourses():Observable<object>
{
  return this.http.get("http://localhost:8889/open-api/courses");
}}

