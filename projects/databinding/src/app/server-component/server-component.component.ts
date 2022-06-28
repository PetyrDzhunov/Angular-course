import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {  ServerElement } from '../shared/serverElement.model';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit,OnDestroy {
  @Input('srvElement') element!: ServerElement
  constructor() {
    console.log('constructor called')
   }

   ngOnChanges(changes:SimpleChanges) {
    console.log(changes)
    console.log('onChanges called')
   }

  ngOnInit(): void {
    console.log('ngOnInit called')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
    
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
    
  }

  ngAfterViewInit(): void {
  console.log('ngAfterViewInit called');
      
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
  }

}
 