import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ContactInfo } from '../../Interfaces/ContactInfo';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  contact: ContactInfo = {
    image:'https://media.licdn.com/dms/image/v2/D4E03AQGq_ayowmoOlg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726833521756?e=1732147200&v=beta&t=Ie7lWadXSF_qcX8cvJH3tTy151WdzrZTCHWh-l43DDA',
    name: 'El Mehdi JAOUHAR',
    profession: 'Full Stack Developer',
    email: 'elmehdijaouhar@gmail.com',
    phone: '+212 (066) 344-8449',
    birthday: 'June 18, 1992',
    location: 'Rue Abderrahman Majdoub Hay Tarik 1, Fes, Maroc',
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
    },
  };
  isSidebarActive = false;
  isExpanded = false;
  isMobile = false;
  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
  toggleExpand(): void {
    if (this.isMobile) {
      this.isExpanded = !this.isExpanded;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 640; // Tailwind's sm breakpoint
    if (!this.isMobile) {
      this.isExpanded = true;
    } else {
      this.isExpanded = false; // Collapse by default on mobile
    }
  }
}
