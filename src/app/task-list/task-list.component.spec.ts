import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatCheckboxModule, MatListModule, MatInputModule, MatButtonModule, MatCardModule, MatDividerModule } from '@angular/material';
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockedBackendService } from '../moked-backend.service';
import { taskReducer, Task } from '../task.reducer';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule,
        FormsModule,
        RouterTestingModule,
        InMemoryWebApiModule.forRoot(MockedBackendService),
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
      declarations: [ TaskListComponent ],
      providers: [AppService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should have title empty', () => {
    expect(component.title).toEqual('');
  });

  it('should have description empty', () => {
    expect(component.description).toEqual('');
  });
});
