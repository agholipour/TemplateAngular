import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bootstrap-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input()
  loading: boolean=true;
  @Input()
  errorMessage: string;
  @Input()
  pageTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
