import {Component, ChangeDetectionStrategy,
         ChangeDetectorRef} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})
export class CdkDragDropConnectedSortingExample {
  constructor(private cd: ChangeDetectorRef)
  {

  }
	formElements = ["INPUT", "SELECT_BOX"];
	formElementsCopy: string[];
	questionnaire = [];
	selectedFormControl: string;
	getFormControl: string;
 index:number=0;
	formControlOptions: {
     
		inputType: string;
		label: string;
		defaultValue: string | string[];
		options?: string[];
		placeholder?: string;
	}[] = [
		{
			inputType: "INPUT",
			label: "Input label",
			defaultValue: "",
			placeholder: "enter your text...",
		},
		{
			inputType: "SELECT_BOX",
			label: "Select label",
			defaultValue: "",
			options: ["select option 1", "select option 2", "select option 3"]
		}
	];
formitems:any[]=[];
displayCounter(val){
  
if(this.formitems.findIndex(x=>x.index==val.index)==-1)
{
  
  val.index =JSON.stringify(this.index) ;
  this.formitems.push(val)
  
}
else
{
  
  if(val.type=="SELECT_BOX")
  {
let obj =this.formitems.find(x=>x.index==val.index) ;
obj.selectedValue=val.selectedValue;
  }
  else if(val.type=='INPUT')
  {
let obj =this.formitems.find(x=>x.index==val.index);
obj.value=val.value;
  }
}
console.log(this.formitems)
}

  drop(event: CdkDragDrop<any>) {
    

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.index= this.index+1;
      console.log(event.container.data)
      this.formElements.push(event.item.element.nativeElement.innerHTML);
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        

    }
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */