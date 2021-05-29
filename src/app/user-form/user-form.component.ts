import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noop, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  userFormSubject = new ReplaySubject<User>();
  userForm$ = this.userFormSubject.asObservable();
  states: User[] = [];

  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({
      name: ['', [Validators.required,
        Validators.minLength(3), Validators.maxLength(10)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(64)]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      feedback: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  replayStates() {
    this.userForm$.subscribe(
      (data: User) => this.addStateChange(data),
      noop,
      () => {
        this.handleDifferenceInStates();
      }
      );
  }

  addStateChange(userData: User) {
    this.states.push(userData);
  }

  handleDifferenceInStates() {
    console.log('states', this.states);
  }

}
