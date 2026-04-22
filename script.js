// عرض التاريخ الحالي
document.getElementById('date').textContent = 'اليوم: ' + new Date().toLocaleDateString('ar-SA');

// دالة للترحيب
function sayHello() {
    const messages = [
        'مرحباً! 👋',
        'كيفك؟ 😊',
        'أهلاً بك في موقعي! 🎉',
        'GitHub رائع جداً! 🚀'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMessage;
}