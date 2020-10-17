import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {
  showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(){
    this.showModal = true;
  }

  close(){
    this.showModal = false;
  }

}
