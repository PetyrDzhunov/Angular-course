import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  newServerContent = '';
  onAddServer(nameInput:HTMLInputElement) {
    console.log(nameInput.value)
  this.serverCreated.emit({
    serverName: nameInput.value,
    serverContent:this.newServerContent
  })
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
   this.bluePrintCreated.emit({
    serverName: nameInput.value,
    serverContent:this.newServerContent
  })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
