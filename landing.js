// Function to handle ARQ/FEC selection and show the respective options
document.getElementById("arqFec").addEventListener("change", toggleOptions);

// Function to show the correct options based on user selection
function toggleOptions() {
  const selectedOption = document.getElementById("arqFec").value;
  const arqOptions = document.getElementById("arqOptions");
  const fecOptions = document.getElementById("fecOptions");

  // Show or hide ARQ/FEC options based on selection
  if (selectedOption === "arq") {
    arqOptions.style.display = "block";
    fecOptions.style.display = "none";
  } else if (selectedOption === "fec") {
    arqOptions.style.display = "none";
    fecOptions.style.display = "block";
  } else {
    arqOptions.style.display = "none";
    fecOptions.style.display = "none";
  }
}

// Function to submit data (for now just an alert)
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

// Function to simulate navigation (for now it just alerts)
function goToPage(page) {
  alert(`Going to page for: ${page}`);
}
