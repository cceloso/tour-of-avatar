import { Component, OnInit } from '@angular/core';
import { Bending } from '../bending';
import { BendingService } from '../bending.service';

@Component({
  selector: 'app-bendings',
  templateUrl: './bendings.component.html',
  styleUrls: ['./bendings.component.css']
})
export class BendingsComponent implements OnInit {
  bendings: Bending[] = [];

  constructor(private bendingService: BendingService) { }

  ngOnInit(): void {
    this.getBendings();
  }

  getBendings(): void {
    this.bendingService.getBendings()
      .subscribe(bendings => {
        this.bendings = bendings;
        this.bendings.splice(3, 1);
      });
  }
}
