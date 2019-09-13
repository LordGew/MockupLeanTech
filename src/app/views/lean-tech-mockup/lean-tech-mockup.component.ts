import { Component, OnInit } from '@angular/core';
export interface deliveryDateUpdate{
  mainPlace: any;
  secondPlace: any,
  price: number,

}
const  deliveryDate: deliveryDateUpdate[]=[
  {mainPlace:'Houstun, TX, 33619', secondPlace:'Atlanta, GA, 30123', price: 250.00},
]

@Component({
  selector: 'app-lean-tech-mockup',
  templateUrl: './lean-tech-mockup.component.html',
  styleUrls: ['./lean-tech-mockup.component.css']
})
export class LeanTechMockupComponent implements OnInit {
  currentDate = new Date();
  deliveryShowDate= deliveryDate;
  
  ngOnInit() {
  }

}
