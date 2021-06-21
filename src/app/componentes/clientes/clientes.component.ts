import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { take, } from 'rxjs/operators';
import { Cliente } from '../../shared/interfaces/clientes.interface';
import { ClienteService } from '../../shared/services/clientes.service';

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ClienteService]
})
export class ClientesComponent implements OnInit {
  private clientes: Cliente[] = [];


  public clienteId: Cliente= new Cliente();

  info: RequestInfo = {
    next: '',
  };


  private pageNum = 1;
  private query = '';
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(private clienteSvc: ClienteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCliente();
    this.getDataFromService();
    /* this.getClientesByQuery();*/
  }

  public getCliente() {
    return this.clienteSvc.getCliente().subscribe((response: Cliente[]) => {
      this.clientes = response;
      console.log(this.clientes);
      this.getClienteId('');
    });
  }

  public getClienteId(id) {
    this.clienteId = this.clientes.find(t => t.id === id);
    // console.log(this.categoriaId);
    console.log(this.clienteId);
  }






  private getDataFromService(): void {
    this.clienteSvc.searchCliente(this.query, this.pageNum)
      .pipe(
        take(1)
      ).subscribe((res: any) => {
        console.log('response', res);
        if (res?.results?.length) {
          const { info, results } = res;
          this.clientes = [...this.clientes, ...results];
          this.info = info
        } else {
          this.clientes = [];
        }

        const { info, results } = res;
        this.clientes = [...this.clientes, ...results];
        this.info = info;
      })
  }

}
