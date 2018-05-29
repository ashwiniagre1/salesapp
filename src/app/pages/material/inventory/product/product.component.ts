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
  ngOnInit(){
  }
 

   
}
export class ProductModel{
 }
