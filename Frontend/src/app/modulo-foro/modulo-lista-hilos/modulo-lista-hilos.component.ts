import { Component, OnInit } from '@angular/core';
import { Post } from '../../post.model';
import { PostService } from '../../posts.service';
import { Answer } from '../../answer.model'
import { AnswerService } from '../../answer.service';

@Component({
  selector: 'app-modulo-lista-hilos',
  templateUrl: './modulo-lista-hilos.component.html',
  styleUrls: ['./modulo-lista-hilos.component.css']
})
export class ModuloListaHilos implements OnInit {
  post: Post[];
  answer: Answer[];
  constructor(private postService: PostService, private answerService: AnswerService) { }

  ngOnInit(): void {
    this.getThreads();
    this.getAnswers();

  }
  getAnswers(): void{
    this.answerService.getRespuestas
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
