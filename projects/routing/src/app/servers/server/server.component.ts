import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServersService } from '../servers.service';
import { ServerModel } from './server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit ,OnDestroy{
  server: ServerModel
  paramsSubscription : Subscription;

  constructor(private serversService: ServersService,private route : ActivatedRoute,
    private router : Router ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']
    this.server= this.serversService.getServer(id) as ServerModel
      this.paramsSubscription = this.route.params.subscribe(
        (params:Params ) => {
          this.server = this.serversService.getServer(+params['id'])
        }
      )
  }

  onEdit() {
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'})
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
  }

}
