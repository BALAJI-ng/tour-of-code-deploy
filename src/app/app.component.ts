import { error } from '@angular/compiler/src/util';
import { Component,OnInit} from '@angular/core';
import { observable,Observable, Subscriber,interval } from 'rxjs';
import {take,map} from 'rxjs/operators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BodybuildAngularJobFamily';

  ngOnInit(){

  const r$ = interval(1000).pipe(take(10));
  r$.subscribe(y=>{console.log(`Suabscribe atarted ${y}`)});


    // const sub$ = new Observable(Subscriber=>{
    //   Subscriber.next('Balaji');
    //   Subscriber.next('Advika')
    // })

    // sub$.subscribe(x=>{console.log('Calling 1',x)});
    // sub$.subscribe(y=>{console.log('Calling 2',y)})

  }
  
}
