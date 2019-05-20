import {InMemoryDbService} from 'angular-in-memory-web-api'

export class MockedBackendService implements InMemoryDbService {

    //simulate database for fake backend
    createDb() {
        let todos = [
            {
                id: 1,
                title: "Cooking",
                description: "Cook something for 6 persons tonight",
                done: false
            },
            {
                id: 2,
                title: "Repair car",
                description: "Take appointment to the garage on friday",
                done: false
            }
        ];

        return { tasks : todos };
    }
}