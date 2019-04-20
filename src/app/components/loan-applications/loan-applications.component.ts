import { Component, OnInit } from "@angular/core";
import { LoansService } from "src/app/services/loans.service";
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: "app-loan-applications",
  templateUrl: "./loan-applications.component.html",
  styleUrls: ["./loan-applications.component.css"]
})
export class LoanApplicationsComponent implements OnInit {
  public users: User[];
  public loanStateDescription: string;
  public paidStateClass: string;

  constructor(private loanService: LoansService) {
    this.loanService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      error => console.log(error),
      () => {}
    );
  }

  ngOnInit() {}

  getClass(item: any) {
    if (item.loanState === 'Rejected') {
      return 'border-danger text-danger';
    } else {
      return 'border-success text-success';
    }
  }

  paidState(item) {
    if (item.paidState) {
      this.paidStateClass = 'text-danger';
      return 'The loan status is paid';
    } else {
      return 'The loan status is not paid';
    }
  }
}
