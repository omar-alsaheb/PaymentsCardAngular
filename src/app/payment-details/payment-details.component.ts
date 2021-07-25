import { Component, Input, OnInit } from '@angular/core';
import { PaymentDetail } from '../model/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css'],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(public service: PaymentDetailService) {}
  submit: string = 'Submit';
  isUpdate=false;

  ngOnInit(): void {
    this.service.getPaymentDetil();
  }

  editForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
    console.log(this.service.formData);
    this.submit = 'UPDATE';
    this.isUpdate=true;
    console.log(this.isUpdate)
  }

  deleteRecord(id: number) {
    if (confirm('Arue sure?')) {
      this.service.deletePaymentReqcord(id).subscribe(
        (res) => {
          console.log('ss');
          this.service.getPaymentDetil();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
