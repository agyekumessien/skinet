import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.Module';

import { NgxPaginationModule } from 'ngx-pagination';
import { ProductItemComponent } from './shop/product-item/product-item.component';
import { ShopComponent } from './shop/shop/shop.component';
import { PagingHeaderComponent } from './shared/components/paging-header/paging-header.component';
import { ShopModule } from './shop/shop.Module';

@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    NgxPaginationModule,
    ShopModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
