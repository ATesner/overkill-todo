import {InMemoryDbService} from 'angular-in-memory-web-api'

export class MockedBackendService implements InMemoryDbService {

    createDb() {
        let todos = [

        ];

        return { tasks : todos };
    }
}