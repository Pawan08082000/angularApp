import { Component,OnDestroy,OnInit } from '@angular/core';
import {MediaObserver, MediaChange} from '@angular/flex-layout'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mediaSub : Subscription;
  deviceXs: Boolean;

  title = 'angularApp';
  constructor( public mediaObserver:MediaObserver) { }
  ngOnInit() {
    console.log('hello')

    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log('hello')
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs' ?true:false;
    })
  }
  ngOnDestroy(){
 this.mediaSub.unsubscribe();
  }
 

}
