import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarterComponent } from './starter.component';
import { StarterRoutes } from './starter.routing';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
      FlexLayoutModule,
      FileUploadModule,
      FormsModule,
    RouterModule.forChild(StarterRoutes)
    
  ],
  declarations: [ StarterComponent]
})

export class StarterModule {}
