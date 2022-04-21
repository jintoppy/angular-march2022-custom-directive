import { Directive, HostListener, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAppModal]'
})
export class AppModalDirective {
  @Input()
  appAppModal:string = '';

  @Input()
  myTitle:string='';

  @HostBinding('style.color')
  myColor:string = 'red';

  @HostBinding('class.inactive')
  isActive:boolean = true;

  @HostBinding('disabled')
  isDisabled:boolean = false;


  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event'])
  onHostClick(e: any){
    console.log('clicked');
    console.log(this.el);
    console.log(this.appAppModal);
    console.log(this.myTitle);
    this.isDisabled = true;
    this.myColor = 'blue';
    this.isActive = false;
    console.log(e);
  }

  @HostListener('focus')
  onFocused(){
    console.log('focused');
  }

}
