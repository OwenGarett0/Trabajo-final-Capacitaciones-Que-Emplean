import { Answer } from "./answer.model";

export interface Post {
  id: number;
  title: string;
  content: string;
  respuestas?: Answer[];
}
