//your JS code here. If required.
let tableBody = document.querySelector("#output");

// Add the initial loading row
let loadingRow = document.createElement("tr");
let loadingCell = document.createElement("td");
loadingCell.colSpan = 2;
loadingCell.textContent = "Loading...";
loadingRow.appendChild(loadingCell);
tableBody.appendChild(loadingRow);

// Create promises with random resolve times between 1 and 3 seconds
let promises = [1, 2, 3].map((i) => {
  let time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id: i, time: time.toFixed(3) }), time * 1000)
  );
});

// Wait for all promises to resolve
Promise.all(promises).then((results) => {
  // Remove the loading row
  tableBody.innerHTML = "";

  let totalTime = 0;

  // Add rows for each promise
  results.forEach(({ id, time }) => {
    totalTime += parseFloat(time);
    let row = `<tr>
      <td>Promise ${id}</td>
      <td>${time}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });

  // Add the total row
  tableBody.innerHTML += `<tr>
    <td>Total</td>
    <td>${totalTime.toFixed(3)}</td>
  </tr>`;
});
