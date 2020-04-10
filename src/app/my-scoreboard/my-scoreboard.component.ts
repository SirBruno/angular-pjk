import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { homeScore, awayScore, resetScore, setScores } from '../scoreboard-page.actions';

@Component({
  selector: 'app-my-scoreboard',
  templateUrl: './my-scoreboard.component.html',
  styleUrls: ['./my-scoreboard.component.css']
})
export class MyScoreboardComponent implements OnInit {

  game$: Observable<any>;

  constructor(private store: Store<{ game }>) {
    this.game$ = store.pipe(select('game'));
    this.game$.subscribe((x) => console.log(x));
  }

  homeScore() {
    this.store.dispatch(homeScore());
    this.game$.subscribe((x) => console.log(`inside homescore ${x}`));
  }

  ngOnInit(): void {
    // this increases the game's home score by 1 and logs it to the console
    this.homeScore();
  }

}