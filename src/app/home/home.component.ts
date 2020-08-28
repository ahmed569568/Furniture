import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  images = [
    {
      url: '../../assets/images/01.jpg',
      title: 'image 1',
      subTitle: 'image 1 sub',
      catId: 1,
    },
    {
      url: '../../assets/images/02.jpg',
      title: 'image 2',
      subTitle: 'image 1 sub',
      catId: 2,
    },
    {
      url: '../../assets/images/03.jpg',
      title: 'image 3',
      subTitle: 'image 1 sub',
      catId: 3,
    },
    {
      url: '../../assets/images/04.jpg',
      title: 'image 4',
      subTitle: 'image 1 sub',
      catId: 4,
    },
    {
      url: '../../assets/images/05.jpg',
      title: 'image 4',
      subTitle: 'image 1 sub',
      catId: 5,
    },
    {
      url: '../../assets/images/06.jpg',
      title: 'image 4',
      subTitle: 'image 1 sub',
      catId: 6,
    },
    {
      url: '../../assets/images/07.jpg',
      title: 'image 4',
      subTitle: 'image 1 sub',
      catId: 7,
    },
    {
      url: '../../assets/images/08.jpg',
      title: 'image 4',
      subTitle: 'image 1 sub',
      catId: 8,
    },
    {
      url: '../../assets/images/02.jpg',
      title: 'image 4',
      subTitle: 'image 1 sub',
      catId: 9,
    },
  ];
  curentImages = this.images;
  constructor() {}

  ngOnInit() {}

  getImages(id: any) {
    let images = this.images.filter(function (img) {
      return img.catId == id;
    });
    if (id === 0) {
      this.curentImages = this.images;
    } else {
      this.curentImages = images;
    }
  }
}
