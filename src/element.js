class Element {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  //get
  //set

  //this.width
  drawElement() {
    const element = document.createElement("div");
    element.style.backgroundColor = this.color;
    element.style.height = `${this.height}px`;
    element.style.width = `${this.width}px`;
    const app = document.getElementById("app");
    app.appendChild(element);
  }
}

export default Element;
