import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { CategoriaList } from '../pages/categoria-list/categoria-list';
import { ExercicioList } from '../pages/exercicio-list/exercicio-list'
import { Login } from '../pages/login/login';
import {Api} from "../providers/api";

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    CategoriaList,
    ExercicioList,
    Login
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    CategoriaList,
    ExercicioList,
    Login
  ],
  providers: [Api]
})
export class AppModule {}
