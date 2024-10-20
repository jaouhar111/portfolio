import { Component } from '@angular/core';
import { SidebarComponent } from '../../Components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { ContactComponent } from "../../Components/contact/contact.component";
import { BlogComponent } from "../../Components/blog/blog.component";
import { PortfolioComponent } from "../../Components/portfolio/portfolio.component";
import { ResumerComponent } from "../../Components/resumer/resumer.component";
import { AboutComponent } from "../../Components/about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavbarComponent, ContactComponent, BlogComponent, PortfolioComponent, ResumerComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isSidebarActive = false;
  isModalActive = false;

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }
}
