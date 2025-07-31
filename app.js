// 定义事件数组
const events = ['休闲骑', '间歇期', '躺平'];

// 获取DOM元素
const generateBtn = document.getElementById('generateBtn');
const eventText = document.getElementById('eventText');
const eventDisplay = document.getElementById('eventDisplay');

// 添加点击事件监听器
generateBtn.addEventListener('click', generateRandomEvent);

// 生成随机事件函数
function generateRandomEvent() {
    // 添加动画效果
    eventDisplay.classList.add('opacity-0');
    eventDisplay.classList.remove('opacity-100');

    // 短暂延迟后更新内容
    setTimeout(() => {
        // 随机选择事件
        const randomIndex = Math.floor(Math.random() * events.length);
        const selectedEvent = events[randomIndex];

        // 更新显示文本
        eventText.textContent = selectedEvent;

        // 根据事件类型添加不同的样式
        switch(selectedEvent) {
            case '休闲骑':
                eventDisplay.className = 'bg-blue-50 text-blue-800 rounded-xl p-8 text-center mb-8 min-h-[180px] flex items-center justify-center transition-all duration-500';
                break;
            case '间歇期':
                eventDisplay.className = 'bg-green-50 text-green-800 rounded-xl p-8 text-center mb-8 min-h-[180px] flex items-center justify-center transition-all duration-500';
                break;
            case '躺平':
                eventDisplay.className = 'bg-purple-50 text-purple-800 rounded-xl p-8 text-center mb-8 min-h-[180px] flex items-center justify-center transition-all duration-500';
                break;
        }

        // 恢复显示
        eventDisplay.classList.add('opacity-100');
        eventDisplay.classList.remove('opacity-0');
    }, 300);
}

// 初始化页面
window.addEventListener('load', () => {
    eventDisplay.classList.add('opacity-100');
    eventDisplay.classList.remove('opacity-0');
});