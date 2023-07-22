import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSize]'
})
export class SizeDirective implements OnInit {

  @Input() appSize = "md";

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    const $input = this.element.nativeElement.querySelector("input");

    $input.dataset.size = this.appSize;
  }

}
