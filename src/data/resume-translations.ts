import { DATA } from "@/data/resume";
import type { Locale } from "@/i18n/locales";

type ResumeTranslation = {
  description: string;
  summary: string;
  education: Record<(typeof DATA.education)[number]["school"], { school: string; degree: string }>;
  projects: Record<(typeof DATA.projects)[number]["title"], { description: string; tags: readonly string[] }>;
  hobbies: Record<(typeof DATA.hobbies)[number]["title"], { title: string; description: string }>;
};

const translations: Record<Exclude<Locale, "en">, ResumeTranslation> = {
  "zh-Hans": {
    description: "记录我的经历、项目与动手实践的个人空间。",
    summary:
      "我是 Kyler，也叫林坤壕（LAM Kwan Ho）。我毕业于伯恩茅斯大学，取得软件工程荣誉理学士学位，也曾从事零售和建筑工地工作。\n\n我维护个人网站，处理电脑与网络设置，并使用 AI 工具辅助编写脚本和完成实用项目。在这里，我分享自己的经历，也希望结识不同领域的朋友。",
    education: {
      "Bournemouth University": { school: "伯恩茅斯大学", degree: "软件工程荣誉理学士" },
      "Bournemouth University International College": { school: "伯恩茅斯大学国际学院", degree: "计算机学科预科证书" },
      "Hong Kong Institute of Vocational Education": { school: "香港专业教育学院", degree: "基础课程文凭 — 资讯科技" },
    },
    projects: {
      "Mac Stay Awake": {
        description:
          "一款我在 AI 辅助下开发的 macOS 应用，让 Mac 在屏幕关闭时保持唤醒，继续执行后台任务。我确定使用场景，并借助 AI 工具完成实现、验证和迭代。",
        tags: ["AI 辅助开发", "macOS"],
      },
      "Quota Float": {
        description: "一个用于查看 Codex 使用限额的桌面小组件的个人定制分支。我调整了菜单面板选项，并改善了多语言支持。",
        tags: ["定制分支", "多语言支持"],
      },
      "Easy Compose": {
        description: "我个人整理的 Docker Compose 配置合集，将不同应用的配置集中在一个仓库中，方便参考与部署。",
        tags: ["个人合集", "Docker Compose"],
      },
    },
    hobbies: {
      Docker: { title: "Docker", description: "我喜欢使用 Docker 部署和探索容器化应用。" },
      "Home Networking": {
        title: "家庭网络",
        description: "路由器设置、IP 映射、Cloudflare DDNS 和 Nginx 反向代理，以及使用 Packet Tracer 进行网络模拟。",
      },
      "Aluminium Profile DIY": { title: "铝型材 DIY", description: "我喜欢使用铝型材动手制作。" },
    },
  },
  "zh-Hant": {
    description: "記錄我的經歷、項目與動手實踐的個人空間。",
    summary:
      "我是 Kyler，也叫林坤壕（LAM Kwan Ho）。我畢業於伯恩茅斯大學，取得軟件工程榮譽理學士學位，也曾從事零售和建築工地工作。\n\n我維護個人網站，處理電腦與網絡設定，並使用 AI 工具輔助編寫腳本和完成實用項目。在這裡，我分享自己的經歷，也希望結識不同領域的朋友。",
    education: {
      "Bournemouth University": { school: "伯恩茅斯大學", degree: "軟件工程榮譽理學士" },
      "Bournemouth University International College": { school: "伯恩茅斯大學國際學院", degree: "電腦學科預科證書" },
      "Hong Kong Institute of Vocational Education": { school: "香港專業教育學院", degree: "基礎課程文憑 — 資訊科技" },
    },
    projects: {
      "Mac Stay Awake": {
        description:
          "一款我在 AI 輔助下開發的 macOS 應用程式，讓 Mac 在螢幕關閉時保持喚醒，繼續執行背景工作。我確定使用情境，並借助 AI 工具完成實作、驗證和迭代。",
        tags: ["AI 輔助開發", "macOS"],
      },
      "Quota Float": {
        description: "一個用於查看 Codex 使用限額的桌面小工具的個人客製化分支。我調整了選單面板選項，並改善了多語言支援。",
        tags: ["客製化分支", "多語言支援"],
      },
      "Easy Compose": {
        description: "我個人整理的 Docker Compose 設定合集，將不同應用程式的設定集中在一個儲存庫中，方便參考與部署。",
        tags: ["個人合集", "Docker Compose"],
      },
    },
    hobbies: {
      Docker: { title: "Docker", description: "我喜歡使用 Docker 部署和探索容器化應用程式。" },
      "Home Networking": {
        title: "家居網絡",
        description: "路由器設定、IP 映射、Cloudflare DDNS 和 Nginx 反向代理，以及使用 Packet Tracer 進行網絡模擬。",
      },
      "Aluminium Profile DIY": { title: "鋁型材 DIY", description: "我喜歡使用鋁型材動手製作。" },
    },
  },
};

export function getLocalizedResume(locale: Locale) {
  if (locale === "en") return DATA;
  const copy = translations[locale];
  return {
    ...DATA,
    description: copy.description,
    summary: copy.summary,
    education: DATA.education.map((item) => ({ ...item, ...copy.education[item.school] })),
    projects: DATA.projects.map((item) => ({ ...item, ...copy.projects[item.title] })),
    hobbies: DATA.hobbies.map((item) => ({ ...item, ...copy.hobbies[item.title] })),
  };
}
