import { Component, EventEmitter, Output, VERSION } from '@angular/core';
import { MyTreeItemNew } from '../../interfaces/my-tree-item-new';
import treePath from './treePathNew.json';
import { NgxtTreecontrolComponent } from '../ngxt-treecontrol/ngxt-treecontrol.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'div-left-new',
  standalone: true,
  imports: [CommonModule,NgxtTreecontrolComponent],
  templateUrl: './div-left-new.component.html',
  styleUrls: ['./div-left-new.component.css']
})

export class DivLeftComponentNew {
  public treeData: MyTreeItemNew[] = treePath;
  @Output() newItemEvent = new EventEmitter<MyTreeItemNew>();
 
  
  public selectTreeItem(item: MyTreeItemNew): void {
    this.newItemEvent.emit(item);
  }
  public toggleTreeItem(item: MyTreeItemNew): void {
    item.expanded = !item.expanded;
  }
}





