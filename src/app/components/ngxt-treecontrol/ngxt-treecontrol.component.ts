import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  AfterContentInit
} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TreeItem } from './tree-item';

@Component({
  selector: 'ngxt-treecontrol',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './ngxt-treecontrol.component.html',
  styleUrls: ['./ngxt-treecontrol.component.css']
})
export class NgxtTreecontrolComponent<T extends TreeItem> implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  public treeData: T[] = [];

  @ContentChild(TemplateRef)
  public nodeTemplate: TemplateRef<any> | null = null;

  public ngAfterContentInit(): void {
    if (!this.nodeTemplate) {
      throw new Error('This component needs ng-template for the tree node.');
    }
  }

  // Funzione per gestire il clic sul nodo
  onNodeClick(item: T): void {
    console.log('Nodo cliccato:', item);  // Puoi scrivere qualsiasi proprietà del nodo
  }

   

    

}
