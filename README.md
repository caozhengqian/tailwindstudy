
# tailwindCss
## 安装插件
1. Tailwind formatter
2.  Tailwind CSS
## mx margin左右  my margin上下
## text-[30px],bg-[#122831],before:conent-['jsm]
## sm (width >= 40rem /* 640px  )    max-sm(width < 40rem) 
    自定义 max-[600px]:bg-sky-300   
    平滑过度 text-[min(10vw,120px)]
## 移动优先算法
## 黑暗模式 bg-white dark:bg-black
## 自定义@utility  base components
```css
@utility flex-center {
  @apply flex justify-center items-center text-green-500
}
@layer base {
  h1{
    @apply text-2xl text-blue-500 flex-center
  }
}
@layer components{
  .card{
    @apply w-20 h-20 bg-yellow-500 flex-center
  }
}
```
## 伪类，伪元素
```html
    <p className="selection:bg-green-500 selection:text-red-500">
        这是一个段落，你可以选中任意内容，查看它们的背景颜色
    </p>
```
## tailwind方法
open：打开手风琴
## tailwind交互
caret-pink-500:input中的鼠标光标红色
