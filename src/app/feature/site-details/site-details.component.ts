import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css'],
})
export class SiteDetailsComponent implements OnInit {
  entryCount = 10;
  siteData = [
    {
      id: 1,
      domain: 'xyz.xom',
      storage: '500gb',
      usedStorage: '200gb',
      domainTag: 'Primary',
      availableDomains: 10,
      usedDomains: 4,
      monthlyVisitorCapacity: 10000,
      monthlyVisitor: 100,
      subDomain: [
        {
          id: 11,
          name: 'adsada.com',
          usedStorage: '10gb',
          domainTag: 'primary',
          monthlyVisitor: 1100,
        },
        {
          id: 12,
          name: 'adsaasdadda.com',
          usedStorage: '10gb',
          domainTag: 'staging',
          monthlyVisitor: 1100,
        },
      ],
    },
    {
      id: 2,
      domain: 'abc.com',
      storage: '500gb',
      usedStorage: '200gb',
      domainTag: 'Primary',
      status: 'active',
      availableDomains: 10,
      usedDomains: 10,
      monthlyVisitorCapacity: 10000,
      monthlyVisitor: 1000,
      subDomain: [],
    },
  ];
  currentData = [];

  constructor() {}

  ngOnInit(): void {
    this.currentData = this.siteData.slice();
  }

  entryChnage() {
    this.currentData = this.siteData.slice(0, this.entryCount);
  }

  search(event) {
    const keyWord = event.target.value;
    this.currentData = this.siteData.filter((domainData: any) =>
      domainData.domain.includes(keyWord)
    );
  }
}
