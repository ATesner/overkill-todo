import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockedBackendService } from './moked-backend.service';
import { AppService } from './app.service';

import { StoreModule } from '@ngrx/store';
import { taskReducer } from './task.reducer';
import { reducers } from './reducers';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatListModule, 
  MatInputModule, 
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatDividerModule
} from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'task/:id', component: TaskDetailComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    InMemoryWebApiModule.forRoot(MockedBackendService), //intercept httpClient request
    StoreModule.forRoot(reducers),  
    StoreModule.forFeature('task', taskReducer),
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
