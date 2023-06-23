import { Component } from '@angular/core';
import { PostService } from '../../posts.service';
import { Router } from '@angular/router';
import { Post } from '../../post.model'
@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent {
  post: Post[] = [];

  constructor(
    private threadService: PostService,
    private router: Router
  ) { }

  createThread(): void {
    this.threadService.createPost(this.post)
      .subscribe(() => {
        // Realizar alguna acción después de crear el hilo, como redirigir al usuario a la lista de hilos
        this.router.navigate(['/threads']);
      });
  }
}
