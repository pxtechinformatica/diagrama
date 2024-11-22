import { Directive, HostListener } from "@angular/core";
@Directive({
  selector: "[wheel]"
})
export class WheelDirective {
  private i: number = 1;
  private range: number = 0.5;

  constructor() {}

  @HostListener("mousewheel", ["$event"]) onMousewheel(event: any) {
    if (event.ctrlKey == true) {
      event.preventDefault();
      if (event.wheelDelta > 0) {
        event.srcElement.style.setProperty("transition", "all 200ms ease-in");
        event.srcElement.style.setProperty(
          "transform",
          `scale(${this.i + this.range})`
        );
      }
      if (event.wheelDelta < 0) {
        event.srcElement.style.setProperty("transition", "all 200ms ease-out");
        event.srcElement.style.setProperty(
          "transform",
          `scale(${this.i - this.range})`
        );
      }
    }
  }
}
