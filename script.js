const profile = {
  name: "jayme",
  role: "内容策划",
  current: "正在搭自己的个人主页，并整理作品集、写作方向和未来想探索的 AI 应用。",
  strengths: "内容表达、AI 应用、知识整理，以及把复杂问题讲成人话。",
  contact: "第一版原型里还没有放真实联系方式。你可以先把邮箱、微信或社交主页补进页面，我会把联系区整理得更正式。"
};

const messages = document.querySelector("#messages");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const quickButtons = document.querySelectorAll("[data-question]");

function addMessage(text, type = "bot") {
  const item = document.createElement("div");
  item.className = `message ${type}`;
  const bubble = document.createElement("p");
  bubble.textContent = text;
  item.appendChild(bubble);
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

function getReply(question) {
  const normalized = question.trim().toLowerCase();

  if (!normalized) {
    return "可以直接问我：jayme 现在在做什么、有哪些作品、擅长什么，或者怎么联系。";
  }

  if (normalized.includes("做什么") || normalized.includes("最近") || normalized.includes("现在")) {
    return `${profile.name} ${profile.current}`;
  }

  if (normalized.includes("作品") || normalized.includes("案例") || normalized.includes("项目")) {
    return "jayme 正在整理作品集。当前可以先展示内容策划、写作、AI 应用探索和知识整理相关的项目，后续适合补充 3 到 5 个代表案例。";
  }

  if (normalized.includes("联系") || normalized.includes("邮箱") || normalized.includes("微信") || normalized.includes("合作")) {
    return profile.contact;
  }

  if (normalized.includes("擅长") || normalized.includes("方向") || normalized.includes("能力")) {
    return `jayme 关心的方向是${profile.strengths}这类能力适合内容策划、产品表达、知识库整理和 AI 工具落地场景。`;
  }

  if (normalized.includes("是谁") || normalized.includes("介绍") || normalized.includes("你是")) {
    return `jayme 是一名${profile.role}，正在学习用 AI 做产品。他的特点是喜欢把复杂问题讲成人话。`;
  }

  return "这个问题我会从 jayme 的公开简介出发回答：他是内容策划，关注内容表达、AI 应用和知识整理。你也可以换个问法，比如问“有哪些作品”或“适合怎么合作”。";
}

function ask(question) {
  const text = question.trim();
  if (!text) return;
  addMessage(text, "user");
  chatInput.value = "";

  window.setTimeout(() => {
    addMessage(getReply(text), "bot");
  }, 260);
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  ask(chatInput.value);
});

quickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ask(button.dataset.question);
  });
});
