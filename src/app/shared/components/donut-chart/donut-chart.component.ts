import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
})
export class DonutChartComponent implements OnInit {
  @Input() total;
  @Input() consumed;
  drawValue = 126;

  constructor() {}

  ngOnInit(): void {
    const percent = (this.consumed / this.total) * 100;
    this.drawValue = ((100 - percent) / 100) * 126;
  }
}
