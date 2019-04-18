import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { environment } from '../../../environments/environment';

@Component({
  selector: "app-loans",
  templateUrl: "./loans.component.html",
  styleUrls: ["./loans.component.css"]
})
export class LoansComponent implements OnInit {
  public amount = environment.amountBankBase;

  profileForm = this.fb.group({
    firstName: ["", Validators.required],
    email: ["", Validators.required],
    id: ["", Validators.required],
    amount: ["", Validators.required]
  });

  constructor(private fb: FormBuilder) {
    console.log(this.amount);
  }

  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
