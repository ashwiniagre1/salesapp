/**
 * Created by: MetaMagic
 * Date: 29/05/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'product',
  templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit{
  productModel:ProductModel;
 
  constructor(private http: HttpClient) {
    this.productModel=new ProductModel();
       }
  onBlur_productId(eventData:any){} 
  input_productId(eventData:any){} 
  focus_productId(eventData:any){} 
  onBlur_productname(eventData:any){} 
  input_productname(eventData:any){} 
  focus_productname(eventData:any){} 
  ngOnInit(){
  }
 

   
}
export class ProductModel{
  productId: string;  productname: string; }
