import { Injectable } from '@angular/core';
import { PaymentDetail } from '../model/payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  constructor(private http: HttpClient) {}
  formData: PaymentDetail = new PaymentDetail();
  paymentData: PaymentDetail[];

  readonly URL = 'https://localhost:44346/api/';
  postPaymentDetail() {
    return this.http.post(this.URL + 'PaymentDetail', this.formData);
  }

  deletePaymentReqcord(id:number){
    return this.http.delete(this.URL + `PaymentDetail/${id}`);
  }
  updatePaymentDetail() {
    return this.http.put(this.URL + `PaymentDetail/${this.formData.paymentDetailId}`, this.formData);
  }

  getPaymentDetil() {
    return this.http.get(this.URL + 'PaymentDetail').subscribe(
      (response: any) => {
        this.paymentData = response;
        console.log(this.paymentData);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
