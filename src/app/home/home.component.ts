import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  galleryImages=[
    [
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr1.png"},
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr2.png"},
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr3.png"},
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr4.png"},
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr5.png"},
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr6.png"}

    ],
    [
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr1.png"},
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr3.png"},
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr5.png"}

    ],
    [
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr2.png"},
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr4.png"},
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr6.png"}

    ],
    [
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr1.png"},
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr2.png"},
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr3.png"}

    ],
    [
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr4.png"},
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr5.png"},
        {"imagePath":"https://html.design/demo/furnish/images/layout_img/pr6.png"}

    ]

]

products=[
  {"name":"Aborah","price":1500,"path":"https://html.design/demo/furnish/images/layout_img/1.jpg"},
  {"name":"Phonograph","price":1800,"path":"https://html.design/demo/furnish/images/layout_img/2.jpg"},
  {"name":"Chair","price":200,"path":"https://html.design/demo/furnish/images/layout_img/3.jpg"},
  {"name":"Chair","price":900,"path":"https://html.design/demo/furnish/images/layout_img/4.jpg"},
  {"name":"Camoden","price":5000,"path":"https://html.design/demo/furnish/images/layout_img/5.jpg"},
  {"name":"Chair","price":1500,"path":"https://html.design/demo/furnish/images/layout_img/6.jpg"},
]
IDOfCategory:number=0;

  constructor() {

   }

  ngOnInit(): void {
  }

  onSelectedCategory(item:any)
  {
    this.IDOfCategory=item;
  }
}
