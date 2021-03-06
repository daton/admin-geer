import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];    
  children?: ChildrenItems[];
}

const MENUITEMS = [
    {
        state: 'starter',
        name: 'Principal',
        type: 'link',
        icon: 'account_circle'
    }, 
    {
        state: 'material',
        name: 'Contenido',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [
            {type: 'red', value: '6'}
        ],
        children: [
          {state:'adminclaves',name:'Claves registradas'},
          {state:'alumno-profesor',name:'Modificar Alumno'},
          {state:'subir-videos',name:'Subir videos'},
          {state:'subir-andamios',name:'Subir andamios'},
            {state: 'videos', name: 'Mis Videos'},
            {state: 'profesores', name:'Mis profesores'},
            {state:'alumnos', name:'Listas de alumnos'},
          /*  {state:'activar-examen',name:'Activar examen'}
         
            
            {state: 'button', name: 'Buttons'},
            {state: 'cards', name: 'Cards'},
            {state: 'grid', name: 'Grid List'},
            {state: 'lists', name: 'Lists'},
            {state: 'menu', name: 'Menu'},
            {state: 'tabs', name: 'Tabs'},
            {state: 'stepper', name: 'Stepper'},
            {state: 'expansion', name: 'Expansion Panel'},
            {state: 'chips', name: 'Chips'},
            {state: 'toolbar', name: 'Toolbar'},
            {state: 'progress-snipper', name: 'Progress snipper'},
            {state: 'progress', name: 'Progress Bar'},
            {state: 'dialog', name: 'Dialog'},
            {state: 'tooltip', name: 'Tooltip'},
            {state: 'snackbar', name: 'Snackbar'},
            {state: 'slider', name: 'Slider'},
            {state: 'slide-toggle', name: 'Slide Toggle'}    
            
            */
        ]
    } 
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
