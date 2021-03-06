import { Routes } from '@angular/router';

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
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { VideitosComponent } from './videitos/videitos.component';
import { SubirVideosComponent } from './subir-videos/subir-videos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ActivarExamenComponent } from './activar-examen/activar-examen.component';
import { SubirAndamiosComponent } from './subir-andamios/subir-andamios.component';
import { AdminclavesComponent } from './adminclaves/adminclaves.component';
import { ModificarMaestroComponent } from './modificar-maestro/modificar-maestro.component';


export const MaterialRoutes: Routes = [
  {
    path: '',
    children: [

{
path:'alumnos',
component:AlumnosComponent
},

{
  path:'alumno-profesor',
  component:ModificarMaestroComponent
}
,
{
 path:'adminclaves',
 component:AdminclavesComponent
},
{
path:'activar-examen',
component:ActivarExamenComponent
},

      {
        path: 'subir-videos',
        component: SubirVideosComponent
      },
      {
     path:'subir-andamios',
     component:SubirAndamiosComponent
      },
      {
  path:'profesores',
  component:ProfesoresComponent
      },
      {
        path: 'videos',
        component: VideitosComponent
      },
      {
        path: 'button',
        component: ButtonsComponent
      }, {
        path: 'cards',
        component: CardsComponent
      }, {
        path: 'grid',
        component: GridComponent
      }, {
        path: 'lists',
        component: ListsComponent
      }, {
        path: 'menu',
        component: MenuComponent
      }, {
        path: 'tabs',
        component: TabsComponent
      }, {
        path: 'stepper',
        component: StepperComponent
      }, {
        path: 'expansion',
        component: ExpansionComponent
      }, {
        path: 'chips',
        component: ChipsComponent
      }, {
        path: 'toolbar',
        component: ToolbarComponent
      }, {
        path: 'progress-snipper',
        component: ProgressSnipperComponent
      }, {
        path: 'progress',
        component: ProgressComponent
      }, {
        path: 'dialog',
        component: DialogComponent
      }, {
        path: 'tooltip',
        component: TooltipComponent
      }, {
        path: 'snackbar',
        component: SnackbarComponent
      }, {
        path: 'slider',
        component: SliderComponent
      }, {
        path: 'slide-toggle',
        component: SlideToggleComponent
      },


    ]
  }
];
