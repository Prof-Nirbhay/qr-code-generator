let qr;

function generateQR() {
  const url = document.getElementById("url").value;
  const qrContainer = document.getElementById("qrcode");

  qrContainer.innerHTML = "";

  if (url.trim() === "") {
    alert("Please enter a valid URL");
    return;
  }

  qr = new QRCode(qrContainer, {
    text: url,
    width: 200,
    height: 200
  });
}

function downloadQR() {
  const img = document.querySelector("#qrcode img");

  if (!img) {
    alert("Generate QR first!");
    return;
  }

  const link = document.createElement("a");
  link.href = img.src;
  link.download = "qr-code.png";
  link.click();
}
