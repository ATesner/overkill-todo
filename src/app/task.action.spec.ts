import { Task } from "./task.reducer";
import { initTask, INIT, createTask, CREATE } from './task.action';

describe('task.action', () => {

    describe('initTask', () => {
        it('should create an initTask action', () => {

            let payload: Task[] = [
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
            const action = new initTask(payload);
            
            expect({ ...action }).toEqual({ type: INIT, tasks: payload })
        });
    });
    
    describe('createTask', () => {
        it('should create an createTask action', () => {

            let payload: Task = {
                id: 1,
                title: "Cooking",
                description: "Cook something for 6 persons tonight",
                done: false
            }
            const action = new createTask(payload);

            expect({ ...action }).toEqual({ type: CREATE, task: payload })
        });
    });
});