import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderMenuComponent } from './src/app/components/menus/header-menu/header-menu.component';
import { MainMenuComponent } from './src/app/components/menus/main-menu/main-menu.component';
import { CategoryMenuComponent } from './src/app/components/menus/category-menu/category-menu.component';
import { ShopByOccasionsMenuComponent } from './src/app/components/menus/shop-by-occasions-menu/shop-by-occasions-menu.component';
import { BestSellingMenuComponent } from './src/app/components/menus/best-selling-menu/best-selling-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    MainMenuComponent,
    CategoryMenuComponent,
    ShopByOccasionsMenuComponent,
    BestSellingMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
