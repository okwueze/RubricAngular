import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.mobileMenu = !this.mobileMenu // The exclamation make the function do the opposite of what it is
  }// meaning that as mobileMenu is set to false it will make it true and vice versa which will make the
  // the navbar slide in and out

}
