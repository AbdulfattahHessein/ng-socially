import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
 
  @Input({ required: true })
  story!: Story;
  constructor() {}

  ngOnInit() {}
}
