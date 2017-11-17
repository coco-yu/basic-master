1. header: 页面的头部或版块的头部
2. footer: 页面的头部或版块的底部
3. nav: 导航跟
4. hgroup: 标题组合
5. section: 页面版块或一个区块， 划分页面不同区域， 划分文章里不同的节
6. article: 表示一套结构完整且独立的内容部分
7. aside: 和主体相关的附属信息
8. figure: 图片视频媒体组合
9. figcaption: 对figure的内容进行说明
10. time: 时间
11. datalist: 选项列表 与input配合使用，定义input可能的值
12. details: 用于描述文档或文档某个部分的细节。该元素用于摘录引用等，应该与页面的主要内容区分开的的其他内容。
13. summary: details元素的标题
14. dialog: 对话
15. address: 定义文章或者页面作者的详细联系信息
16. mark: 需要标记的词或句子
17. keygen: 给表单添加一个公钥
18. progress: 进度条 
19. forms: 新增表单 email tel search range
    number 只能包含数字的输入框
    color 颜色选择器
    datetime 显示完整日期
    datetime-local 显示完整日期，不含时区
    time 显示时间，不含时区
    date 显示日期
    week 显示周
    month 显示月
20. autocomplete 是否自动保存用户输入值 autocomplete="on" autocomplete="off"
21. autofocus 获取焦点（一打开页面）

新增标签低版本浏览器兼容
ie不兼容h5语义化标签，可以先在页面创建相应的标签，然后再使用。

低版本浏览器支持新增便签的插件
html5shiv.js --- google


自定义标签
document.createElement('coco');


html5新的选择器
querySelector 
eg. document.querySelector('#div')    只能选择一组中的第一个元素

querySelectorAll
选择所有的符合条件的标签

getElementsByClassName
获取一组class 

属性
classList
add
remove
toggle 切换class方法


json新方法
JSON.parse() 把字符串转换成json 要求颜色的json字符串 {'name':'coco'}
JSON.stringify() json转换成字符串  返回严格的json  深度拷贝

eval 可以解析任何字符串变成js  不安全 植入病毒 网站收到攻击
JSON.parse() 只能解析json形式的字符串成json  安全性高

JSON.parse JSON.stringify 不兼容使用www.json.org 上面的json2.js可以兼容IE8以下的浏览器


自定义数据与js加载

dataset


延迟加载js
defer defer="defer" 整个页面在整个页面加载完之后onload执行之前再执行/ 
async async="async" 异步加载 同时执行

Labjs库

历史管理
    : 改变hash值来管理
history
    服务器下运行
    pushState三个参数： 数据 标题（都没实现） 地址（可选）
    popstate事件： 读取数据 event.state
    注意：网址是虚假的，需在服务器指定对应页面，不然刷新找不到页面。

触发历史管理
1. 通过跳转页面
2. hash
3. pushState



拖拽事件
拖拽元素事件：事件对象为被拖拽对象
dragstart 拖拽前触发
drag 拖拽前，拖拽结束之前，连续触发
dragend 拖拽结束触发

目标元素事件：事件对象为目标元素
dragenter:进入目标元素触发，相当于mouseover
dragover:进入目标，离开目标之间，连续触发
dragleave:离开目标元素触发，相当于mouseout
drop:在目标元素上释放鼠标触发


















