
const IMVU = require("imvu.js");

const imvu = new IMVU({
  outfit: [80, 191],
  seat: "-1 2"
});

imvu.on("ready", () => {
  console.log(`✅ البوت دخل الغرفة: ${imvu.display_name}`);
});

imvu.on("join", async (user) => {
  console.log(`👋 دخل: ${user.display_name}`);

  await imvu.say(
    `💜 أهلًا وسهلًا ${user.display_name}! نورت الغرفة 🎶`
  );
});

const token = process.env.IMVU_TOKEN;

if (!token) {
  console.error("❌ لم يتم العثور على IMVU_TOKEN");
  process.exit(1);
}

imvu.login(token);
