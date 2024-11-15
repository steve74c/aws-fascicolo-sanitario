import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { AngularSplitModule, SplitAreaComponent, SplitComponent } from 'angular-split';
//import { NgxtTreecontrolComponent } from '../ngxt-treecontrol/ngxt-treecontrol.component';
import { DivLeftComponentNew } from '../div-left-new/div-left-new.component';
import { MyTreeItemNew } from '../../interfaces/my-tree-item-new';
import { DivLeftComponent } from '../div-left/div-left.component';


@Component({
  selector: 'app-div-split-resizable',
  standalone: true,
  imports: [AngularSplitModule,SplitComponent, SplitAreaComponent,DivLeftComponentNew,DivLeftComponent],
  templateUrl: './div-split-resizable.component.html',
  styleUrl: './div-split-resizable.component.css'
})
export class DivSplitResizableComponent {
  title = 'flex-resize-demo';
  item!: MyTreeItemNew;

  itemStr :string ="" ;

  setItem(newItem: MyTreeItemNew) {
    this.item = newItem;
    this.itemStr= JSON.stringify(newItem);
  }
}






