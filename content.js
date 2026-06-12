// 隐藏导航栏、标题栏、侧边栏的选择器
const SELECTORS_TO_HIDE = [
  'header',                    // 隐藏头部
  'nav',                       // 隐藏导航栏
  '.navbar',                   // 隐藏导航栏类
  '.top-nav',                  // 隐藏顶部导航
  '.sidebar',                  // 隐藏侧边栏
  '.side-bar',                 // 隐藏侧边栏变体
  '.left-sidebar',             // 隐藏左侧边栏
  '.right-sidebar',            // 隐藏右侧边栏
  '#sidebar',                  // 隐藏侧边栏 ID
  '#left-sidebar',             // 隐藏左侧边栏 ID
  '.advertisement',            // 隐藏广告
  '.ad-box',                   // 隐藏广告盒子
  '.top-banner'                // 隐藏顶部横幅
];

/**
 * 隐藏指定元素
 */
function hideElements() {
  SELECTORS_TO_HIDE.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.style.display = 'none';
    });
  });
}

/**
 * 调整主容器宽度 (隐藏侧边栏后扩展)
 */
function adjustMainContent() {
  const mainContentSelectors = [
    '.main-content',
    '.content',
    '.container',
    '.page-content',
    'main'
  ];

  mainContentSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.style.width = '100%';
      el.style.marginLeft = '0';
      el.style.marginRight = '0';
    });
  });
}

/**
 * 透明化和缩小图片
 */
function processImages() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // 透明化：设置透明度为50%
    img.style.opacity = '0.5';
    
    // 缩小：设置最大宽度和高度
    img.style.maxWidth = '60%';
    img.style.maxHeight = '60%';
    img.style.width = 'auto';
    img.style.height = 'auto';
  });
}

/**
 * 使用 MutationObserver 监听 DOM 变化
 * 确保动态加载的内容也被处理
 */
function observeDOM() {
  const observer = new MutationObserver((mutations) => {
    let shouldProcess = false;
    
    mutations.forEach(mutation => {
      if (mutation.type === 'childList' || mutation.type === 'attributes') {
        shouldProcess = true;
      }
    });

    if (shouldProcess) {
      hideElements();
      adjustMainContent();
      processImages();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'class', 'src']
  });
}

/**
 * 主初始化函数
 */
function init() {
  // 立即执行一次
  hideElements();
  adjustMainContent();
  processImages();
  
  // 监听后续 DOM 变化
  observeDOM();
  
  // 定期检查（备用方案）
  setInterval(() => {
    hideElements();
    processImages();
  }, 2000);
}

// 页面加载时执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
