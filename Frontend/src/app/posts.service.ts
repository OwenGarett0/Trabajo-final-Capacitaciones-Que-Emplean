import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://localhost:7223/api/hilos';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPost(postId: number): Observable<Post> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.get<Post>(url);
  }
  createPost(title: string, content: string): Observable<Post> {
    const thread: Post = { title, content, id: 0};
    return this.http.post<Post>(this.apiUrl, thread);
  }


  updatePost(id: number, thread: Post): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Post>(url, thread);
  }

  deletePost(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
