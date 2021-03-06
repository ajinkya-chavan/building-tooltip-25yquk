import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { animate, style, transition, trigger } from "@angular/animations";

// animations: [
//   trigger('tooltip', [
//     transition(':enter', [
//       style({ opacity: 0 }),
//       animate(300, style({ opacity: 1 })),
//     ]),
//     transition(':leave', [
//       animate(300, style({ opacity: 0 })),
//     ]),
//   ]),
// ],

@Component({
  selector: "awesome-tooltip",
  styleUrls: ["./tooltip.component.css"],
  templateUrl: "./tooltip.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AwesomeTooltipComponent {
  @Input() text = "";
}
