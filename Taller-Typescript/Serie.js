export class Serie {
    constructor(id, name, channel, seasons, description, website, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.website = website;
        this.image = image;
    }
    showCard(container) {
        container.innerHTML = `
      <div class="card">
        <img src="${this.image}" class="card-img-top" alt="${this.name}">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.description}</p>
          <a href="${this.website}" class="btn btn-primary" target="_blank">Go to site</a>
        </div>
      </div>
    `;
    }
}
