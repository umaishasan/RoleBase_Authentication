import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  //write things.
  public folder: string;

  //import things.
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //write things.
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
