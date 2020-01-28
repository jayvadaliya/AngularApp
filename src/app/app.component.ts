import { Component } from '@angular/core';
import { trigger, transition, style, animation, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity : 0}),
        animate(1700)
      ])
    ])
  ]
})
export class AppComponent {
  title = 'offers';
}
