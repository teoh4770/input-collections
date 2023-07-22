import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Images } from '../shared/images';
import { ImagesService } from '../shared/images.service';

@Directive({
  selector: '[appEndIcon]'
})
export class EndIconDirective implements OnInit {
  
  @Input() appEndIcon = "";
  images = new Images();
  
  constructor(private element: ElementRef, private imagesService: ImagesService) {}

  ngOnInit(): void {
    const $input = this.element.nativeElement.querySelector("input");
    let imageUrl = "";

    this.imagesService.setImage($input, this.appEndIcon, imageUrl, "icon--rtl");
  }
  
}