// Initialize QR Code Styling
const qrCode = new QRCodeStyling({
  width: 250,
  height: 250,
  data: "",
  margin: 10,
  dotsOptions: {
    color: "#000000",
    type: "rounded"
  },
  backgroundOptions: {
    color: "#ffffff"
  },
  cornersSquareOptions: {
    type: "extra-rounded",
    color: "#000000"
  },
  cornersDotOptions: {
    type: "dot",
    color: "#000000"
  }
});

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
