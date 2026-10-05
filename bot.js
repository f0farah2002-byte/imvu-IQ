
const admin = require('firebase-admin');

// تهيئة Firebase Admin للوصول الآمن لقاعدة البيانات
admin.initializeApp({
  projectId: 'imvu-iq'
});

const db = admin.firestore();

console.log("🤖 يتم الآن تشغيل البوت ومراقبة التغييرات من لوحة التحكم...");

// الاستماع المباشر للتغييرات في قاعدة البيانات
db.collection('botSettings').doc('config')
  .onSnapshot(docSnapshot => {
    if (!docSnapshot.exists) {
      console.log('⚠️ لا توجد إعدادات محفوظة للبوت في قاعدة البيانات بعد.');
      return;
    }
    
    const settings = docSnapshot.data();
    
    if (settings.active) {
      console.log(`🟢 البوت نشط الآن! رسالة الترحيب الحالية: "${settings.welcomeMessage}"`);
      // هنا يتم تشغيل البوت للترحيب بالزوار في IMVU
      startImvuBot(settings.welcomeMessage);
    } else {
      console.log("🔴 تم إيقاف البوت من لوحة التحكم.");
      stopImvuBot();
    }
  }, err => {
    console.log(`❌ حدث خطأ أثناء الاتصال بـ Firestore: ${err}`);
  });

// دالة تشغيل البوت والربط مع غرف IMVU
function startImvuBot(welcomeMessage) {
    console.log(`[IMVU] يتم الآن إرسال رسالة الترحيب للغرفة: ${welcomeMessage}`);
    // هنا تضع كود مكتبة IMVU أو طلب الـ API الخاص بك للترحيب بالزوار
}

// دالة إيقاف البوت وفصل الاتصال
function stopImvuBot() {
    console.log("[IMVU] تم فصل البوت عن الغرفة بنجاح.");
}
