import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockedBackendService } from './moked-backend.service';
import { Task } from './task.reducer';

describe('AppService', () => {

  let appService: AppService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        InMemoryWebApiModule.forRoot(MockedBackendService),
      ],
      providers: [AppService],
    });

    appService = TestBed.get(AppService);

  });

  it('should be created', () => {
    expect(AppService).toBeTruthy();
  })

  describe('getAllTodos', () => {
    it('should return two tasks', (done) => {

      appService.getAllTodos().subscribe((tasks: Task[]) => {
        expect(tasks.length).toBe(2);
        done();
      });  
    });
  });
  
  describe('addTodo', () => {
    it('should return my new task', (done) => {

      let newTask = {
        id: 3,
        title: "Task3",
        description: "Description3",
        done: false
      }

      appService.addTodo(newTask).subscribe((task: Task) => {
        expect({ ...newTask }).toEqual({ ...task });
        done();
      });  
    });
  });

  describe('addTodo', () => {
    it('should add a new task', (done) => {

      let newTask = {
        id: 3,
        title: "Task3",
        description: "Description3",
        done: false
      }

      appService.getAllTodos().subscribe((tasks: Task[]) => {
        expect(tasks.length).toBe(2);
    
        appService.addTodo(newTask).subscribe((task: Task) => {

          appService.getAllTodos().subscribe((tasks: Task[]) => {
            expect(tasks.length).toBe(3);
            done();
          });
        });  
      }); 
    });
  });
  
});