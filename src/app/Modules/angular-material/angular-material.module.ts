import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';

const materialComponents = [MatButtonModule,MatCheckboxModule,MatChipsModule,MatDatepickerModule,MatDialogModule,MatDividerModule,
  MatExpansionModule,MatFormFieldModule,MatGridListModule,MatIconModule,MatInputModule,MatListModule,MatPaginatorModule,MatProgressBarModule
  ,MatProgressSpinnerModule,MatRadioModule,MatSidenavModule,MatTableModule,MatTabsModule,MatToolbarModule,MatTooltipModule,MatMenuModule
  
]
@NgModule({
    imports: [materialComponents],
    exports:[materialComponents]
})
export class AngularMaterialModule { }
