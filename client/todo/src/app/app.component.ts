import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  componentTitle = "My todo list";

  filter: "all" | "active" | "done" = "all";
  
  allItems = [
    {description: "eat", done: true},
    {description: "sleep", done: false},
    {description: "play", done: false},
    {description: "laugh", done: false},
  ];

  get items() {
    if (this.filter === "all"){
      return this.allItems;
    }
    return this.allItems.filter((item) => {
      this.filter === "done" ? item.done : !item.done
    })
  }
}
