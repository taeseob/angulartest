import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  name = '진병주';

  newItem: Todo = {
    id: 1,
    item: '청소'
  };

  todoList = [
    {
      'id': 1,
      'item': '빨래',
      'done': false
    },
    {
      'id': 2,
      'item': '청소',
      'done': true
    },
    {
      'id': 3,
      'item': '요리',
      'done': true
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  complete(t) {
    alert(t.item + '변경!');
  }

  edit(target) {
    target.editing = true;
  }

  remove(t) {
    alert(t.item + '삭제요청!');
  }

  cancelEditing(target) {
    target.editing = false;
  }

  stopEditing(target, inputValue) {
    target.editing = false;

    if (inputValue.value.length === 0) {
      // 변경없음
    } else {
      console.log(inputValue.value);
      // update 요청
    }
  }

  addTodo() {
    alert(JSON.stringify(this.newItem));
    this.newItem = new Todo;
    // service 요청 - 추가
  }

  updateRequest(t) {
    this.todoList.concat(t);
    // console.log(JSON.stringify(t));
    console.log(JSON.stringify(this.todoList));
  }

  removeRequest(t) {
    console.log(JSON.stringify(t));
  }

}
