export class DisplayQuotes {
  constructor(
    public id: number,
    public jina: string,
    public email: string,
    public quote: string,
    public likes,
    public dislikes,
    public publishedDate: Date
  ) {}
}
