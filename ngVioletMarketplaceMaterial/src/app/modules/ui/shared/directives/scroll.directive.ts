import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  velocity = 7;
  scrollInterval: any;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  startScroll(): void {
    this.stopScroll()
    this.velocity = 7; // initial velocity
    const scrollStep = () => {
      if (this.el) {
        this.el.nativeElement.scrollLeft += this.velocity;
        if (Math.abs(this.velocity) > 3.75) { // stop when velocity is low enough
          this.scrollInterval = requestAnimationFrame(scrollStep);
        }
        else if (Math.abs(this.velocity) >= 0.5) { // stop when velocity is low enough
          this.scrollInterval = requestAnimationFrame(scrollStep);
          this.velocity *= .9;
        }
      }
    };
    this.scrollInterval = requestAnimationFrame(scrollStep);
  }

  @HostListener('mouseleave')
  stopScroll(): void {
    if (this.scrollInterval) {
      cancelAnimationFrame(this.scrollInterval);
      this.scrollInterval = null;
    }
  }
}
