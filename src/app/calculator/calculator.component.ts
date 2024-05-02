import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  preserveWhitespaces:true
})
export class CalculatorComponent {
 
  toshow = " ";
  currValue= " ";

 writeinput(value:string){
  this.currValue += value;
 this.toshow = this.currValue;
 }

 equal(){
  this.toshow = eval(this.currValue);
  this.currValue = this.toshow;
 }
 clear(){
 this.currValue = '';
 this.toshow = this.currValue;
 }
 back(){
  this.toshow = this.currValue.slice(0, -1);
  this.currValue = this.toshow;
 }
}