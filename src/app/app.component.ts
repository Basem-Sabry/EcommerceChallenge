import { Component } from '@angular/core';
import { TranslationsService } from './services/translations.service';
import { arLang } from './components/i18n/ar';
import { enLang } from './components/i18n/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'stc-ecommerce-challenge';
  constructor(private translationService: TranslationsService) {
    this.translationService.loadTranslations(enLang, arLang);


  }
}
