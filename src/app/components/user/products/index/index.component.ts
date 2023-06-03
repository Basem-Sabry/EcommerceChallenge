import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent {
  categories: any
  filteredCategories: any = []
  allProducts: any

  constructor(private service: MainService, private spinner: NgxSpinnerService,translate: TranslateService) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllCategries()
    this.getAllProducts()
  }
  carouselItems: any = [

  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoHeight: true,
    rtl:true,
    navText: ['<i class="bx bxs-chevron-right"></i>','<i class="bx bxs-chevron-left"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  getStart() {

  }
  getAllCategries() {
    if (!this.service.currentCategroies) {
      this.service.getAllCategries().subscribe({
        next: (res: any) => {
          console.log(res)
          this.categories = res

          this.categories.map((e: any) => {
            this.filteredCategories.push({
              img: `../../../../assets/${e}.png`,
              name: e.replace("'",'').replace(' ','')
            })
          })
        }
      })
    }
    else {
      this.service.currentCategroies.map((e: any) => {
        this.filteredCategories.push({
          img: `../../../../assets/${e}.png`,
          name: e.replace("'",'').replace(' ','')
        })
      })

    }

  }
  getAllProducts() {
    if (!this.service.currentProducts) {
      this.service.getAllProducts().subscribe({
        next: (res: any) => {
          console.log(res)
          this.allProducts = res.slice(0, 7)
          this.carouselItems = res.slice(0, 5)
        }
      })
    }
    else {
      this.allProducts = this.service.currentProducts.slice(0, 7)
      this.carouselItems = this.service.currentProducts.slice(0, 5)
    }

  }

}
