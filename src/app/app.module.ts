import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarNoleggiatoreComponent } from './navbar-noleggiatore/navbar-noleggiatore.component';
import { VetturaComponent } from './vettura/vettura.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavbarClienteComponent } from './navbar-cliente/navbar-cliente.component';
import { NoleggioClienteComponent } from './noleggio-cliente/noleggio-cliente.component';
import { ServiziOffertiComponent } from './servizi-offerti/servizi-offerti.component';
import { ParcoVetturaComponent } from './parco-vettura/parco-vettura.component';
import { ContrattoClienteComponent } from './contratto-cliente/contratto-cliente.component';
import { WorkingProgessComponent } from './working-progess/working-progess.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiziComponent } from './servizi/servizi.component';
import { ContrattoComponent } from './contratto/contratto.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarNoleggiatoreComponent,
    VetturaComponent,
    HomeComponent,
    LogInComponent,
    NavbarClienteComponent,
    NoleggioClienteComponent,
    ServiziOffertiComponent,
    ParcoVetturaComponent,
    ContrattoClienteComponent,
    WorkingProgessComponent,
    ServiziComponent,
    ContrattoComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
