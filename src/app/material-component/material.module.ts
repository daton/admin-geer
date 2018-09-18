import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule} from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { GridComponent } from './grid/grid.component'; 
import { ListsComponent } from './lists/lists.component'; 
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component'; 
import { StepperComponent } from './stepper/stepper.component'; 
import { ExpansionComponent } from './expansion/expansion.component'; 
import { ChipsComponent } from './chips/chips.component'; 
import { ToolbarComponent } from './toolbar/toolbar.component'; 
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component'; 
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent, DialogOverviewExampleDialog } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component'; 
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { FileUploadModule } from 'ng2-file-upload';
import { VideitosComponent } from './videitos/videitos.component';
import { SubirVideosComponent } from './subir-videos/subir-videos.component';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { ProfesoresComponent } from './profesores/profesores.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSortModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    FileUploadModule,
    VgCoreModule,VgControlsModule,VgOverlayPlayModule,VgBufferingModule,
    MatTableModule,
    NgxDatatableModule,MatPaginatorModule
  ],
  providers: [
    
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],    
  declarations: [
    ButtonsComponent,
    CardsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialog,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    VideitosComponent,
    SubirVideosComponent,
    ProfesoresComponent  
  ]
})

export class MaterialComponentsModule {}
