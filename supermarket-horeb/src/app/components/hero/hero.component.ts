import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {

  ngOnInit(): void {
    this.animarHero();
  }

  animarHero(): void {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.to('.hero__title', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .to('.hero__subtitle', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    .to('.hero__info', {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.hero__btn', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, '-=0.2');
  }
}