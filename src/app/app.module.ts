import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CollectionsModule } from './collections/collections.module';
// import { ElementsModule } from './elements/elements.module';
import { ModsModule } from './mods/mods.module';
import { ViewsModule } from './views/views.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    /**----Lazy Loading 一開始載入 app.module 的時候不要載入這些-----*/
    // ElementsModule,
    // CollectionsModule,
    // ViewsModule,
    // ModsModule,
    /**---- -----------------*/
    AppRoutingModule, //not-found 跟 home 的 routing 順序放在最後判定就好
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
