import { Component } from '@angular/core';
import { NavbarComponent } from "../../common/navbar/navbar.component";
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [NavbarComponent, NgxTypedJsModule, CommonModule, RouterLink]
})
export class HomeComponent {

}
