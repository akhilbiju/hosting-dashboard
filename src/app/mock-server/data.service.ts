import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentSiteDetails = [
    {
      id: 1,
      domain: 'example.com',
      storage: '500gb',
      usedStorage: '200gb',
      domainTag: 'Primary',
      availableDomains: 10,
      usedDomains: 3,
      monthlyVisitorCapacity: 10000,
      monthlyVisitor: 2000,
      subDomain: [
        {
          id: 11,
          name: 'example.com',
          usedStorage: '10gb',
          domainTag: 'primary',
          monthlyVisitor: 1100,
        },
        {
          id: 12,
          name: 'example-staging.com',
          usedStorage: '10gb',
          domainTag: 'staging',
          monthlyVisitor: 1100,
        },
      ],
    },
    {
      id: 2,
      domain: 'dogsandcats.com',
      storage: '500gb',
      usedStorage: '200gb',
      domainTag: 'Primary',
      status: 'active',
      availableDomains: 10,
      usedDomains: 1,
      monthlyVisitorCapacity: 10000,
      monthlyVisitor: 1000,
      subDomain: [],
    },
  ];

  constructor() {}

  /**
   * Get domain details
   */
  getSiteDetails() {
    return of(this.currentSiteDetails);
  }

  /**
   * Add new domain details
   * @param siteDetails - New Added data
   */
  addSite(siteDetails) {
    this.currentSiteDetails.push(siteDetails);
  }
}
