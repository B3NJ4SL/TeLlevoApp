import { Component, OnInit } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscruta',
  templateUrl: './buscruta.page.html',
  styleUrls: ['./buscruta.page.scss'],
})
export class BuscrutaPage implements OnInit {

  constructor(private router: Router) { }

  irIniciop(){    
    this.router.navigate(['/iniciop']);
  }

  ngOnInit() {
  }

}
