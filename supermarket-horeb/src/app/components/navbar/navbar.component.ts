import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  @ViewChild('navbar') navbar!: ElementRef;

  ngOnInit(): void {
    gsap.from('.navbar', {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  }
}