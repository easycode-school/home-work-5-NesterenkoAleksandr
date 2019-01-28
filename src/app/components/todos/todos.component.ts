import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  /**
   * Список задач
   */
  public todos = [];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Обработчик события "Задача добавлена"
   * @param todo - задача
   */
  onAddTodo(todo) {
    this.todos.push(todo);
  }

}
