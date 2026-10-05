
const admin = require('firebase-admin');

// تهيئة Firebase Admin
admin.initializeApp({
  projectId: 'imvu-iq'
});

const db = admin.firestore();

console.log("🤖 البوت يعمل الآن ويراقب نظام الترحيب والموسيقى فَوْرياً...");

// الاستماع لإعدادات البوت وقائمة الأغاني
db.collection('botSettings').doc('config')
  .onSnapshot(docSnapshot => {
    if (!docSnapshot.exists) {
      console.log('⚠️ لا توجد إعدادات محفوظة للبوت بعد.');
      return;
    }
    
    const settings = docSnapshot.data();
    const isBotActive = settings.active;
    const welcomeMessage = settings.welcomeMessage;
    const playlist = settings.playlist || []; // مصفوفة تحتوي على أسماء أو روابط الأغاني

    if (isBotActive) {
      console.log(`🟢 البوت نشط! رسالة الترحيب: "${welcomeMessage}"`);
      startWelcomeSystem(welcomeMessage);
      
      if (playlist.length > 0) {
        console.log(`🎵 تم جلب قائمة التشغيل السحابية وتحديثها لـ ${playlist.length} أغنية.`);
        playMusic(playlist);
      } else {
        console.log("ℹ️ قائمة التشغيل فارغة حالياً. أضف بعض الأغاني من لوحة التحكم.");
      }
    } else {
      console.log("🔴 تم إيقاف البوت. تم إغلاق الترحيب والمشغل الموسيقي.");
      stopAllSystems();
    }
  }, err => {
    console.log(`❌ حدث خطأ في الاتصال: ${err}`);
  });

// دالة الترحيب بزوار IMVU
function startWelcomeSystem(message) {
    // كود إرسال الرسالة للغرفة
}

// دالة تشغيل قائمة الموسيقى
function playMusic(playlist) {
    // تشغيل الأغنية الأولى كمثال
    const activeSong = playlist[0];
    console.log(`🎶 يتم الآن تشغيل: ${activeSong}`);
    // هنا تضع كود مشغل الصوت لغرف IMVU
}

// دالة إيقاف الأنظمة بالكامل
function stopAllSystems() {
    // كود إيقاف تشغيل الموسيقى والترحيب
}
