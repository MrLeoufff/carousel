export class Panel {
  constructor(title = "no title", imagePath = "") {
    const div = (this.html = document.createElement("div"));
    this.initialize(div, title, imagePath);
    this.listenClickEvent();
  }

  initialize(div, title, imagePath) {
    div.style = `background-image: url(${getImagePath()})`;
    div.className = "panel";
    div.innerHTML = `<h3>${capitalizeTitle()}</h3>`;

    function capitalizeTitle() {
      return title
        .split(" ")
        .map(
          ([first, ...rest]) =>
            first.toUpperCase() + rest.join("").toLowerCase()
        )
        .join(" ");
    }
    function getImagePath() {
      return imagePath || `./images/${title.replaceAll(" ", "-")}.jpg`;
    }
  }

  listenClickEvent() {
    this.html.addEventListener("click", () => {
      Array.from(this.html.parentNode.children).forEach((p) =>
        p.classList.remove("active")
      );
      this.html.classList.add("active");
    });
  }

  static render(panels) {
    panels[0].html.classList.add("active");
    panels.forEach((p) => {
      document.querySelector(".container").appendChild(p.html);
    });
  }
}
