import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  styleUrls: ['./loading-spinner.component.scss'],
  templateUrl: './loading-spinner.component.html'
})

export class LoadingSpinnerComponent {
  @Input() loading: boolean;
}
