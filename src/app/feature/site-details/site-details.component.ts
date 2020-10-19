import { Component, OnInit } from '@angular/core';
import { DataService } from '../../mock-server/data.service';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css'],
})
export class SiteDetailsComponent implements OnInit {
  entryCount = 10;
  siteData = [];
  currentData = [];

  constructor(private dataService: DataService) {}

  /**
   * Get data from mock server
   */
  getData() {
    this.dataService.getSiteDetails().subscribe((data) => {
      this.siteData = data;
      this.currentData = data;
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  /**
   * New data add event
   */
  addEvent() {
    this.getData();
  }

  /**
   * Handle entry per change event
   */
  entryChnage() {
    this.currentData = this.siteData.slice(0, this.entryCount);
  }

  /**
   * Handle search
   * @param event search keyword
   */
  search(event) {
    const keyWord = event.target.value;
    this.currentData = this.siteData.filter((domainData: any) =>
      domainData.domain.toLowerCase().includes(keyWord.toLowerCase())
    );
  }
}
