import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTask } from '../task.actions';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {

  task$: Observable<{name: string}>;
  taskName: {name: string};

  constructor(private store: Store<{ task: {name: string} }>) {
    this.task$ = store.pipe(select('task'));
  }

  addTask() {
    this.store.dispatch(addTask());
  }

  ngOnInit() {
    console.log(this.taskName);
    this.task$.subscribe((x) => {
      this.taskName = x
      console.log('type of x: ' + typeof(x));
      console.log('type of taskName: ' + typeof(this.taskName));
    });
  }

}