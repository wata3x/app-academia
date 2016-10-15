import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Api} from "../../providers/api";
import {CategoriaList} from "../categoria-list/categoria-list";

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  email: String
  password: String

  constructor(private navCtrl: NavController, private api: Api, private alertCtrl: AlertController) {}

  login() {
    this.api.login(this.email, this.password)
      .then(response => this.navCtrl.setRoot(CategoriaList),
      responseError => {
        let alert = this.alertCtrl.create({
          title: 'Erro',
          subTitle: 'Não foi possível efetuar o login',
          buttons: ['Fechar']
        });
        alert.present(alert);
      });
  }
}
