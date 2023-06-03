import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export interface Locale {
  lang: string;
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {
  private langIds: any = [];
  private selectedLanguage!: string;

  constructor(private translate: TranslateService) {
    // get web client default language
    const defaultLang ='en'

    // add new langIds to the list
    this.translate.addLangs([defaultLang]);


  }

  public loadTranslations(...args: Locale[]): void {
    const locales = [...args];

    locales.forEach((locale) => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation(locale.lang, locale.data, true);
      console.log(locale)
      this.langIds.push(locale.lang);
    });

    // add new languages to the list
    this.translate.addLangs(this.langIds);
  }

  public setLanguage(lang: string) {
    if (lang) {
      localStorage.setItem('user-language', lang);
    }
  }

  public getSelectedLanguage(): string {
    return (
      localStorage.getItem('user-language') || this.translate.getDefaultLang()
    );
  }

  public isArabic(): boolean {
    this.selectedLanguage = this.getSelectedLanguage();
    if (this.selectedLanguage === 'ar') {
      return true;
    } else {
      return false;
    }
  }
}
