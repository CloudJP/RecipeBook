import {Directive, HostListener, HostBinding,ElementRef} from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective{
    @HostBinding('class.open') isOpen=false;
    /* @HostListener('document:click',['$event']) toggleOpen(event:Event){
        //this.isOpen=!this.isOpen;
        this.isOpen=this.elref.nativeElement.contains(event.target)?!this.isOpen:false;
    } */

    @HostListener('click') toggleOpen(){
        this.isOpen=!this.isOpen;
        if(this.isOpen){
            this.elref.nativeElement.querySelector('.dropdown-menu').classList.add('show')
        } 
        else{
            this.elref.nativeElement.querySelector('.dropdown-menu').classList.remove('show')
        
        }
    }
    constructor(private elref:ElementRef){

    }
}