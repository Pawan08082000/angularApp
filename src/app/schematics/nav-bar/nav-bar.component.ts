import { shareReplay,map } from 'rxjs/operators';
import { Component, OnInit,ViewEncapsulation, OnDestroy, Input } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  // encapsulation: ViewEncapsulation.None,

})

export class NavBarComponent implements OnInit {
  // smallScreen: boolean;
  // toolbarItems:boolean;
  // panelColor = new FormControl('red');
  @Input() deviceXs;

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  // .pipe(
  //   map(result => result.matches),
  //   shareReplay()
  // );
  
  constructor(private breakpointObserver: BreakpointObserver) {
    // breakpointObserver.observe([
    //   '(max-width: 768px)'
    //     ]).subscribe(result => {
    //   if (result.matches) {
    //     this.smallScreen = true
    //     this.toolbarItems = false
    //   }
    //   else{
    //     this.smallScreen = false
    //     this.toolbarItems = true
    //   }
    // });
    
  }
  ngOnInit()
{}
  // Theams = [
  //   {name: 'Red', abbreviation: 'red'},
  //   {name: 'Green', abbreviation: 'green'},
  //   {name: 'Blue', abbreviation: 'blue'},]
}
