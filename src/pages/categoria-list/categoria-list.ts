import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http, Headers, RequestOptions} from "@angular/http";
import {ExercicioList} from "../exercicio-list/exercicio-list";

/*
  Generated class for the CategoriaList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-categoria-list',
  templateUrl: 'categoria-list.html'
})

export class CategoriaList implements OnInit {
  categorias: Array<any>;

  constructor(public navCtrl: NavController, private http:Http) {}

  ngOnInit(): any {
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('token')
    });
    let options = new RequestOptions({headers: headers});

    this.http.get('http://localhost:8000/api/categorias', options)
      .toPromise().then(response => this.categorias = response.json());
  }

  selecionarCategoria(o) {
    this.navCtrl.push(ExercicioList, {id:o.id});
    console.log(o.id);
  }
}
