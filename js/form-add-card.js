import { Panel } from "./panel.js";

export class FormAddCard {
  constructor(panels) {
    this.fileInput = document.createElement('input');
    const preview = document.createElement('p');

    this.fileInput.type = "file";
    this.fileInput.accept = "image/jpg";
    this.listenFileEvent(panels, preview);
    preview.className = "preview";
    preview.innerHTML = "<img src=\"./images/no-image.jpg\">";

    document.querySelector('.container').appendChild(this.fileInput);
    document.querySelector('.container').appendChild(preview);
  }

  listenFileEvent(panels, preview) {
    this.fileInput.addEventListener('change', function() {
      const image = this.files[0];
      const imageName = image.name.split('.')[0].split('-').join(' ');
      const imagePath = URL.createObjectURL(image);
      panels.push(new Panel(imageName, imagePath));
      preview.innerHTML = `<img src="${imagePath}">`;
    });
  }
}
