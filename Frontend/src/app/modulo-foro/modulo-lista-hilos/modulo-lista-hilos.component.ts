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
  answers: any[] = [];
  constructor(private postService: PostService, private answerService: AnswerService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.postService.getPosts()
      .subscribe(post => {this.post = post;
      for (const p of this.post){this.getAnswers(p.id);}
                          });
                  }
  getAnswers(postId: number): void{
    this.answerService.getRespuestas(postId).subscribe(answers =>{this.answers = answers;
    });
  }

 

  deleteThread(id: number): void {
    this.postService.deletePost(id)
      .subscribe(() => {
        // Realizar alguna acción después de eliminar el hilo, como recargar la lista de hilos
        this.getPost();
      });
  }
}
