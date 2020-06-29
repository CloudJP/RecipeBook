import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.servicE';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
/*   loadedFeature='recipe';
  onNavigateComp(feature:string){
    this.loadedFeature=feature;
  } */
  constructor(private authService:AuthService){}
ngOnInit(){
  this.authService.autoLogin();
}

}
