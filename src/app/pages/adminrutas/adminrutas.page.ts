import { Component, OnInit } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminrutas',
  templateUrl: './adminrutas.page.html',
  styleUrls: ['./adminrutas.page.scss'],
})
export class AdminrutasPage implements OnInit {

  constructor(private router: Router) { }

  irInicioc(){    
    this.router.navigate(['/inicioc']);
  }

  ngOnInit() {
  }

}
