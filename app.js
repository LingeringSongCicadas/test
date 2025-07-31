// 定义骑行方案数组，为每种方案添加描述
const events = [
    { name: '休闲骑', description: '轻松骑行，享受风景，保持舒适的节奏，适合日常放松' },
    { name: '间歇训练', description: '高强度冲刺与低强度恢复交替，提高心肺能力和爆发力' },
    { name: '休息调整', description: '今天不骑车，完全放松休息，为下次骑行储备能量' }
];

// 获取DOM元素
const generateBtn = document.getElementById('generateBtn');
const eventText = document.getElementById('eventText');
const eventDescription = document.getElementById('eventDescription');
const eventDisplay = document.getElementById('eventDisplay');
const titleElement = document.getElementById('mainTitle');

// 添加点击事件监听器
generateBtn.addEventListener('click', generateRandomEvent);

// 生成随机事件函数
function generateRandomEvent() {
    // 添加动画效果
    eventDisplay.classList.add('opacity-0', 'scale-95');
    eventDisplay.classList.remove('opacity-100', 'scale-100');
    
    // 为标题添加动画
    if (titleElement) {
        titleElement.classList.add('animate-pulse');
    }

    // 短暂延迟后更新内容
    setTimeout(() => {
        // 随机选择事件
        const randomIndex = Math.floor(Math.random() * events.length);
        const selectedEvent = events[randomIndex];

        // 更新显示文本
        eventText.textContent = selectedEvent.name;
        
        // 更新描述
        if (eventDescription) {
            eventDescription.textContent = selectedEvent.description;
        }

        // 根据事件类型添加不同的样式
        switch(selectedEvent.name) {
            case '休闲骑':
                eventDisplay.className = 'bg-blue-50 text-blue-800 rounded-xl p-8 text-center mb-8 min-h-[200px] flex flex-col items-center justify-center transition-all duration-500 shadow-md';
                break;
            case '间歇训练':
                eventDisplay.className = 'bg-orange-50 text-orange-800 rounded-xl p-8 text-center mb-8 min-h-[200px] flex flex-col items-center justify-center transition-all duration-500 shadow-md animate-pulse';
                break;
            case '休息调整':
                eventDisplay.className = 'bg-purple-50 text-purple-800 rounded-xl p-8 text-center mb-8 min-h-[200px] flex flex-col items-center justify-center transition-all duration-500 shadow-md';
                break;
        }

        // 恢复显示
        eventDisplay.classList.add('opacity-100', 'scale-100');
        eventDisplay.classList.remove('opacity-0', 'scale-95');
        
        // 移除标题动画
        if (titleElement) {
            setTimeout(() => {
                titleElement.classList.remove('animate-pulse');
            }, 1000);
        }
    }, 300);
}

// 初始化页面
window.addEventListener('load', () => {
    eventDisplay.classList.add('opacity-100', 'scale-100');
    eventDisplay.classList.remove('opacity-0', 'scale-95');
    
    // 为间歇训练添加特殊标识
    const intervalBadge = document.createElement('span');
    intervalBadge.className = 'inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full ml-2 animate-pulse';
    intervalBadge.textContent = '推荐';
    
    // 找到包含"间歇训练"的元素并添加标识
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        if (element.textContent.includes('间歇训练')) {
            element.appendChild(intervalBadge);
            return;
        }
    });
});