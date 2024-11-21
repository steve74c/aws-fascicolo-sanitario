import { Component, Input } from '@angular/core';
import { MyTreeItemNew } from '../../interfaces/my-tree-item-new';
import { PdfService } from '../../services/pdf/pdf.service';
//import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';

@Component({
  
  selector: 'div-right-new',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './div-right.component.html',
  styleUrls: ['./div-right.component.css']
})


export class DivRightNewComponent {
  @Input()
  item!: MyTreeItemNew;
  pdfData:Promise<ArrayBuffer> | undefined;
  
  
  constructor(private pdfService: PdfService) {}

  async ngOnInit() {
    this.pdfData = await this.pdfService.getPDF(this.item);
    console.log(this.pdfData);
  }

  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  
  
}

  
  
