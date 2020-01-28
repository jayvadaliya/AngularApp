import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferdetailsComponent } from './offerdetails/offerdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewoffersComponent } from './newoffers/newoffers.component';


const routes: Routes = [
  { path : '', redirectTo: '', pathMatch: 'full'},
  { path : 'offerdetails', component : OfferdetailsComponent},
  { path : 'newoffers', component : NewoffersComponent},
  { path : '**', component : PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ OfferdetailsComponent, PagenotfoundComponent, NewoffersComponent];
