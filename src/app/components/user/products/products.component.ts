import { Component, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';
import { MainService } from 'src/app/services/main.service';
import { TranslationsService } from 'src/app/services/translations.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class UserProductsComponent {
  categories: any
  allProducts: any
  isOpened = false
  allCategroyProduct: any = []
  lang: any
  renderer: any
  isArabic: boolean =false;
  constructor(public service: MainService,private spinner : NgxSpinnerService,private TranslationService : TranslationsService,private translate : TranslateService,private rootRenderer: RendererFactory2,private router:Router) {
    this.renderer = rootRenderer.createRenderer(
      document.querySelector('html'),
      null
    );
    console.log(this.service.currentLoggedUser)
}
  ngOnInit(): void {
    this.lang = this.TranslationService.getSelectedLanguage()
    this.selectLanguage(this.lang)
    this.getAllCategries()
  }


  getStart() {

  }
  getAllCategries() {
    this.spinner.show()
    this.service.getAllCategries().subscribe({
      next: (res: any) => {

        this.service.currentCategroy.next(res)
        this.categories = res
        this.getAllProducts()

      }
    })
  }
  getAllProducts() {
    this.service.getAllProducts().subscribe({
      next: (res: any) => {
        console.log(res)
        this.allProducts = res
        this.service.currentProduct.next(res)
        this.categories.map((cat: any) => {
          this.allCategroyProduct.push({cat:cat.replace("'",'').replace(' ',''),products: this.allProducts.filter((product: any) => product.category == cat) })
        })
        this.spinner.hide()

        console.log(this.allCategroyProduct)
      }
    })
  }
  shortName(name: string) {
    return name.split(' ')[0] + name.split(' ')[1]
  }
  selectLanguage(lang: string) {
    this.lang = lang
    this.TranslationService.setLanguage(lang);
    this.lang = this.TranslationService.getSelectedLanguage();
    this.isArabic = this.TranslationService.isArabic();
    if (this.isArabic) {
      this.renderer.setAttribute(document.querySelector('html'), 'dir', 'rtl');
      this.renderer.setAttribute(document.querySelector('html'), 'lang', 'ar');
      this.renderer.addClass(document.querySelector('body'), 'arabic');

    } else {
      this.renderer.setAttribute(document.querySelector('html'), 'dir', 'ltr');
      this.renderer.setAttribute(document.querySelector('html'), 'lang', 'en');
    }
    this.translate.use(lang);
  }
  logOut() {
    localStorage.removeItem('role')
    localStorage.removeItem('userLoginToken')

    this.router.navigate(['/login'])
  }
  openMenu() {
    this.isOpened = !this.isOpened
  }
}
