import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

    base_url: String = 'http://mybackend.com/api/';
    tasks_endpoint = 'tasks'; 

    constructor(private httpClient: HttpClient) {}

    getAllTodos() {
        return this.httpClient.get(this.base_url + this.tasks_endpoint)
    } 

    updateTodo(update) {
        return this.httpClient.put(this.base_url + this.tasks_endpoint, update)
    }

    addTodo(obj) {
        return this.httpClient.post(this.base_url + this.tasks_endpoint, obj)
    }
} 