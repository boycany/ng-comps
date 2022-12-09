import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data = [
    {
      name: 'James',
      age: 24,
      job: 'Designer',
      employed: true,
    },
    {
      name: 'Jill',
      age: 26,
      job: 'Engineer',
      employed: true,
    },
    {
      name: 'Elvis',
      age: 25,
      job: 'Engineer',
      employed: false,
    },
  ];

  headers = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Age',
    },
    {
      key: 'job',
      label: 'Job',
    },
    {
      key: 'employed',
      label: 'Has a job now?',
    },
  ];

  tabsLinks = [
    { url: 'companies', text: 'Companies' },
    { url: 'partners', text: 'Partners' },
  ];
}

export interface UserData {
  name: string;
  age: number;
  job?: string;
  employed: boolean;
}

export interface TableHeader {
  key: string;
  label: string;
}
