import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { DetallePeliculaComponent } from "./components/detalle-pelicula/detalle-pelicula.component";



const appRoute : Routes = [
    {path: '', component: PeliculasComponent},
    {path: 'detalle/:id', component: DetallePeliculaComponent},

]

export const appRoutingPorviders : any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);