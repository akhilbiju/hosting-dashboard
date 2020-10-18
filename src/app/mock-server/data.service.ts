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
      usedDomains: 2,
      monthlyVisitorCapacity: 10000,
      monthlyVisitor: 7000,
      subDomain: [
        {
          id: 11,
          name: 'example.com',
          usedStorage: '100gb',
          domainTag: 'primary',
          monthlyVisitor: 400,
        },
        {
          id: 12,
          name: 'example-staging.com',
          usedStorage: '100gb',
          domainTag: 'staging',
          monthlyVisitor: 300,
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
    {
      id: 3,
      domain: 'demo.com',
      storage: '500gb',
      usedStorage: '380gb',
      domainTag: 'Primary',
      availableDomains: 10,
      usedDomains: 4,
      monthlyVisitorCapacity: 10000,
      monthlyVisitor: 6500,
      subDomain: [
        {
          id: 31,
          name: 'demo.com',
          usedStorage: '300gb',
          domainTag: 'primary',
          monthlyVisitor: 1200,
        },
        {
          id: 32,
          name: 'suport.demo.com',
          usedStorage: '10gb',
          domainTag: 'Add-on',
          monthlyVisitor: 1100,
        },
        {
          id: 33,
          name: 'test.demo.com',
          usedStorage: '50gb',
          domainTag: 'Add-on',
          monthlyVisitor: 1200,
        },
        {
          id: 34,
          name: 'blog.demo.com',
          usedStorage: '20gb',
          domainTag: 'Add-on',
          monthlyVisitor: 3000,
        },
      ],
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
