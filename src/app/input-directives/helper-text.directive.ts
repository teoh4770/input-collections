import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHelperText]'
})
export class HelperTextDirective implements OnInit {

  @Input() appHelperText = "";

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const $controlGroup = this.element.nativeElement.firstChild;

    $controlGroup.style.setProperty("--helper-text", `'${this.appHelperText}'`);
  }
}
