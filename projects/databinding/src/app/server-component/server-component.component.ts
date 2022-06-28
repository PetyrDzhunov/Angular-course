import { Component, Input, OnInit } from '@angular/core';
import {  ServerElement } from '../shared/serverElement.model';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {
  @Input() element!: ServerElement
  constructor() { }

  ngOnInit(): void {
  }

}
