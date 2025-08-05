function saveContact() {
  alert("Contact saved (placeholder).");
}

function downloadMenu() {
  alert("Menu downloaded (placeholder).");
}

function shareWebsite() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: "Check out our restaurant menu!",
      url: window.location.href
    }).catch((err) => console.log('Share failed:', err));
  } else {
    alert("Sharing is not supported in this browser.");
  }
}

