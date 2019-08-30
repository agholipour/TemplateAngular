import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductData } from './prodcts/product-data';
import { ProductListComponent } from './prodcts/product-list.component';
import { ProductEditComponent } from './prodcts/product-edit.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './shared/material-module';
import { PanelComponent } from './shared/panel/panel.component';
import { MyBootstrapModule } from './shared/bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductEditComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    MyBootstrapModule,
    ToastrModule.forRoot(), // ToastrModule added
    DemoMaterialModule,
    InMemoryWebApiModule.forRoot(ProductData,{delay:5000}),
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id/edit', component: ProductEditComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
