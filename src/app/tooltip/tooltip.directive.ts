import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from "@angular/core";
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef
} from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";

import { AwesomeTooltipComponent } from "./tooltip.component";

@Directive({ selector: "[awesomeTooltip]" })
export class AwesomeTooltipDirective implements OnInit {
  @Input("awesomeTooltip") text = "";
  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: "center",
          originY: "top",
          overlayX: "center",
          overlayY: "bottom",
          offsetY: -8
        }
      ]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener("click")
  show() {
    console.log(this.overlayRef.);
    if (this.overlayRef) {
      const tooltipRef: ComponentRef<
        AwesomeTooltipComponent
      > = this.overlayRef.attach(new ComponentPortal(AwesomeTooltipComponent));
      tooltipRef.instance.text = this.text;
    } else {
      this.overlayRef.detach();
    }
  }

  @HostListener("blur")
  hide() {
    this.overlayRef.detach();
    console.log(this.overlayRef.hasAttached(), "over");
  }
}
