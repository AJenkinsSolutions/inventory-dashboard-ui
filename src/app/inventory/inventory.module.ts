import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AddInventoryItemComponent } from './add-inventory-item/add-inventory-item.component';
import { InventoryService } from './Services/inventory.service';
import { InventoryRoutingModule } from './inventory-routing.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InventoryDetailsComponent,
    InventoryListComponent,
    AddInventoryItemComponent,
    InventoryRoutingModule
  ], 
  exports: [
    InventoryDetailsComponent,
    InventoryListComponent,
    AddInventoryItemComponent
  ]
})
export class InventoryModule { }
