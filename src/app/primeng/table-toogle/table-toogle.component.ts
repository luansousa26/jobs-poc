import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-toogle',
  templateUrl: './table-toogle.component.html',
  styleUrls: ['./table-toogle.component.css']
})
export class TableToogleComponent implements OnInit {

  cars: Car[];

  cols: any[];

  displayDialog: boolean;
      car: Car = new Car();
      selectedCar: Car;
      newCar: boolean;
  constructor() { }

  ngOnInit() {
    this.cars = [{
      vin: 'Marcus',
      year : '1998',
      color : 'Black Guy',
      brand : 'Test'
    },
    {
      vin: 'Jeremeias',
      year : '2009',
      color : 'blue',
      brand : 'Brand'
    },
    {
      vin: 'Luan',
      year : '1990',
      color : 'blue',
      brand : 'Brand'
    },
    {
      vin: 'teste',
      year : 'teste',
      color : 'teste',
      brand : 'teste'
    }];
    this.cols = [
      { field: 'vin', header: 'INÍCIO PERÍODO' },
      { field: 'year', header: 'FIM PERÍODO' },
      { field: 'brand', header: 'TIPO PRESTADOR' },
      { field: 'color', header: 'TIPO DE GUIA' },
      { field: 'vin', header: 'INÍCIO PERÍODO' },
      { field: 'year', header: 'FIM PERÍODO' },
      { field: 'brand', header: 'TIPO PRESTADOR' },
      { field: 'color', header: 'TIPO DE GUIA' },
      { field: 'vin', header: 'INÍCIO PERÍODO' },
      { field: 'year', header: 'FIM PERÍODO' },
      { field: 'brand', header: 'TIPO PRESTADOR' },
      { field: 'color', header: 'TIPO DE GUIA' },
      { field: 'vin', header: 'INÍCIO PERÍODO' },
      { field: 'year', header: 'FIM PERÍODO' },
      { field: 'brand', header: 'TIPO PRESTADOR' },
      { field: 'color', header: 'TIPO DE GUIA' }
    ];
  }
  showDialogToAdd() {
    this.newCar = true;
    this.car = {};
    this.displayDialog = true;
}

save() {
     let cars = [...this.cars];
    if (this.newCar) {
        cars.push(this.car);
    } else {
      cars[this.cars.indexOf(this.selectedCar)] = this.car;
    }
    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
}

delete() {
    const index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i !== index);
    this.car = null;
    this.displayDialog = false;
}

onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
}

cloneCar(c: Car): Car {
    // tslint:disable-next-line:prefer-const
    let car = {};
    // tslint:disable-next-line:forin
    for (const prop in c) {
        car[prop] = c[prop];
    }
    return car;
}
}
export class  Car {
  public vin?: string;
   public year?: string;
   public brand?: string;
    public color?: string;
      constructor() {}
  }
