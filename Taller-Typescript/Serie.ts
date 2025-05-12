export class Serie {
  constructor(
    public id: number,
    public name: string,
    public channel: string,
    public seasons: number,
    public description: string,
    public website: string,
    public image: string
  ) {}

  showCard(container: HTMLElement): void {
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
