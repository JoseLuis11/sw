import {Directive, ElementRef, HostListener, Input, OnDestroy} from '@angular/core';
import {TooltipPosition} from '../enums/tooltip-position.enum';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tooltip]'
})
export class TooltipDirective implements OnDestroy {

  @Input() tooltip = '';
  @Input() delay ? = 190;
  @Input() position ? = TooltipPosition.LEFT;

  private popup;
  private timer;

  constructor(private el: ElementRef) {
    el.nativeElement.style.setProperty('text-decoration', 'underline');
    el.nativeElement.style.setProperty('text-decoration-style', 'dotted');
  }

  ngOnDestroy(): void {
    if (this.popup) { this.popup.remove(); }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.tooltip) {
      return;
    }
    this.timer = setTimeout(() => {

      this.createTooltipPopup();
    }, this.delay);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.popup) {
      this.popup.remove();
    }
  }

  private  createTooltipPopup() {
    let popup = document.createElement('div');
    popup.innerHTML = this.tooltip;
    popup.setAttribute('class', 'tooltip-container');
    popup = this.setPopupStyles(popup);
    this.el.nativeElement.appendChild(popup);
    this.popup = popup;
  }

  private setPopupStyles(popup) {
    let x;
    let y;
    if (this.position === TooltipPosition.RIGHT) {
      x = this.el.nativeElement.getBoundingClientRect().right + this.el.nativeElement.offsetWidth;
      y = this.el.nativeElement.getBoundingClientRect().top;
      popup.style.top = y.toString() + 'px';
      popup.style.left = (x + 30).toString() + 'px';
      popup.className += ' right';
    }
    if (this.position === TooltipPosition.LEFT) {
      x = this.el.nativeElement.getBoundingClientRect().left - this.el.nativeElement.offsetWidth;
      y = this.el.nativeElement.getBoundingClientRect().top;
      popup.style.top = y.toString() + 'px';
      popup.style.left = (x - 30).toString() + 'px';
      popup.className += ' left';
    }
    return popup;
  }

}
