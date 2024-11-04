import { Directive, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';
import { DisableButtonService } from '../services/DisableButton.directive';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appSubmit]',
  standalone: true,
})
export class SubmitDirective implements OnInit {

  private subscription: any;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2, private disableButtonService: DisableButtonService) {
    this.renderer2.removeClass(this.elementRef.nativeElement, 'btn-loading');
    this.renderer2.addClass(this.elementRef.nativeElement, 'btn');
    this.renderer2.addClass(this.elementRef.nativeElement, 'btn-enable');

    console.log(elementRef)
  }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.changeColor('red'); // Vuelve al color original
  // }

  ngOnInit() {
    // oyente
    this.subscription = this.disableButtonService.disable$.subscribe((disabled) => {
      if (disabled) {
        this.renderer2.removeClass(this.elementRef.nativeElement, 'btn-enable');
        this.renderer2.addClass(this.elementRef.nativeElement, 'btn-loading');
        this.renderer2.setProperty(this.elementRef.nativeElement, 'disabled', true);
      } else {
        this.renderer2.addClass(this.elementRef.nativeElement, 'btn-enable');
        this.renderer2.removeClass(this.elementRef.nativeElement, 'btn-loading');
        this.renderer2.setProperty(this.elementRef.nativeElement, 'disabled', false);
      }
    });
  }

  // enbledButton() {
  //   this.renderer2.removeClass(this.elementRef.nativeElement, 'btn-enable');
  //   this.renderer2.addClass(this.elementRef.nativeElement, 'btn-loading');
  //   this.renderer2.setProperty(this.elementRef.nativeElement, 'disabled', true);
  // }

  disableButton() {
    this.disableButtonService.disableButton();
  }

  private changeColor(color: string) {
    console.log(this.elementRef.nativeElement)
    this.renderer2.setStyle(this.elementRef.nativeElement, 'color', color);
  }

}
