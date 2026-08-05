// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
  "ffzy": {
    "api": "https://cj.ffzyapi.com/api.php/provide/vod",
    "name": "非凡资源",
    "adult": false
  },
  "liangzi": {
    "api": "https://cj.lziapi.com/api.php/provide/vod",
    "name": "量子资源",
    "adult": false
  },
  "suoni": {
    "api": "https://suoniapi.com/api.php/provide/vod",
    "name": "索尼资源",
    "adult": false
  },
  "yinghua": {
    "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
    "name": "樱花资源",
    "adult": false
  },
  "heimuer": {
    "api": "https://json.heimuer.tv/api.php/provide/vod",
    "name": "黑木耳资源",
    "adult": true
  },
  "baofeng": {
    "api": "https://bfzyapi.com/api.php/provide/vod",
    "name": "暴风资源",
    "adult": false
  },
  "wujin": {
    "api": "https://api.wujinapi.com/api.php/provide/vod",
    "name": "无尽资源",
    "adult": false
  },
  "apibd": {
    "api": "https://api.apibdzy.com/api.php/provide/vod",
    "name": "百度资源",
    "adult": false
  },
  "kuaifan": {
    "api": "https://api.kuaifan.tv/api.php/provide/vod",
    "name": "快番资源",
    "adult": false
  },
  "leshi": {
    "api": "https://leshiapi.com/api.php/provide/vod",
    "name": "乐视资源",
    "adult": false
  },
  "guangsu": {
    "api": "https://api.guangsuapi.com/api.php/provide/vod",
    "name": "光速资源",
    "adult": false
  },
  "tiankong": {
    "api": "https://api.tiankongapi.com/api.php/provide/vod",
    "name": "天空资源",
    "adult": false
  },
  "fox": {
    "api": "https://api.foxzyapi.com/api.php/provide/vod",
    "name": "狐狸资源",
    "adult": false
  },
  "shuangyu": {
    "api": "https://api.sszyapi.com/api.php/provide/vod",
    "name": "双鱼资源",
    "adult": false
  },
  "yikan": {
    "api": "https://api.yikanapi.com/api.php/provide/vod",
    "name": "易看资源",
    "adult": false
  },
  "zuid": {
    "api": "https://api.zuidapi.com/api.php/provide/vod",
    "name": "最大资源",
    "adult": false
  },
  "ikun": {
    "api": "https://ikunzyapi.com/api.php/provide/vod",
    "name": "爱坤资源",
    "adult": false
  },
  "hongniu": {
    "api": "https://www.hongniuzy2.com/api.php/provide/vod",
    "name": "红牛资源",
    "adult": false
  },
  "kuaibo": {
    "api": "https://www.kuaibozy.com/api.php/provide/vod",
    "name": "快播资源",
    "adult": false
  },
  "kudian": {
    "api": "https://kudianzy.com/api.php/provide/vod",
    "name": "酷点资源",
    "adult": false
  },
  "haiwaikan": {
    "api": "https://haiwaikan.com/api.php/provide/vod",
    "name": "海外看资源",
    "adult": false
  },
  "lehootv": {
    "api": "https://lehootv.com/api.php/provide/vod",
    "name": "乐活资源",
    "adult": false
  },
  "sanliuling": {
    "api": "https://360zy.com/api.php/provide/vod",
    "name": "360资源",
    "adult": false
  },
  "wolong": {
    "api": "https://collect.wolongzyw.com/api.php/provide/vod",
    "name": "卧龙资源",
    "adult": false
  },
  "qidian": {
    "api": "https://a.7dyu.cn/api.php/provide/vod",
    "name": "七电影资源",
    "adult": false
  },
  "lovedan": {
    "api": "https://lovedan.net/api.php/provide/vod",
    "name": "流浪资源",
    "adult": false
  },
  "wowo": {
    "api": "https://api.wwzy.tv/api.php/provide/vod",
    "name": "旺旺资源",
    "adult": false
  },
  "heihei": {
    "api": "https://hhzyapi.com/api.php/provide/vod",
    "name": "哈哈资源",
    "adult": false
  },
  "modu": {
    "api": "https://caiji.moduapi.cc/api.php/provide/vod",
    "name": "魔都资源",
    "adult": false
  },
  "uku": {
    "api": "https://api.ukuapi.com/api.php/provide/vod",
    "name": "U酷资源",
    "adult": false
  },
  "niuniu": {
    "api": "https://api.niuniuzy.me/api.php/provide/vod",
    "name": "牛牛资源",
    "adult": false
  }
}
;

const HOME_RECOMMEND_CONFIG = {
    mode: 'cms',
    sources: ['ffzy', 'liangzi', 'suoni'],
    categories: [
        { id: 'all', label: '全部' },
        { id: 'movie', label: '电影', typeId: '1' },
        { id: 'tv', label: '电视剧', typeId: '2' },
        { id: 'variety', label: '综艺', typeId: '3' },
        { id: 'anime', label: '动漫', typeId: '4' },
        { id: 'action', label: '动作片', typeNames: ['动作片'] },
        { id: 'comedy', label: '喜剧片', typeNames: ['喜剧片'] },
        { id: 'romance', label: '爱情片', typeNames: ['爱情片'] },
        { id: 'science-fiction', label: '科幻片', typeNames: ['科幻片'] },
        { id: 'horror', label: '恐怖片', typeNames: ['恐怖片'] },
        { id: 'drama', label: '剧情片', typeNames: ['剧情片'] },
        { id: 'war', label: '战争片', typeNames: ['战争片'] },
        { id: 'documentary', label: '纪录片', typeNames: ['纪录片', '记录片'] },
        { id: 'domestic-tv', label: '国产剧', typeNames: ['国产剧'] },
        { id: 'europe-tv', label: '欧美剧', typeNames: ['欧美剧'] },
        { id: 'korean-tv', label: '韩剧', typeNames: ['韩国剧', '韩剧'] },
        { id: 'japanese-tv', label: '日剧', typeNames: ['日本剧', '日剧'] },
        { id: 'hong-kong-tv', label: '港剧', typeNames: ['香港剧', '港剧'] },
        { id: 'taiwan-tv', label: '台剧', typeNames: ['台湾剧', '台剧'] },
        { id: 'domestic-variety', label: '大陆综艺', typeNames: ['大陆综艺', '国产综艺'] },
        { id: 'japan-korea-variety', label: '日韩综艺', typeNames: ['日韩综艺', '日本综艺', '韩国综艺'] },
        { id: 'domestic-anime', label: '国产动漫', typeNames: ['国产动漫'] },
        { id: 'japan-korea-anime', label: '日韩动漫', typeNames: ['日韩动漫', '日本动漫'] }
    ],
    timeout: 8000,
    fallbackToDouban: true
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 1000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 1, // 最大获取页数
        timeout: 8000,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
