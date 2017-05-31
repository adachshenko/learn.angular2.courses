import { Directive, ElementRef, HostListener, Input, Renderer, OnInit } from '@angular/core';
@Directive({
  selector: '[borderHighlighter]'
})
export class BorderHighlighterDirective implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('borderHighlighter') public startDate: Date;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  public ngOnInit() {
    this.highlightBotder(this.startDate);
  }

  private highlightBotder(startDate: Date) {
    let currentDate: Date = new Date();
    let twoWeeksAgo: Date = new Date(currentDate.getFullYear(),
      currentDate.getMonth(), currentDate.getDate() - 14);

    if (startDate < currentDate && startDate >= twoWeeksAgo) {
      this.renderer.setElementStyle(this.el.nativeElement, 'border', '3px solid green');
    }

    if (startDate > currentDate) {
      this.renderer.setElementStyle(this.el.nativeElement, 'border', '3px solid blue');
    }
  }
}
