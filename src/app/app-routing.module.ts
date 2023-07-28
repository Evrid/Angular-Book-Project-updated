import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';  
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { LoginComponent } from './login/login.component'; // Make sure to import the LoginComponent
import { QuoteListComponent } from './quote-list/quote-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'add', component: BookAddComponent },
  { path: 'edit/:id', component: BookEditComponent },
  { path: 'login', component: LoginComponent }, // Route for the login page
  { path: 'quotes', component: QuoteListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
