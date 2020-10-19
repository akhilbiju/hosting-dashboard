import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
  @Input() total;
  @Input() consumed;
  @Input() other;
  @Input() isSubDomain;
  fillValue = '0%';

  constructor() {}

  ngOnInit(): void {
    if (isNaN(this.total)) {
      this.fillValue =
        (+this.consumed.split('gb')[0] / +this.total.split('gb')[0]) * 100 +
        '%';
    } else {
      this.fillValue = (this.consumed / this.total) * 100 + '%';
    }
    if (this.fillValue === 'NaN%') {
      this.fillValue = '0px';
    }
  }
}
