import { Component, OnInit, Input, EventEmitter, Output,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-reusable-form-component',
  templateUrl: './reusable-form-component.component.html',
  styleUrls: ['./reusable-form-component.component.css']
})
export class ReusableFormComponentComponent implements OnInit,AfterViewInit {
	@Input() getFormControl: any;
	@Input() formControlOptions: any[];
	setFormControlValue: any;
	setFormControlOptions: any;
	setFormControlPLaceholder: string;
	constructor() {}
@Output() valueChange = new EventEmitter();
@Input() index:any;
val:any;
ngAfterViewInit(){
    debugger
    if (this.getFormControl == "INPUT")
      this.valueChange.emit({
        index: this.index,
        type: "INPUT",
        value: this.val
      });
    else if (this.getFormControl == "SELECT_BOX") {
      this.valueChange.emit({
        index: this.index,
        type: "SELECT_BOX",
        selectedValue: this.val,
        avaliableOptions: [
          "select option 1",
          "select option 2",
          "select option 3"
        ]
      });
    }
  }
	ngOnInit() {
		for (let v of this.formControlOptions) {
			if (v.inputType == this.getFormControl) {
				this.setFormControlValue = v.defaultValue;
				this.setFormControlOptions = v.options;
				this.setFormControlPLaceholder = v.placeholder;
			}
		}
	}
  valueChanged(item) { // You can give any function name
  //console.log(this.val)
  if(item.getFormControl=='INPUT')
        this.valueChange.emit({	index:this.index,type: "INPUT",value: this.val});
     else if(item.getFormControl== "SELECT_BOX")
    {
       this.valueChange.emit( {
         index:this.index,
    type: "SELECT_BOX",
    selectedValue: this.val,
    avaliableOptions: ["select option 1", "select option 2", "select option 3"]
});
     
    }
    }
   
}
