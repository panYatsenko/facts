const initialFacts = [
  {
    id: 1,
    text: "Quantum computers can perform calculations that are impossible for classical computers. Google announced in 2019 that its Sycamore processor achieved quantum supremacy.",
    source:
      "https://ai.googleblog.com/2019/10/quantum-supremacy-using-a-programmable.html",
    category: "technology",
    votesIneteresting: 10,
    votesMindblowing: 2,
    votesFalse: 8,
    createdIn: 2024,
  },
  {
    id: 2,
    text: "According to the UN, around 3.7 billion people worldwide still lack internet access, creating significant digital inequality.",
    source:
      "https://www.un.org/development/desa/dspd/2021/04/digital-inequality/",
    category: "society",
    votesIneteresting: 7,
    votesMindblowing: 3,
    votesFalse: 9,
    createdIn: 2024,
  },
  {
    id: 3,
    text: "Genetic algorithms, inspired by natural selection, are used to solve complex optimization problems in various fields, including engineering design and financial modeling.",
    source:
      "https://www.amazon.com/Genetic-Algorithms-Search-Optimization-Learning/dp/0201521628",
    category: "science",
    votesIneteresting: 8,
    votesMindblowing: 6,
    votesFalse: 3,
    createdIn: 2024,
  },
];

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".fact-list");

factList.innerHTML = "";

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://ysmtabevalzlpfpvivgd.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzbXRhYmV2YWx6bHBmcHZpdmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MTg5NTksImV4cCI6MjA1Mzk5NDk1OX0.Nriqc5CYWLn0YNoFNQhFQiHTw7F_OOv60lxbwFB8gCU",
        autorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzbXRhYmV2YWx6bHBmcHZpdmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MTg5NTksImV4cCI6MjA1Mzk5NDk1OX0.Nriqc5CYWLn0YNoFNQhFQiHTw7F_OOv60lxbwFB8gCU",
      },
    }
  );
  const data = await res.json();
  createFactList(data);
}

const categories = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

function createFactList(dataArray) {
  const htmlArr = dataArray.map((fact) => {
    const category = categories.find((cat) => cat.name === fact.category);
    const categoryColor = category ? category.color : "#000000"; // Цвет по умолчанию, если категория не найдена

    return `<li class="fact">
      <p>
        ${fact.text}
        <a class="source" href="${fact.source}" target="_blank">(Source)</a>
      </p>
      <span class="tag" style="background-color: ${categoryColor}">
        ${fact.category}
      </span>
    </li>`;
  });

  console.log(htmlArr);

  const html = htmlArr.join("");
  factList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});
