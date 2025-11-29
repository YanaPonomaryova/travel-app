import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[hoverHighlight]',
  standalone: true          // ← ТУТ МАЄ БУТИ!
})
export class HoverHighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.03)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', '0.2s');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 4px 12px rgba(0,0,0,0.2)');
  }

  @HostListener('mouseleave')
  onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none');
  }
}
