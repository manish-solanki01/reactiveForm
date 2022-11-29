import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GridService {

  constructor(private http: HttpClient ) { }

  getUsers(params: any) {
    return this.http.post('http//users', params);
  }

}
