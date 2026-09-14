document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("site-search");
  const searchResults = document.getElementById("search-results");

  if (!searchInput || !searchResults) {
    return;
  }

  const searchableItems = [
    {
      title: "Welcome to My Archive",
      category: "Archive",
      date: "2026.09",
      url: "/2026/09/14/welcome-to-my-archive/"
    }
  ];

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML = "";

    if (!query) {
      searchResults.classList.remove("active");
      return;
    }

    const matches = searchableItems.filter(function (item) {
      return item.title.toLowerCase().includes(query);
    });

    if (matches.length === 0) {
      searchResults.innerHTML =
        '<p class="search-result-meta">No matching titles found.</p>';

      searchResults.classList.add("active");
      return;
    }

    matches.forEach(function (item) {
      const result = document.createElement("a");

      result.href = item.url;
      result.className = "search-result";

      result.innerHTML = `
        <div class="search-result-title">${item.title}</div>
        <div class="search-result-meta">
          ${item.category} · ${item.date}
        </div>
      `;

      searchResults.appendChild(result);
    });

    searchResults.classList.add("active");
  });
});
