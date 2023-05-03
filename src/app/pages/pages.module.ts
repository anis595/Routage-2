import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookModule } from './book/book.module';
import { HomepageModule } from './homepage/homepage.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookModule,
    HomepageModule,
    ContactModule,
    AboutModule,
  ],
})
export class PagesModule {}
