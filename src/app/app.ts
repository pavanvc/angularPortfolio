import { Component, signal } from '@angular/core';
import { RouterOutlet, } from '@angular/router';


import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
//import { projects } from './components/projects/projects';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,
    About,
    Skills,
    Experience,
    Contact,
    Footer,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pavan-portfolio');
}
