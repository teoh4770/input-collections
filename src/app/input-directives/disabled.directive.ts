import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDisabled]'
})
export class DisabledDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    const $input = this.element.nativeElement.querySelector("input");

    $input.disabled = true;
  }
}
