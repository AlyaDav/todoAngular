import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { TodoItemComponent } from './components/todo-item/todo-item.component'
import { TodoService } from './shared/todo.service';
import { BorderComponent } from './components/border/border.component';

@NgModule({
  declarations: [
    AppComponent, TodoItemComponent, BorderComponent],

  imports: [

    BrowserModule, FormsModule, HttpModule, HttpClientModule],

  providers: [TodoService],

  bootstrap: [AppComponent]
})
export class AppModule { }


