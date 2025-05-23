import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: false
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elemNative = this.theHost.nativeElement
    console.log('The image is broken: ', this.theHost)
    elemNative.src = 'assets/images/image-not-found.png'
  }

  constructor(private theHost: ElementRef) {
    
  }


}
