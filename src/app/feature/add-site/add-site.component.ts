import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/mock-server/data.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css'],
})
export class AddSiteComponent implements OnInit {
  showModal = false;
  masterForm: FormGroup;
  @Output() addEvent = new EventEmitter();

  get firstSub() {
    const listSub = this.masterForm.get('subDomain') as FormArray;
    return listSub.controls[0];
  }

  get otherSub() {
    const listSub = this.masterForm.get('subDomain') as FormArray;
    return listSub.controls.slice(1);
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.masterForm = new FormGroup({
      domain: new FormControl('', Validators.required),
      storage: new FormControl('', Validators.required),
      monthlyVisitorCapacity: new FormControl('', Validators.required),
      subDomain: new FormArray([this.createInitalGroup()]),
    });
  }

  /**
   * Crearte initial subdomain group
   */
  createInitalGroup() {
    return new FormGroup({
      name: new FormControl(''),
    });
  }

  /**
   * Open modal
   */
  openModal() {
    this.showModal = true;
  }

  /**
   * Close modal
   */
  close() {
    this.showModal = false;
    this.masterForm.reset();
  }

  /**
   * Add sub domain field
   */
  addSub() {
    const subArray = this.masterForm.get('subDomain') as FormArray;
    subArray.push(this.createInitalGroup());
  }

  /**
   * Delete sub domain object
   * @param index Subdomain delete index
   */
  deleteSub(index) {
    const subArray = this.masterForm.get('subDomain') as FormArray;
    subArray.removeAt(index);
  }

  addSiteData() {
    const metaData = {
      usedStorage: '1gb',
      domainTag: 'Primary',
      availableDomains: 10,
      usedDomains: 1,
      monthlyVisitor: 0,
      status: 'active',
    };
    const subDomainMetaData = {
      usedStorage: '0gb',
      domainTag: 'Add-on',
      monthlyVisitor: 0,
    };
    const domainData = { ...metaData, ...this.masterForm.value };
    domainData['storage'] = domainData['storage'] + 'gb';
    for (let index = 0; index < domainData.subDomain.length; index++) {
      domainData.subDomain[index] = {
        ...domainData.subDomain[index],
        ...subDomainMetaData,
      };
      if (!domainData.subDomain[index].name) {
        domainData.subDomain.splice(index, 1);
      }
    }
    this.dataService.addSite(domainData);
    this.addEvent.emit();
  }

  /**
   * Handle save button click
   */
  submit() {
    if (this.masterForm.invalid) {
      this.masterForm.markAllAsTouched();
    } else {
      this.addSiteData();
    }
  }
}
