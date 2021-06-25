export interface Article {
    id: number,
    title: string,
    date: Date,
    author: string,
    tldr: string[],
    content: string[],
    level: string,
    likes: number,
    dislikes: number,
    visits: number,
  }