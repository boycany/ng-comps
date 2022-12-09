import { Component, Input } from '@angular/core';
import {
  UserData,
  TableHeader,
} from '../collections-home/collections-home.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() classNames = '';
  @Input() data: any[] = [];
  @Input() headers: any[] = [];

  constructor() {}
}
