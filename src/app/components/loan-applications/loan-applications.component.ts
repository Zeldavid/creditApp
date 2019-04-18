import { Component, OnInit } from "@angular/core";
import { LoansService } from "src/app/services/loans.service";

@Component({
  selector: "app-loan-applications",
  templateUrl: "./loan-applications.component.html",
  styleUrls: ["./loan-applications.component.css"]
})
export class LoanApplicationsComponent implements OnInit {
  public users: any = [];
  constructor(private loanService: LoansService) {
    this.loanService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
        console.log(data);
      },
      error => console.log(error),
      () => {}
    );
  }

  ngOnInit() {}

  getClass(item: any) {
    if (item.stateLoan === 'Rejected') {
      return 'border-danger text-danger';
    } else {
      return 'border-success text-success';
    }
  }
}
