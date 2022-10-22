module.exports = {
    title: '我的博客',
    theme: 'reco',
    base: '/interview/',
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
                logo: "./public/favicon.ico",
                items: [
                    { text: "掘金", link: "https://juejin.cn/user/2374587965252189" },
                    { text: "Github", link: "https://github.com/dongzupeng" },
                    { text: "Gitee", link: "https://gitee.com/dong-zupeng" },
                    { text: "语雀", link: "https://www.yuque.com/dongzupeng/whup0q" }
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
                    {
                        title: "HTML",
                        collapsable: true,
                        children:[
                            {
                                title:"HTML媒体标签之video",
                                path:'./basicknowledge/HTML/mediaLabel-video.md'
                            },
                            {
                                title:"HTML媒体标签之audio",
                                path:'./basicknowledge/HTML/mediaLabel-audio.md'
                            },
                            {
                                title:"HTML媒体标签之track",
                                path:'./basicknowledge/HTML/mediaLabel-track.md'
                            },
                            {
                                title:"HTML媒体标签之source",
                                path:'./basicknowledge/HTML/mediaLabel-source.md'
                            },
                            {
                                title:"HTML媒体标签之embed",
                                path:'./basicknowledge/HTML/mediaLabel-embed.md'
                            },
                            {
                                title:"HTML媒体标签之object param",
                                path:'./basicknowledge/HTML/mediaLabel-object-param.md'
                            },
                        ]
                    },
                    {
                        title: "css",
                        path: "./basicknowledge/css.md"
                    },
                    {
                        title: "JavaScript",
                        collapsable: true,
                        children: [
                            {
                                title: '数据类型',
                                path: './basicknowledge/JavaScript/dataType.md'
                            },
                            {
                                title: 'instanceof',
                                path: './basicknowledge/JavaScript/instanceof.md'
                            },
                            {
                                title: '常用技巧',
                                path: './basicknowledge/JavaScript/commonSkills.md'
                            }
                        ]
                    },
                ]
            }
        ]
    }
}