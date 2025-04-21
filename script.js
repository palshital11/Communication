let bitArray = [];

function addBit(bit) {
  if (bitArray.length >= 10) return alert("Only 10 bits allowed");
  bitArray.push(bit);
  document.getElementById("bitSequence").innerText = bitArray.join("");
}

function resetData() {
  bitArray = [];
  document.getElementById("bitSequence").innerText = "";
  document.getElementById("ledStrip").innerHTML = "";
}

function calculateChecksum(bits) {
  return bits.reduce((acc, b) => acc ^ b, 0); // XOR checksum
}

function sendData() {
  let bitsToSend = [...bitArray];
  const addChecksum = document.getElementById("checksumToggle").checked;
  if (addChecksum) {
    const checksum = calculateChecksum(bitsToSend);
    bitsToSend.push(checksum);
  }
  displayLEDs(bitsToSend);
}

function displayLEDs(bits) {
  const ledStrip = document.getElementById("ledStrip");
  ledStrip.innerHTML = "";
  bits.forEach((bit, index) => {
    setTimeout(() => {
      const led = document.createElement("div");
      led.classList.add("led");
      if (bit === 1) led.classList.add("on");
      ledStrip.appendChild(led);
    }, index * 300); // simulate delay
  });
}
