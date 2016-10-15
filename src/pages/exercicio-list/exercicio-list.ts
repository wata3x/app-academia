import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Api} from "../../providers/api";

/*
  Generated class for the ExercicioList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-exercicio-list',
  templateUrl: 'exercicio-list.html'
})
export class ExercicioList {



  constructor(public navCtrl: NavController, private params:NavParams, private api: Api) {
    this.api.categoriaIndex(params.data.id).subscribe( result => {
      this.o = result;
    });
  }

  ionViewDidLoad() {
    console.log('Hello ExercicioList Page');
  }

}
