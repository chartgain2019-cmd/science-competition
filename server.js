const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware لخدمة الملفات الثابتة
app.use(express.static(__dirname));

// جميع الطلبات ترجع index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// تشغيل الخادم
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ الخادم يعمل على المنفذ: ${PORT}`);
  console.log(`🌐 الرابط المحلي: http://localhost:${PORT}`);
  console.log(`📁 المسار الحالي: ${__dirname}`);
  
  // للحفاظ على الخدمة نشطة (للتطبيقات المجانية)
  setInterval(() => {
    console.log('🔄 الخدمة نشطة...');
  }, 600000); // كل 10 دقائق
});