export const scrollEvent = () => {
    window.addEventListener('scroll', function () {
        var component = document.querySelector('.musicPlay');
        var viewportHeight = window.innerHeight;
        var componentHeight = component.offsetHeight;
        var initialBottom = 1; // 组件距离页面底部的初始距离（单位：rem）  
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var documentHeight = document.documentElement.scrollHeight;

        // 当用户滚动到接近页面底部时，恢复组件到初始位置  
        if (scrollTop + viewportHeight >= documentHeight - componentHeight - initialBottom * 16) { // 假设1rem等于16px  
            component.style.position = 'relative';
            component.style.bottom = initialBottom + 'rem';
        } else {
            // 否则，让组件保持在当前可视区域的底部  
            component.style.position = 'fixed';
            component.style.bottom = initialBottom + 'rem';
        }

    });
}