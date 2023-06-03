import { Component, RendererFactory2 } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { TranslateService } from '@ngx-translate/core';
import { TranslationsService } from 'src/app/services/translations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {
  allProducts: any = []
  totalPages!: number
  paginatedProducts:any =[]
  currentPage:number = 1
  pageSize: number = 5
  pageSizes = [5, 10, 15, 20]
  lang: any
  renderer: any
  isArabic: boolean =false;
  constructor(public service: MainService,private dialog:MatDialog,private spinner : NgxSpinnerService,private TranslationService : TranslationsService,private translate : TranslateService,private rootRenderer: RendererFactory2,private router : Router) {
    this.renderer = rootRenderer.createRenderer(
      document.querySelector('html'),
      null
    );
}
  ngOnInit(): void {
    this.getProductData()
    this.lang = this.TranslationService.getSelectedLanguage()
  }
  getProductData() {
    this.spinner.show()
    this.service.getAllProducts().subscribe({
      next: (res: any) => {
        console.log(res)
        this.spinner.hide()
        this.allProducts = res
        this.paginatedProducts = res.slice(0,this.pageSize)
        this.totalPages = Math.ceil(this.allProducts.length / this.pageSize)
      },
      error: (err: any) => {
        console.log(err)
        this.spinner.hide()

      }
    });
  }
  addNewProduct() {
    const dialogRef = this.dialog.open(AddProductComponent,{
      height: '600px',
      width: '600px',
      direction:this.lang =='en'?'ltr':'rtl',
      panelClass: "dialog-responsive",
      autoFocus:false
    }).afterClosed().subscribe(res => {
      console.log(res)
      res == true ? this.getProductData():''
    });
  }
  onPageChanged(e: any) {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
      this.currentPage = e
      this.paginatedProducts = this.allProducts.slice((e-1) * this.pageSize ,e * this.pageSize )
    }, 600);
  }
  getPaginator() {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
      this.currentPage = 1
      this.totalPages = Math.ceil(this.allProducts.length / this.pageSize)
      this.paginatedProducts = this.allProducts.slice(0 , this.pageSize )
    }, 600);


  }
  editProduct(product:any) {
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: product,
      height: '600px',
      width: '600px',
      panelClass: "dialog-responsive",
      direction:this.lang =='en'?'ltr':'rtl',
      autoFocus:false
    })
  }
  deleteProduct(id: any) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: id,
      height: '300px',
      width: '450px',
      panelClass: "dialog-responsive",
      direction:this.lang =='en'?'ltr':'rtl',
      autoFocus:false
    })
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
}
