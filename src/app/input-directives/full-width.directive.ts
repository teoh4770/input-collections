import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFullWidth]'
})
export class FullWidthDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    const $input = this.element.nativeElement.querySelector("input");
    
    $input.style.width = "100%";
  }
}
