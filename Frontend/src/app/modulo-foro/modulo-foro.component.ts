import { Component } from '@angular/core';
import { ModuloAuth } from '../modulo-auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo-foro',
  templateUrl: './modulo-foro.component.html',
  styleUrls: ['./modulo-foro.component.css']
})
export class ModuloForo {
  content: string = '';
  title: string = '';
  author: string = ''
  constructor(private auth: ModuloAuth, private router: Router, private http: HttpClient ) { }

  NewPost(){
    const Post = {content: this.content, title: this.title, author: this.author};
    this.http.post('https://localhost:7223/api/hilos', Post).subscribe(response => {})

  };
  
  ListarPosts(){
    this.http.get('https://localhost:7223/api/hilos').subscribe(response=>{})
  }

}
