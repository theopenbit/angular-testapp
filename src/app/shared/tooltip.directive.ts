import { Directive, Input, HostListener, TemplateRef, ViewContainerRef, ElementRef } from "@angular/core";

@Directive({
  selector: "[tooltip]"
})
export class TooltipDirective {

  tp: HTMLDivElement;
  tooltipElement: HTMLDivElement;

  elementRef: ElementRef;
  constructor(private viewContainerRef: ViewContainerRef) {    
    let arrow: HTMLDivElement;
    this.tp = document.createElement("div");
    this.tp.className = "tooltip bs-tooltip-top";    
    arrow = document.createElement("div");
    arrow.className = "arrow";
    this.tp.appendChild(arrow);
    this.tooltipElement = document.createElement("div");    
    this.tp.appendChild(this.tooltipElement);
    this.tooltipElement.className = "tooltip-inner";
  } 

   @Input()
   set tooltip(newVal) {
  
     this.tooltipElement.innerText = newVal; 
    }


  @HostListener("mouseenter") onMouseEnter() {
    console.log("enter  " + this.tooltipElement.innerText);
    this.elementRef = this.viewContainerRef.element;
    this.elementRef.nativeElement.appendChild(this.tp);



  }
@HostListener("mouseleave") onMouseLeave() {
    console.log("leave  " + this.tooltipElement.innerText);
    this.elementRef.nativeElement.removeChild(this.tp);
}
}
