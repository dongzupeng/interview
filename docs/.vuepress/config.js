module.exports = {
    title: '我的博客',
    theme: 'reco',
    base: '/interview',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        
        subSidebar: 'auto',
        nav: [
            { text: "首页", link: "/" },
            {
                text: "小垃圾 的博客",
                logo: "../assets/img/logo.jpg",
                items: [
                    { text: "掘金", link: "https://juejin.cn/user/2374587965252189" },
                    { text: "Github", link: "https://github.com/dongzupeng" },
                    { text: "Gitee", link: "https://gitee.com/dong-zupeng" },
                    { text: "语雀", link:"https://www.yuque.com/dongzupeng/whup0q"}
                ]
            }
        ],
        sidebar: [
            {
                title: "欢迎学习",
                path: '/',
                collapsable: false,  // 是否折叠
                children: [{ title: "博客简介", path: "/" }],
            },
            {
                title: "基础篇",
                collapsable: true,
                children: [
                    { title: "html", path: "./basicknowledge/html.md" },
                    { title: "css", path: "./basicknowledge/css.md" },
                    { title: "JavaScript", path: "./basicknowledge/JavaScript.md" },
                ]
            }
        ]
    }
}