import { Directive, Input, ElementRef, OnInit,  } from "@angular/core";


@Directive({
  selector: "[appValue]",
})

export class ValueDirective implements OnInit {

  @Input() appValue = ""

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const $input = this.element.nativeElement.querySelector("input");

    $input.value = this.appValue;
  }

}