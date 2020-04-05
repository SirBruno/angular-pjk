import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { tasks } from '../tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  @Input() priority: string[];

  tasks = tasks;

  constructor() { }

  ngOnInit(): void {
  }

}