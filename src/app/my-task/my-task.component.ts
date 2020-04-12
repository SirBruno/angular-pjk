import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTask } from '../task.actions';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent {

  task$: Observable<{ name: string, priority: string }>;
  taskName: { name: string, priority: string };

  constructor(private store: Store<{ task: { name: string, priority: string } }>) {
    this.task$ = store.pipe(select('task'));
  }

  addTask() {
    this.store.dispatch(addTask());
  }

}