import {
  Component,
  OnInit
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { environment } from "../../../environments/environment";
import { User } from "src/app/interfaces/user.interface";
import { LoansService } from "src/app/services/loans.service";
import { InputNumberValidator } from 'src/app/validators/input-number.validator';

@Component({
  selector: "app-loans",
  templateUrl: "./loans.component.html",
  styleUrls: ["./loans.component.css"]
})
export class LoansComponent implements OnInit {
  public profileForm: FormGroup;
  public amount = environment.amountBankBase;
  public isSubmitted = false;
  public loanStudyResult: boolean;
  public state: string;
  public modalClass: string;
  public modalDescription: string;

  public modalShowClass: boolean;
  public modalStyle: string;

  public formCopy: User;

  constructor(
    private fb: FormBuilder,
    private loanService: LoansService
  ) {
    console.log(this.amount);
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      id: ['', Validators.required],
      loan: ['', [Validators.required, InputNumberValidator]],
      paidState: [false]
    });
  }

  ngAfterViewInit() {}

  get form() {
    return this.profileForm.controls;
  }

  closeModal() {
    this.modalStyle = 'none';
  }

  loanStudy() {
    debugger;
    console.log(this.profileForm.controls.name.errors)
    this.isSubmitted = true;
    if (this.profileForm.invalid) {
      return;
    }

    this.modalShowClass = true;
    this.modalStyle = 'block';

    this.loanStudyResult = Math.random() > 0.5 ? true : false;
    this.amount = this.amount - this.profileForm.controls.loan.value;
    if (this.loanStudyResult) {
      this.state = 'Approved';
      this.formCopy = { ...this.profileForm.value, loanState: this.state };
      this.onSubmit();
      this.modalClass = 'text-success';
      this.modalDescription = 'Su crédito ha sido aprovado';
    } else {
      this.state = 'Rejected';
      this.formCopy = { ...this.profileForm.value, loanState: this.state };
      this.onSubmit();
      this.modalClass = 'text-danger';
      this.modalDescription = 'Su crédito ha sido rechazado rechazado';
    }
  }

  onSubmit() {
    debugger;
    console.log(this.profileForm.value);
    console.log(this.formCopy);
    this.loanService.newLoan(this.formCopy).subscribe(data => {
      console.log(data);
    });
  }
}
