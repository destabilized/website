const posts = [
  {
    title: "junior week 1/28 - 1/30",
    date: "jan. 29th, 2026",
    preview: "keycap problems",
    img: "../../static/img/junior/19/progress.jpeg",
    href: "blog-posts/junior/week_19.html",
    tags: ["keyboard"]
  },
  {
    title: "junior week 1/21 - 1/23",
    date: "jan. 22nd, 2026",
    preview: "rant abt how much i hate sanding",
    img: "../../static/img/junior/18/batch3.jpeg",
    href: "blog-posts/junior/week_18.html",
    tags: ["keyboard"]
  },
  {
    title: "junior week 1/12 - 1/16",
    date: "jan. 15th, 2026",
    preview: "rant abt form 3 resin printer incoming",
    img: "../../static/img/junior/17/clusterfuck.jpeg",
    href: "blog-posts/junior/week_17.html",
    tags: ["keyboard"]
  },
  {
    title: "junior week 12/23 - 1/9",
    date: "jan. 8th, 2026",
    preview: "pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came",
    img: "../../static/img/junior/16/full.jpeg",
    href: "blog-posts/junior/week_16.html",
    tags: ["keyboard"]
  },
  {
    title: "junior week 12/15 - 12/19",
    date: "dec. 18th, 2025",
    preview: "stabilizers came + working on the case",
    img: "../../static/img/junior/15/case.png",
    href: "blog-posts/junior/week_15.html",
    tags: ["keyboard"]
  },
  {
    title: "junior week 12/8 - 12/12",
    date: "dec. 11th, 2025",
    preview: "low motivation",
    img: "../../static/img/junior/14/wired.png",
    href: "blog-posts/junior/week_14.html",
    tags: ["keyboard"]
  },
  {
    title: "junior week 11/24 - 12/5",
    date: "dec. 4th, 2025",
    preview: "two weeks work bc thanksgiving week was legit 2.5 days",
    img: "../../static/img/junior/13/pcb_finished.png",
    href: "blog-posts/junior/week_13.html",
    tags: ["keyboard"]
  },
  {
    title: "junior week 11/17 - 11/21",
    date: "nov. 20th, 2025",
    preview: "downfall",
    img: "../../static/img/junior/12/full-front.jpeg",
    href: "blog-posts/junior/week_12.html",
    tags: ["macropad"]
  },
  {
    title: "junior week 11/10 - 11/14",
    date: "nov. 10th, 2025",
    preview: "major updates. finally started pcb and almost done",
    img: "../../static/img/junior/11/fixed.png",
    href: "blog-posts/junior/week_11.html",
    tags: ["macropad"]
  },
  {
    title: "junior week 11/3 - 11/7",
    date: "nov. 6th, 2025",
    preview: "learning the kb2040 by using circuitpython",
    img: "../../static/img/junior/10/wp.png",
    href: "blog-posts/junior/week_10.html",
    tags: ["macropad"]
  },
  {
    title: "junior week 10/27 - 10/30",
    date: "oct. 30th, 2025",
    preview: "creating a bomb and claiming that it's for a school project!",
    img: "../../static/img/junior/9/final.png",
    href: "blog-posts/junior/week_9.html",
    tags: ["ap lang proj"]
  },
  {
    title: "junior week 10/20 - 10/24",
    date: "oct. 23rd, 2025",
    preview: "printer stuff + macropad stuff bc it's been 3 weeks",
    img: "../../static/img/junior/8/full.png",
    href: "blog-posts/junior/week_8.html",
    tags: ["printer", "macropad"]
  },
  {
    title: "junior week 10/14 - 10/17",
    date: "oct. 16th, 2025",
    preview: "fixing a printer because nobody wants to spend $2k to buy a replacement motherboard",
    img: "../../static/img/junior/7/problem.jpeg",
    href: "blog-posts/junior/week_7.html",
    tags: ["printer"]
  },
  {
    title: "junior week 10/6 - 10/10",
    date: "oct. 9th, 2025",
    preview: "macropad work. new project",
    img: "../../static/img/junior/6/pcb.png",
    href: "blog-posts/junior/week_6.html",
    tags: ["macropad"]
  },
  {
    title: "junior week 9/29 - 10/2",
    date: "oct. 1st, 2025",
    preview: "almost done yippie",
    img: "../../static/img/junior/5/finished_seven_s.jpeg",
    href: "blog-posts/junior/week_5.html",
    tags: ["7-seg"]
  },
  {
    title: "junior week 9/22 - 9/26",
    date: "sep 25th, 2025",
    preview: "i'm just a slave to doing tasks that the shop gives us",
    img: "../../static/img/junior/4/home.png",
    href: "blog-posts/junior/week_4.html",
    tags: ["shop tasks"]
  },
  {
    title: "junior week 9/15 - 9/19",
    date: "sep 18th, 2025",
    preview: "even more work on my seven segment for this stupid sign lol",
    img: "../../static/img/junior/3/schem.png",
    href: "blog-posts/junior/week_3.html",
    tags: ["7-seg"]
  },
  {
    title: "junior week 9/8 - 9/12",
    date: "sep 11th, 2025",
    preview: "more work on my seven segment for this stupid sign lol",
    img: "../../static/img/junior/2/full.jpeg",
    href: "blog-posts/junior/week_2.html",
    tags: ["7-seg"]
  },
  {
    title: "junior week 9/2 - 9/5",
    date: "sep 4th, 2025",
    preview: "helped around the shop, and reimaged a few computers",
    img: "../../static/img/junior/1/broken.jpeg",
    href: "blog-posts/junior/week_1.html",
    tags: ["shop tasks", "7-seg"]
  },
  {
    title: "soph week 6/9 - 6/13",
    date: "jun 12th, 2025",
    preview: "helped around the shop, broke a few things on my computer somehow",
    img: "../../static/img/soph/19/bsod.jpeg",
    href: "blog-posts/soph/week_19.html",
    tags: ["shop tasks"]
  },
  {
    title: "soph week 6/2 - 6/6",
    date: "jun 5th, 2025",
    preview: "my final zerømouse post. i decided to scrap the project after this",
    img: "../../static/img/soph/18/right_problems.PNG",
    href: "blog-posts/soph/week_18.html",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 5/26 - 5/30",
    date: "may 30th, 2025",
    preview: "zerømouse updates! yaayayya i definitely don't hate my life!",
    img: "../../static/img/soph/17/problem.png",
    href: "blog-posts/soph/week_17.html",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 5/12 - 5/16",
    date: "may 17th, 2025",
    preview: "recap of the final moments before sumobot competition. end of sumobot.",
    img: "../../static/img/soph/16/broken.jpeg",
    href: "blog-posts/soph/week_16.html",
    tags: ["sumobot"]
  },
  {
    title: "soph week 5/5 - 5/9",
    date: "may 8th, 2025",
    preview: "restarting because i'm stupid. zerømouse updates yet again",
    img: "../../static/img/soph/15/error.jpeg",
    href: "blog-posts/soph/week_15.html",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 4/28 - 5/2",
    date: "may 1st, 2025",
    preview: "may have broke the pcb on the mouse i was using... zerømouse updates",
    img: "../../static/img/soph/14/soulderfront.jpeg",
    href: "blog-posts/soph/week_14.html",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 4/14 - 4/18",
    date: "apr. 16th, 2025",
    preview: "made the grip for the zerømouse. won't be here tomorrow, so earlier blog post",
    img: "../../static/img/soph/13/full_3d.png",
    href: "blog-posts/soph/week_13.html",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 4/7 - 4/10",
    date: "apr. 10th, 2025",
    preview: "zerømouse and sumobot updates. primarily zerømouse.",
    img: "../../static/img/soph/12/full.png",
    href: "blog-posts/soph/week_12.html",
    tags: ["sumobot", "mouse"]
  },
  {
    title: "soph week 4/1 - 4/4",
    date: "apr. 3rd, 2025",
    preview: "made triggers for my zerømouse and test printed new bases.",
    img: "../../static/img/soph/11/new.png",
    href: "blog-posts/soph/week_11.html",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 3/24 - 3/28",
    date: "mar. 27th, 2025",
    preview: "sumobot schematic and zerømouse updates.",
    img: "../../static/img/soph/10/pcb_fixed.png",
    href: "blog-posts/soph/week_10.html",
    tags: ["sumobot", "mouse"]
  },
  {
    title: "soph week 3/17 - 3/21",
    date: "mar. 20th, 2025",
    preview: "started creating the pcb for the sumobot. gonna get it milled soon",
    img: "../../static/img/soph/9/schem.png",
    href: "blog-posts/soph/week_9.html",
    tags: ["sumobot"]
  },
  {
    title: "soph week 3/3 - 3/14",
    date: "mar. 13th, 2025",
    preview: "new project: sumobot competition. an overview about our plans",
    img: "../../static/img/soph/8/skill_issue.webp",
    href: "blog-posts/soph/week_8.html",
    tags: ["sumobot"]
  },
  {
    title: "soph week 2/24 - 2/28",
    date: "feb. 27th, 2025",
    preview: "new project: zerømouse. a replica inspired by optimum tech's zerømouse.",
    img: "../../static/img/soph/7/zeromouse.webp",
    href: "blog-posts/soph/week_7.html",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 2/3 - 2/7",
    date: "feb. 7th, 2025",
    preview: "finishing touches of the acrylic piece of my lightbox, and now it's done.",
    img: "../../static/img/soph/6/full.jpeg",
    href: "blog-posts/soph/week_6.html",
    tags: ["lightbox"]
  },
  {
    title: "soph week 1/27 - 1/31",
    date: "jan. 30th, 2025",
    preview: "working on the pcb of my lightbox, and started the acrylic piece.",
    img: "../../static/img/soph/5/error_1.png",
    href: "blog-posts/soph/week_5.html",
    tags: ["lightbox"]
  },
  {
    title: "soph week 1/20 - 1/24",
    date: "jan. 23rd, 2025",
    preview: "finished the base of my lightbox. just gotta make the pcb and acrylic pieces now.",
    img: "../../static/img/soph/4/full.png",
    href: "blog-posts/soph/week_4.html",
    tags: ["lightbox"]
  },
  {
    title: "soph week 1/13 - 1/17",
    date: "jan. 16th, 2025",
    preview: "finished most of the base, fixing the code.",
    img: "../../static/img/soph/3/3d.png",
    href: "blog-posts/soph/week_3.html",
    tags: ["lightbox"]
  },
  {
    title: "soph week 1/2 - 1/10",
    date: "jan. 9th, 2025",
    preview: "started a rough pcb and a sample box. bugs persist in my code.",
    img: "../../static/img/soph/2/pcb.png",
    href: "blog-posts/soph/week_2.html",
    tags: ["lightbox"]
  },
  {
    title: "soph week 12/16 - 12/20",
    date: "dec. 19th, 2024",
    preview: "figuring out the mechanism for my lightbox, and starting the code.",
    img: "../../static/img/soph/1/sw1.jpeg",
    href: "blog-posts/soph/week_1.html",
    tags: ["lightbox"]
  }
];

function renderPost(post) {
  const article = document.createElement("article");
  article.className = "blog-card";
  article.dataset.tags = post.tags.join(", ");

  article.innerHTML = `
    <img src="${post.img}" alt="">
    <div class="blog-content">
        <h2>${post.title}</h2>
        <p class="date">${post.date}</p>
        <p class="preview">${post.preview}</p>
        <div class="meta"></div>
        <a href="${post.href}" class="view-more">view more →</a>
    </div>
  `;
  return article;
}

function initMeta() {
  const postsEls = document.querySelectorAll(".blog-card");

  postsEls.forEach(post => {
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
}

function updateMeta(post, wordCount, readingTime, tags) {
  post.querySelector(".meta").innerHTML = `
    <span>📄 ${wordCount} words</span>
    <span>⏱ ${readingTime} min read</span>
    <span>🏷 ${tags}</span>
  `;
}

// ----- 4. Bootstrapping: render cards, then init meta -----
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("blog-grid");

  // render all posts
  posts.forEach(post => grid.appendChild(renderPost(post)));

  // now that .blog-card elements exist, run your meta logic
  initMeta();
});
