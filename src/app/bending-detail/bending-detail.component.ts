import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Bending } from '../bending';
import { BendingService } from '../bending.service';

@Component({
  selector: 'app-bending-detail',
  templateUrl: './bending-detail.component.html',
  styleUrls: ['./bending-detail.component.css']
})
export class BendingDetailComponent implements OnInit {
  @Input() bending?: Bending;

  constructor(
    private route: ActivatedRoute,
    private bendingService: BendingService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBending();
  }

  getBending(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.bendingService.getBending(name)
      .subscribe(bending => this.bending = bending);
  }

  goBack(): void {
    this.location.back();
  }

}
