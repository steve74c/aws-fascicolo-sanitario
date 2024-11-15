import { Component, VERSION } from '@angular/core';
import { MyTreeItem } from '../../interfaces/my-tree-item';
import treePath from './treePath.json';
import { NgxtTreecontrolComponent } from '../ngxt-treecontrol/ngxt-treecontrol.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'div-left',
  standalone: true,
  imports: [CommonModule,NgxtTreecontrolComponent],
  templateUrl: './div-left.component.html',
  styleUrls: ['./div-left.component.css']
})

export class DivLeftComponent {
  public treeData: MyTreeItem[] = treePath;
  
  
  public toggleTreeItem(item: MyTreeItem): void {
    item.expanded = !item.expanded;
  }
}