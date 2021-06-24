import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import SocioTorcedor from '../socio-torcedor';
import { SocioTorcedorService } from '../socio-torcedor.service';

@Component({
  selector: 'app-socioFormTorcedor',
  templateUrl: './socioTorcedor-form.component.html',
  styleUrls: ['./socioTorcedor-form.component.css']
})
export class SocioTorcedorFormComponent implements OnInit {

  constructor(
    private socioTorcedorService: SocioTorcedorService,
    private router: Router,
    private builder: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) { }

    socioForm!: FormGroup;
    action!: String;

  ngOnInit(): void {
    this.createForm();

    this.action = this.activatedRoute.snapshot.url[0].path
    if(this.action == 'alterar') {
      this.setValue();
    }
  }

  createForm(): void {
    this.socioForm = this.builder.group({
      id: null,
      nome: [null, [Validators.required, Validators.maxLength(120)]],
      email: [null, [Validators.required, Validators.maxLength(120)]],
      senha: [null, [Validators.required, Validators.maxLength(120)]],
      cpf: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      rgrne: [null, [Validators.required, Validators.minLength(15)]],
      dataNascimento: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      nacionalidade: [null, [Validators.required, Validators.maxLength(120)]],
      estadoEmissor: [null, [Validators.required, Validators.maxLength(120)]]
    })
  }

  onCancel() {
    this.router.navigate(['socio-torcedor'])
  }

  onSave(value: SocioTorcedor): void {
    this.socioTorcedorService
      .save(value)
      .subscribe((response) => this.router.navigate(['socio-torcedor']))
  }

  setValue() {
    const id = this.activatedRoute.snapshot.url[1].path
    this.socioTorcedorService
      .findById(Number(id))
      .subscribe((response) => this.socioForm.patchValue(response));
  }

}
