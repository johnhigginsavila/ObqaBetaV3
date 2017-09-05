import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';
import { SET_ACTIVE_PAGE } from '../../global-store/actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ngRedux.dispatch({type:SET_ACTIVE_PAGE, page:this.route.snapshot.url.toString()});
  }

}
