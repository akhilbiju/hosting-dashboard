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
  searchValue = '';

  constructor(private dataService: DataService) {}

  /**
   * Get data from mock server
   */
  getData() {
    this.dataService.getSiteDetails().subscribe((data) => {
      this.siteData = data;
      this.handleNewData();
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  /**
   * Add new data to table
   */
  handleNewData() {
    this.searchValue = '';
    if (this.entryCount < this.siteData.length) {
      this.entryCount = this.siteData.length;
    }
    this.currentData = this.siteData;
  }

  /**
   * New data add event
   */
  addEvent() {
    this.getData();
  }

  /**
   * Handle entries per page change event
   */
  entryChange() {
    this.searchValue = '';
    const isValidNum = !isNaN(this.entryCount) && this.entryCount > 0;
    this.entryCount = isValidNum ? this.entryCount : 0;
    this.currentData = this.siteData.slice(0, this.entryCount);
  }

  /**
   * Handle search
   * @param event search keyword
   */
  search(event) {
    const keyWord = event.target.value;
    const searchData = this.siteData.filter((domainData: any) =>
      domainData.domain.toLowerCase().includes(keyWord.toLowerCase())
    );
    this.currentData = searchData.slice(0, this.entryCount);
  }
}
