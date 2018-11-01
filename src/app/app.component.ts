import { Component} from '@angular/core';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private todoService: TodoService) { }
  title: string = 'ЗАДАЧИ';
}


