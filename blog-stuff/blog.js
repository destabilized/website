document.addEventListener("DOMContentLoaded", () => {
  const posts = document.querySelectorAll(".blog-card");

  posts.forEach(post => {
    const tags = post.dataset.tags;
    const link = post.querySelector(".view-more").getAttribute("href");

    const cacheKey = `postMeta:${link}`;
    const cachedRaw = localStorage.getItem(cacheKey);

    let cached = null;
    if (cachedRaw) {
      try {
        cached = JSON.parse(cachedRaw);
      } catch {
        cached = null;
      }
    }

    const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

    if (cached && cached.date === today) {
      updateMeta(post, cached.wordCount, cached.readingTime, tags);
      return;
    }

    fetch(link)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const articleEl = doc.querySelector(".yap");
        if (!articleEl) throw new Error("Article container '.yap' not found");

        const articleText = articleEl.innerText.trim();
        const words = articleText.split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;
        const readingTime = Math.ceil(wordCount / 200);

        localStorage.setItem(
          cacheKey,
          JSON.stringify({ wordCount, readingTime, date: today })
        );

        updateMeta(post, wordCount, readingTime, tags);
      })
      .catch(err => {
        console.error(`Error fetching ${link}:`, err);
        post.querySelector(".meta").innerHTML = `<span>🏷 ${tags}</span>`;
      });
  });

  function updateMeta(post, wordCount, readingTime, tags) {
    post.querySelector(".meta").innerHTML = `
      <span>📄 ${wordCount} words</span>
      <span>⏱ ${readingTime} min read</span>
      <span>🏷 ${tags}</span>
    `;
  }
});
