import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PEOPLE } from '../mock-people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people = PEOPLE;
  selectedPerson?: Person;


  person: Person = {
    id: 1,
    name: 'Jan'

  }

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(person:Person): void {
    this.selectedPerson = person;

  }

}
