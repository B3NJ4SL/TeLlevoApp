import { Component, OnInit } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ganancia',
  templateUrl: './ganancia.page.html',
  styleUrls: ['./ganancia.page.scss'],
})
export class GananciaPage implements OnInit {

  constructor(private router: Router) { }

  irInicioc(){    
    this.router.navigate(['/inicioc']);
  }

  ngOnInit() {
  }

}
