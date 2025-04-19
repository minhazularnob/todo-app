import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  todoText:string="";
  todos: {title:string, isCompleted: boolean}[] =[];
  filter: 'all' | 'active' | 'completed' = 'all';

  handleClick() {
    if (this.todoText.trim()) {
      this.todos.push({
        title: this.todoText,
        isCompleted: false
      });
      this.todoText = '';
    }
  }

  handleDelete(index: number) {
    this.todos.splice(index, 1);
  }

  toggleComplete(index: number) {
    this.todos[index].isCompleted = !this.todos[index].isCompleted;
  }

  get filteredTodos() {
    if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.isCompleted);
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.isCompleted);
    }
    return this.todos;
  }

  setFilter(value: 'all' | 'active' | 'completed') {
    this.filter = value;
  }
}
