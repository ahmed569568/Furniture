import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  toHome() {
    document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
  }
  toAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }
  toServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  }
  toTeam() {
    document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
  }
  toPortiflio() {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
  }
  //   toTestimoials(){
  //   document.getElementById("testimoials").scrollIntoView({behavior:"smooth"});
  // }
}
