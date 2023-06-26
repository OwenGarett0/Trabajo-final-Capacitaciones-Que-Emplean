import { Component } from '@angular/core';
import { PostService } from '../../posts.service';
import { Router } from '@angular/router';
import { Post } from '../../post.model'
@Component({
  selector: 'app-create-thread',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPost{
  title: string;
  content: string;
  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  createPost(): void {
    this.postService.createPost(this.title, this.content)
      .subscribe(() => {
        // Realizar alguna acción después de crear el hilo, como redirigir al usuario a la lista de hilos
        this.router.navigate(['/forum/']);
      });
  }
}
