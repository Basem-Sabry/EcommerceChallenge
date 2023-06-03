import { Component, RendererFactory2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/services/main.service';
import { TranslationsService } from 'src/app/services/translations.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  diFlag: boolean = false
  form!: FormGroup;
  lang: string = ''
  renderer: any
  isArabic: boolean =false;

    constructor(private formBuilder: FormBuilder,private toastr : ToastrService,private router:Router,private TranslationService:TranslationsService , private translate : TranslateService,private rootRenderer: RendererFactory2,private service :MainService) {
      this.renderer = rootRenderer.createRenderer(
        document.querySelector('html'),
        null
      );
  }
  ngOnInit(): void {
    this.initForm()
    this.lang = this.TranslationService.getSelectedLanguage()

  }
  initForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  loginAction() {
    let req_body = { 'username': this.form.value['username'], 'password': this.form.value['password'] }
    if (this.form.status == 'VALID') {
      // if(this.form.ema)
      if (this.form.value['username'].toLowerCase() == 'admin' && this.form.value['password'].toLowerCase()=="admin") {
        localStorage.setItem('role', 'admin')
        localStorage.setItem('userLoginToken', 'loginToken')
        this.service.currentUser.next('admin')
        this.toastr.success('Login Successful')
        this.router.navigate(['admin/index'])
      }
      else if (this.form.value['username'].toLowerCase() == 'user' && this.form.value['password'].toLowerCase() == "user") {
        this.service.currentUser.next('user')

        localStorage.setItem('role', 'user')
        localStorage.setItem('userLoginToken','loginToken')
        this.toastr.success('Login Successful')
        this.router.navigate(['user/index'])
      }
      else {
        this.toastr.error('Wrong Username or Password')
      }
    }
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
}
