import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule"
  },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "crear-usuario",
    loadChildren: "./crear-usuario/crear-usuario.module#CrearUsuarioPageModule"
  },
  {
    path: "lista-hhour",
    loadChildren: "./lista-hhour/lista-hhour.module#ListaHhourPageModule"
  },
  {
    path: "lista-promos",
    loadChildren: "./lista-promos/lista-promos.module#ListaPromosPageModule"
  },
  {
    path: "lista-birreria",
    loadChildren:
      "./lista-birreria/lista-birreria.module#ListaBirreriaPageModule"
  },
  {
    path: "detalle-puntos",
    loadChildren:
      "./detalle-puntos/detalle-puntos.module#DetallePuntosPageModule"
  },
  {
    path: "interna-birreria",
    loadChildren:
      "./interna-birreria/interna-birreria.module#InternaBirreriaPageModule"
  },
  {
    path: "interna-cupon",
    loadChildren: "./interna-cupon/interna-cupon.module#InternaCuponPageModule"
  },
  {
    path: "interna-promocion",
    loadChildren:
      "./interna-promocion/interna-promocion.module#InternaPromocionPageModule"
  },
  {
    path: "interna-hhour",
    loadChildren: "./interna-hhour/interna-hhour.module#InternaHhourPageModule"
  },
  {
    path: "recuperar-contrasena",
    loadChildren:
      "./recuperar-contrasena/recuperar-contrasena.module#RecuperarContrasenaPageModule"
  },
  { path: "bases", loadChildren: "./bases/bases.module#BasesPageModule" },
  {
    path: "mispromos",
    loadChildren: "./mispromos/mispromos.module#MispromosPageModule"
  },
  {
    path: "soporte",
    loadChildren: "./soporte/soporte.module#SoportePageModule"
  },
  {
    path: "tutorial",
    loadChildren: "./tutorial/tutorial.module#TutorialPageModule"
  },
  {
    path: "canjear-puntos",
    loadChildren:
      "./canjear-puntos/canjear-puntos.module#CanjearPuntosPageModule"
  },
  {
    path: "ingreso",
    loadChildren: "./ingreso/ingreso.module#IngresoPageModule"
  },
  {
    path: "interna-hhour",
    loadChildren: "./interna-hhour/interna-hhour.module#InternaHhourPageModule"
  },
  {
    path: "detalle-puntos",
    loadChildren:
      "./detalle-puntos/detalle-puntos.module#DetallePuntosPageModule"
  },
  {
    path: "lista-promos",
    loadChildren: "./lista-promos/lista-promos.module#ListaPromosPageModule"
  },
  {
    path: "mispromos",
    loadChildren: "./mispromos/mispromos.module#MispromosPageModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
