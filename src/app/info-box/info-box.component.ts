import { Component, OnInit, Input, ViewChild } from "@angular/core";

@Component({
  selector: "info-box",
  templateUrl: "./info-box.component.html",
  styleUrls: ["./info-box.component.css"]
})
export class InfoBoxComponent implements OnInit {

  field_value: string;

  constructor() {
   }

  ngOnInit() {
  }


}
