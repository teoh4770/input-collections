import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Images } from '../shared/images';
import { ImagesService } from '../shared/images.service';

@Directive({
  selector: '[appStartIcon]'
})
export class StartIconDirective implements OnInit {
  @Input() appStartIcon = "";
  images = new Images();
  
  constructor(private element: ElementRef, private imagesService: ImagesService) {}

  ngOnInit(): void {
    const $input = this.element.nativeElement.querySelector("input");
    let imageUrl = "";

    this.imagesService.setImage($input, this.appStartIcon, imageUrl, "icon");
  }
}
