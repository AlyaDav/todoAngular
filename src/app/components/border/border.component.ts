import { Component, OnInit } from '@angular/core';
import { Border } from '../../models/border';
import { TodoService } from '../../shared/todo.service';


@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.css']
})
export class BorderComponent implements OnInit {
  borders: Border[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getBorders();
    console.log(this.borders);
  }

  getBorders(): void {
    this.todoService.getBorders()
      .subscribe(borders => this.borders = borders);
    console.log(this.borders);

  }


  onCreateBorder(title: string) {
    console.log("Create");
    this.todoService.createBorder({ title, _id: 7, items: [] } as Border)
      .subscribe(border => this.borders.push(border));
  }

  onDeleteBorder(border: Border) {
    console.log("delete");
    this.todoService.deleteBorder(border)
      .subscribe(border => {
        let index = this.borders.indexOf(border);
        this.borders.forEach((item, i) => {
          if (item._id === border._id) { index = i; }
        });
        this.borders.splice(index, 1)
      });
  }

  changeBorder(border: Border): void {
    border.title = prompt("Измениеть имя  border ", border.title)
    this.todoService.updateBorder(border).subscribe()
  }


  onCreateTodo(title: string, border: Border): void {
    if (!title) { return; }
    border.items.push(title);
    // let index = this.borders.indexOf(border);
    console.log(border);
    this.todoService.updateBorder(border)
      .subscribe();

  }
  deleteT(todo: string, border: Border): void {
    let index = border.items.indexOf(todo);
    border.items.splice(index, 1);
    this.todoService.updateBorder(border).subscribe()
  }

  changeT(todo: string, border: Border): void {
    let index = border.items.indexOf(todo);
    border.items[index] = prompt("Измениеть ", border.items[index])
    this.todoService.updateBorder(border).subscribe()
  }



}
