import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.css'],
})
export class PaymentDetailsFormComponent implements OnInit {
  constructor(public paymentService: PaymentDetailService) {}
  @Input() initSubmit = 'SUBMIT' // data from child
  @Input() isUpdate1=true
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (this.paymentService.formData.paymentDetailId == 0)
      this.insertRecrod(form);
    else this.updateRecord(form);
  }

  insertRecrod(form: NgForm) {
    this.paymentService.postPaymentDetail().subscribe(
      (res) => {
        console.log(res);
        this.paymentService.getPaymentDetil();
      },
      (error) => {
        console.log(error);
      }
    );
    alert('Done');
    form.reset();
  }
  updateRecord(form: NgForm) {
  
    this.paymentService.updatePaymentDetail().subscribe(
      (res) => {
        console.log(res);
        this.paymentService.getPaymentDetil();
      },
      (error) => {
        console.log(error);
      }
    );
    alert('updated');
  }
}
