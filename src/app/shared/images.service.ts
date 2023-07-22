import { Injectable } from '@angular/core';
import { Images } from './images';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private images = new Images();

  setImage($input: HTMLInputElement, selectedIcon: string, url: string, className: string): void {
    $input.classList.add(className);

    switch (selectedIcon) {
      case "password":
        url = this.images.passwordImageUrl;
        break;
      case "phone":
        url = this.images.phoneImageUrl;
        break;
    }

    $input.style.backgroundImage = `url('${url}')`
  }
}
