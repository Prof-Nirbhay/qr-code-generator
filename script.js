// Initialize QR Code Styling
const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "",
  margin: 10,
  qrOptions: {
    errorCorrectionLevel: "H"
  },
  dotsOptions: {
    color: "#000000",
    type: "square"
  },
  backgroundOptions: {
    color: "#ffffff"
  }
});

window.onload = function () {
  qrCode.append(document.getElementById("qrcode"));
};

function generateQR() {
  const url = document.getElementById("url").value.trim();

  if (!url) {
    alert("Enter URL");
    return;
  }

  qrCode.update({ data: url });

  // Add text overlay after slight delay
  setTimeout(addTextOverlay, 300);
}

function addTextOverlay() {
  const canvas = document.querySelector("#qrcode canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  ctx.font = "bold 20px Arial";
  ctx.fillStyle = "rgba(0,0,0,0.7)";
  ctx.textAlign = "center";

  ctx.fillText("MKES", canvas.width / 2, canvas.height / 2);
}

function downloadQR() {
  qrCode.download({
    name: "qr-with-text",
    extension: "png"
  });
}

// Append QR to center container
window.onload = function () {
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";
  qrCode.append(qrContainer);
};

// Generate QR
function generateQR() {
  const url = document.getElementById("url").value.trim();

  if (!url) {
    alert("Please enter a valid URL");
    return;
  }

  qrCode.update({
    data: url,
    dotsOptions: {
      color: getRandomColor(),
      type: getRandomStyle()
    },
    cornersSquareOptions: {
      type: "extra-rounded",
      color: getRandomColor()
    },
    cornersDotOptions: {
      type: "dot",
      color: getRandomColor()
    }
  });
}

// Download QR
function downloadQR() {
  qrCode.download({
    name: "qr-code",
    extension: "png"
  });
}

// 🎨 Random Color Generator
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// 🎭 Random Style Generator
function getRandomStyle() {
  const styles = ["square", "rounded", "dots", "classy", "classy-rounded"];
  return styles[Math.floor(Math.random() * styles.length)];
}
