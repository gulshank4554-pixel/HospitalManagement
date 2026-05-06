document.addEventListener("DOMContentLoaded", () => {
  // Highlight service items
  document.querySelectorAll(".service-item").forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("highlight");
    });
  });

  // Appointment button logic
  const appointmentBtn = document.getElementById("appointmentBtn");
  appointmentBtn.addEventListener("click", (e) => {
    alert("Redirecting you to the Appointment Booking page...");
    // Navigation handled via anchor href, so no need to manually redirect
  });

  // Nav links placeholder actions
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Navigating to the ${link.textContent} section (coming soon).`);
    });
  });
});