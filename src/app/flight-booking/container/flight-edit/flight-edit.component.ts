import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime, map, distinctUntilChanged, tap, switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private flightService: FlightService) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id: [0],
      from: [
        'Graz',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      to: [
        'Hamburg',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      date: [ (new Date()).toISOString() ]
    });

    this.route.paramMap
      .pipe(
        map(params => +params.get('id')),
        distinctUntilChanged(),
        tap(id => this.id = id),
        switchMap(id => this.flightService.findById(id))
      )
      .subscribe(
        flight => this.editForm.patchValue(flight)
      );

    this.editForm.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(
        flight => console.log('flight changed', flight)
      );
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }
}
