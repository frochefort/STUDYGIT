import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {


  @Input() title: String;
  @Input() content: String;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }


  updateloveIts(i: number) {
    /* this.loveIts = this.loveIts + 1;*/
    if (this.loveIts == undefined) {
      this.loveIts = 0;
    }
    this.loveIts = this.loveIts + i;
    console.log(' test' + this.title + this.loveIts);
    return this.loveIts  ;
  }

}
