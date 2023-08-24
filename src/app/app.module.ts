import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FolderComponent } from './folder/folder.component';
import { HeaderComponent } from './header/header.component';
import { ChildrenComponent } from './children/children.component';

@NgModule({
  declarations: [
    AppComponent,
    FolderComponent,
    HeaderComponent,
    ChildrenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
