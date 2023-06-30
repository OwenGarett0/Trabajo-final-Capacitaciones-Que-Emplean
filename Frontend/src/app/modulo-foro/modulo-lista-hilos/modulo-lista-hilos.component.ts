import { Component, OnInit } from '@angular/core';
import { Post } from '../../post.model';
import { PostService } from '../../posts.service';
import { Answer } from '../../answer.model';
import { AnswerService } from '../../answer.service';

@Component({
  selector: 'app-thread-list',
  templateUrl: './modulo-lista-hilos.component.html',
  styleUrls: ['./modulo-lista-hilos.component.css']
})
export class ModuloListaHilos implements OnInit {
  threads: Post[];

  constructor(private threadService: PostService, private answerService: AnswerService) { }

  ngOnInit(): void {
    this.getThreads();
  }

  getThreads(): void {
    this.threadService.getPosts()
      .subscribe(threads => {
        this.threads = threads;
        // Obtener las respuestas para cada hilo
        for (const thread of this.threads) {
          this.getRespuestas(thread.id);
        }
      });
  }

  getRespuestas(threadId: number): void {
    this.answerService.getRespuestas(threadId)
      .subscribe(respuestas => {
        const thread = this.threads.find(t => t.id === threadId);
        if (thread) {
          thread.respuestas = Object.values(respuestas);
        }
        console.log(this.threads); // Verificar las respuestas recibidas
      });
  }
}
