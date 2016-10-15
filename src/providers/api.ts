import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Api {

  constructor(private http: Http) {
    console.log('Hello Api Provider');
  }

  login(email, password):Promise<Object> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('http://localhost:8000/api/login', JSON.stringify({
      email: email,
      password: password
    }),options).toPromise().then(response => {
      let obj = response.json();
      let token = obj.token;
      localStorage.setItem('token', token);
      return obj;
    });
  }

  categoriaIndex(id) {
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('token')
    });
    let options = new RequestOptions({headers: headers});

    return this.http.get('http://localhost:8000/api/categorias/'+id, options)
      .map(res => res.json);
  }

}
