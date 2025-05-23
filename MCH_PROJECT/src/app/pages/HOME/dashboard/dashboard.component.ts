import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewChild } from '@angular/core';
import { DxButtonModule, DxDataGridComponent, DxDataGridModule, DxDropDownButtonModule, DxLookupModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
// import { DataService } from 'src/app/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild(DxDataGridComponent, { static: true })
  dataGrid: DxDataGridComponent;

  readonly allowedPageSizes: any = [5, 10, 'all'];
  displayMode: any = 'full';
  showPageSizeSelector = true;


 
  constructor() {}

  refresh = () => {
    this.dataGrid.instance.refresh();
  };
}

@NgModule({
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule,
    DxDropDownButtonModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxLookupModule,
  ],
  providers: [],
  exports: [],
  declarations: [DashboardComponent],
})
export class DashboardModule {}