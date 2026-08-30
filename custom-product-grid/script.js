document.addEventListener("DOMContentLoaded", function () {
  // ১. Grid and List View Toggle
  const viewButtons = document.querySelectorAll(".cpg-view-btn");
  const container = document.querySelector(".cpg-products-container");

  if (viewButtons.length > 0 && container) {
    viewButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        viewButtons.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");

        const view = this.getAttribute("data-view");
        if (view === "list") {
          container.classList.remove("grid-view");
          container.classList.add("list-view");
        } else {
          container.classList.remove("list-view");
          container.classList.add("grid-view");
        }
      });
    });
  }

  // ২. Sorting Logic
  const sortSelect = document.getElementById("cpg-sort");
  if (sortSelect && container) {
    sortSelect.addEventListener("change", function () {
      const value = this.value;
      const items = Array.from(document.querySelectorAll(".cpg-product-card"));

      items.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute("data-price"));
        const priceB = parseFloat(b.getAttribute("data-price"));
        const nameA = a.getAttribute("data-name").toLowerCase();
        const nameB = b.getAttribute("data-name").toLowerCase();

        if (value === "price-low") return priceA - priceB;
        if (value === "price-high") return priceB - priceA;
        if (value === "name") return nameA.localeCompare(nameB);
        return 0;
      });

      items.forEach((item) => container.appendChild(item));
    });
  }
});