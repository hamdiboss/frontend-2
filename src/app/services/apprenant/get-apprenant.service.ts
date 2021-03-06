import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class GetApprenantService {

  constructor(private http:Http) { }

  getApprenant(id:number) {
  	let url = "http://localhost:8181/learner/findLearner"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }

}
