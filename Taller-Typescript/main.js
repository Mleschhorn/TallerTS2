import { series } from "./data.js";
const tableBody = document.getElementById("seriesTable");
const cardContainer = document.getElementById("cardBody");
let totalSeasons = 0;
series.forEach(serie => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${serie.id}</td>
    <td style="color: blue; cursor: pointer;">${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
    const nameCell = row.children[1];
    nameCell.addEventListener("click", () => {
        serie.showCard(cardContainer);
    });
    tableBody.appendChild(row);
    totalSeasons += serie.seasons;
});
const average = totalSeasons / series.length;
const avgRow = document.createElement("tr");
avgRow.innerHTML = `<td colspan="4"><strong>Seasons average: ${average.toFixed(2)}</strong></td>`;
tableBody.appendChild(avgRow);
