import { Component, OnInit } from '@angular/core';
import SocioTorcedor from '../socio-torcedor';
import { SocioTorcedorService } from '../socio-torcedor.service';

@Component({
  selector: 'app-socioListTorcedor',
  templateUrl: './socioTorcedor-list.component.html',
  styleUrls: ['./socioTorcedor-list.component.css']
})
export class SocioTorcedorListComponent implements OnInit {

  constructor(
    private socioTorcedorService: SocioTorcedorService
  ) { }

  socios: SocioTorcedor[] = [];

  ngOnInit(): void {
    this.findAllSocios();
  }

  findAllSocios() {
    this.socioTorcedorService
      .findAll()
      .subscribe((response) => {
        this.socios = response
        console.log(response)
      })
  }

  deleteById(id: number) {
    this.socioTorcedorService
      .deleteById(id)
      .subscribe((response) => this.findAllSocios());
  }

}
