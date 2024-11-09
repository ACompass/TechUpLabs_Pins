import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, Inject, InjectionToken, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // A reference to the container in the modal where we'll dynamically load the component
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngOnInit(): void {
  }

  open(component: any) {
    // Clear any previously loaded component
    this.viewContainerRef.clear();

    // Create a component factory for the given component
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    // Create and insert the component into the modal container
    this.viewContainerRef.createComponent(componentFactory, undefined, this.injector);
  }

  closeModal() {
    this.viewContainerRef.clear();
  }
}
