import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  title = 'app';

  ngOnInit(): void {
    console.log('app component init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on change');
  }

  ngOnDestroy(): void {
    console.log('app componnet destroy');
  }

  ngAfterViewInit(): void {

  }

}
