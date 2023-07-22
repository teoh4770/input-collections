import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appInvalid]'
})
export class InvalidDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    const $controlGroup = this.element.nativeElement.firstChild;

    $controlGroup.classList.add("error");
  }
}
