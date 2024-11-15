import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { DivSplitResizableComponent } from './components/div-split-resizable/div-split-resizable.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { NgxtTreecontrolComponent } from './components/ngxt-treecontrol/ngxt-treecontrol.component';
//import { DivLeftComponentNew } from './components/div-left-new/div-left-new.component';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [  RouterOutlet, 
              TodosComponent,
              DivSplitResizableComponent,
              NgxtTreecontrolComponent
              ],

})
export class AppComponent {
  title = 'amplify-angular-template';
}
