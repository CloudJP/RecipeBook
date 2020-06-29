import {Component, OnInit, OnDestroy} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.servicE';
import { Subscription } from 'rxjs';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit,OnDestroy{
//@Output() featureSelected=new EventEmitter<string>();

/* onSelect(feature:string){
    this.featureSelected.emit(feature);
} */

private userSub:Subscription;
isAuthenticated=false;
ngOnInit(){
this.userSub=this.authService.user.subscribe(user=>{
    this.isAuthenticated=!user ? false : true;
});
}
ngOnDestroy(){
    this.userSub.unsubscribe();
}
constructor(private dataStorageService:DataStorageService,private authService:AuthService){}
onSaveData(){
    this.dataStorageService.storeRecipes();
}
onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
}
onLogout(){
    this.authService.logout();
}

}