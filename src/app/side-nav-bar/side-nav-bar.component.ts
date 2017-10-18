import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
/**
 * Material bootstrap side nav is part of pro product. Not available in free version.
 */
export class SideNavBarComponent implements OnInit, OnDestroy, OnChanges {

  @ViewChild('sidenav')
  private sidenav;

  constructor() { }

  ngOnInit() {
    // setInterval(() => { this.toggle(); }, 3000);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {

  }

}
