import Element from "./element";

class Article extends Element {
  constructor(width, height, color, heading, text, link) {
    super(width, height, color);
    this.heading = heading;
    this.text = text;
    this.link = link;
  }
}

export default Article;
