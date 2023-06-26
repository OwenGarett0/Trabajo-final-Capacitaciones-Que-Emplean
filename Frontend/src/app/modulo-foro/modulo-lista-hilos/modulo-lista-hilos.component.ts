import { Component, OnInit } from '@angular/core';
import { Post } from '../../post.model';
import { PostService } from '../../posts.service';

@Component({
  selector: 'app-modulo-lista-hilos',
  templateUrl: './modulo-lista-hilos.component.html',
  styleUrls: ['./modulo-lista-hilos.component.css']
})
export class ModuloListaHilos implements OnInit {
  post: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getThreads();
  }

  getThreads(): void {
    this.postService.getPosts()
      .subscribe(post => this.post = post);
  }

  deleteThread(id: number): void {
    this.postService.deletePost(id)
      .subscribe(() => {
        // Realizar alguna acción después de eliminar el hilo, como recargar la lista de hilos
        this.getThreads();
      });
  }
}
