import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    image:'https://media.licdn.com/dms/image/v2/D4E03AQGq_ayowmoOlg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726833521791?e=1738195200&v=beta&t=ACE3ejILJT0YeXW7hCFXNgbbdmK1ZfnTez7nzAPXZc0',
    name: 'El Mehdi JAOUHAR',
    profession: 'Full Stack Developer',
    email: 'elmehdijaouhar@gmail.com',
    phone: '+212 (066) 344-8449',
    birthday: 'June 18, 1992',
    location: 'Rue Abderrahman Majdoub Hay Tarik 1, Fes, Maroc',
    socialLinks: {
      github: 'https://facebook.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
    },
  };
  isSidebarHidden = true; // Initially hidden on mobile

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }
}
