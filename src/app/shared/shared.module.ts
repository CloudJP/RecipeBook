import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AuthComponent } from '../auth/auth.component';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[      
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent
    ],
    imports:[
        CommonModule,
    ],
    exports:[
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        CommonModule
    ],
    entryComponents:[AlertComponent]
})
export class SharedModule{

}