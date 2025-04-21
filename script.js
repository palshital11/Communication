document.getElementById("arqFec").addEventListener("change", toggleOptions);

function toggleOptions() {
  const selectedOption = document.getElementById("arqFec").value;
  const arqOptions = document.getElementById("arqOptions");
  const fecOptions = document.getElementById("fecOptions");

  if (selectedOption === "arq") {
    arqOptions.style.display = "block";
    fecOptions.style.display = "none";
  } else {
    arqOptions.style.display = "none";
    fecOptions.style.display = "block";
  }
}

function submitData() {
  const carrierFreq = document.getElementById("carrierFreq").value;
  const bitSequence = document.getElementById("bitSequence").value;
  
  if (!carrierFreq || !bitSequence) {
    alert("Please enter all required fields.");
    return;
  }
  
  // Proceed to next page or logic
  alert(`Carrier Frequency: ${carrierFreq}\nBit Sequence: ${bitSequence}`);
}

function goToPage(page) {
  // In this example, it's simply an alert, but you can redirect to corresponding page.
  alert(`Going to page for: ${page}`);
}
