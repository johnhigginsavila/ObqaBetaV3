import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @select(s => s.global.session) session;
  @select(s => s.global.page ) page;
  @Output() logout = new EventEmitter<void>();

  private currentRoute: string;

  constructor() { }

  ngOnInit() {

  }

  onLogout(): void {
    this.logout.emit()
  }



}
