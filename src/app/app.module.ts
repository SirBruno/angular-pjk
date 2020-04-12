import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './task.reducer';
import * as fromScoreboard from './scoreboard.reducer';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { MyScoreboardComponent } from './my-scoreboard/my-scoreboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    MyTaskComponent,
    MyScoreboardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({task: taskReducer, game: fromScoreboard.reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }