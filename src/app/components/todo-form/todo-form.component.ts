import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent implements OnInit {
  /**
   * Событие "Задача добавлена"
   */
  @Output() todoAdded = new EventEmitter();
  @ViewChild('todoForm') form: NgForm;

  /**
   * Текущая задача
   */
  public todo = {
    title: '',
    text: ''
  };

  constructor() { }

  ngOnInit() {
  }

  /**
   * Обработчик события "Submit"
   */
  onSubmit() {
    // Если форма не прошла валидацию
    if (this.form.invalid) {
      return;
    }

    // Инициация события "Задача добавлена"
    this.todoAdded.emit(Object.assign({}, this.todo));

    this.form.resetForm();
  }
}
