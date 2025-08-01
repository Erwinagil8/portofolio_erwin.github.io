let messageCount = 0;

function validateForm() {
    const name = document.getElementById('name-input').value.trim();
    const message = document.getElementById('message-input').value.trim();

    if (name === "" || message === "") {
        alert("Please fill in both your name and message.");
        return;
    }

    // Tambah nomor urut
    messageCount++;

    // Buat baris baru
    const tableBody = document.querySelector("#message-table tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${messageCount}</td>
        <td>${escapeHtml(name)}</td>
        <td>${escapeHtml(message)}</td>
    `;

    tableBody.appendChild(newRow);

    // Reset form
    document.getElementById('lets-talk-form').reset();
}

// Fungsi untuk mencegah XSS
function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}



function welcomeMessage() {
  // Tampilkan popup untuk meminta nama
  let nama = prompt("Please enter your name:");
  // Tampilkan nama di elemen dengan id 'welcome-speech'
  document.getElementById('welcome-speech').textContent = nama ? nama : "Guest";
}