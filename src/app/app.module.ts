import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderMenuComponent } from './components/menus/header-menu/header-menu.component';
import { MainMenuComponent } from './components/menus/main-menu/main-menu.component';
import { CategoryMenuComponent } from './components/menus/category-menu/category-menu.component';
import { ShopByOccasionsMenuComponent } from './components/menus/shop-by-occasions-menu/shop-by-occasions-menu.component';
import { BestSellingMenuComponent } from './components/menus/best-selling-menu/best-selling-menu.component';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from './modules/material.module';
import { CollapsibleSidenavComponent } from './components/collapsible-sidenav/collapsible-sidenav.component';
import { RouterService } from './services/router.service';
import { AdSpaceComponent } from './components/ad-space/ad-space.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    MainMenuComponent,
    CategoryMenuComponent,
    ShopByOccasionsMenuComponent,
    BestSellingMenuComponent,
    CollapsibleSidenavComponent,
    AdSpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
