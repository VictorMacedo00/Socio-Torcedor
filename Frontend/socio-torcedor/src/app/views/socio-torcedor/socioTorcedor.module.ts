import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SocioTorcedorFormComponent } from "./form/socioTorcedor-form.component";
import { SocioTorcedorListComponent } from "./list/socioTorcedor-list.component";
import { SocioTorcedorService } from "./socio-torcedor.service";
import { SocioTorcedorRoutingModule } from "./socioTorcedor-routing.module";

@NgModule({
    declarations: [SocioTorcedorListComponent, SocioTorcedorFormComponent],
    imports: [CommonModule, SocioTorcedorRoutingModule, FormsModule, ReactiveFormsModule],
    providers: [SocioTorcedorService],
  })
export class SocioTorcedorModule { }