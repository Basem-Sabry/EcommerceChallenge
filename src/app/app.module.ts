import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { MainService } from './services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DeleteComponent } from './shared/delete/delete.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationsService } from './services/translations.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    DeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      countDuplicates: true,

    }),
    TranslateModule.forRoot({
      defaultLanguage: 'en'
  }),

    HttpClientModule,
    MatDialogModule,
    MatSelectModule,
    NgxSpinnerModule,
    CarouselModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule

  ],
  providers: [MainService,TranslationsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
