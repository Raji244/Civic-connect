function showSection(sectionId) {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

// Report civic issue
document.getElementById("reportForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const inputs = this.querySelectorAll("input, textarea");
  const title = inputs[0].value;
  const location = inputs[1].value;
  const description = inputs[2].value;

  const li = document.createElement("li");
  li.textContent = `📍 ${location} - ${title}: ${description}`;
  document.getElementById("reportList").appendChild(li);
  this.reset();
});

// Add announcement
document.getElementById("announcementForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = this.querySelector("input").value;
  const message = this.querySelector("textarea").value;

  const li = document.createElement("li");
  li.innerHTML = `<strong>${title}</strong><br>${message}`;
  document.getElementById("announcementList").appendChild(li);
  this.reset();
});

// Add event/discussion
document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const topic = this.querySelector("input").value;
  const details = this.querySelector("textarea").value;

  const li = document.createElement("li");
  li.innerHTML = `<strong>${topic}</strong><br>${details}`;
  document.getElementById("eventList").appendChild(li);
  this.reset();
});
