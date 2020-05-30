import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Nice tree',
      imageUrl: 'assets/tree.jpeg',
      username: '@nature',
      content: 'I saw this nice tree today',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: '@mountainLover',
      content: 'Here is apicture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: '@biking1234',
      content: 'I did some biking today',
    },
  ];
}
