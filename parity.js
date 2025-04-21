function generateParity() {
  const bitInput = document.getElementById("bitInput").value.trim();
  const resultDiv = document.getElementById("result");
  const selectedParity = document.querySelector('input[name="parity"]:checked').value;

  if (!/^[01]+$/.test(bitInput)) {
    resultDiv.innerHTML = "<span style='color: red;'>Please enter a valid binary string.</span>";
    return;
  }

  const bits = bitInput.split("").map(Number);
  const countOnes = bits.filter(b => b === 1).length;

  let parityBit;
  if (selectedParity === "even") {
    parityBit = countOnes % 2 === 0 ? 0 : 1;
  } else {
    parityBit = countOnes % 2 === 0 ? 1 : 0;
  }

  const finalSeq = bits.join("") + `<span style="color:red;">${parityBit}</span>`;
  resultDiv.innerHTML = `Bitstream with Parity Bit: ${finalSeq}`;
}

function goBack() {
  window.location.href = "landing.html";
}
