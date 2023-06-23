import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../posts.service';
import { Post } from '../../post.model';

@Component({
  selector: 'app-modulo-hilo',
  templateUrl: './modulo-hilo.component.html',
  styleUrls: ['./modulo-hilo.component.css']
})
export class ModuloHilo {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getThread();
  }

  getThread(): void {
    const idstr = this.route.snapshot.paramMap.get('id');
    if (idstr !== null) {
      const id = parseInt(idstr, 10);
      this.postService.getPost(id)
        .subscribe(post => this.post = post
        );
    }
  }
}
