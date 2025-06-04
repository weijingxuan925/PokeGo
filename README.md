## Getting Started

First, run the development server:


```bash
npm install
```

```bash
npm run dev 
```

## 目录结构（组件架构图）

```markdown
components/
├── All/                        # 归档型分组，存放一些聚合性或历史性组件
│   ├── About/                  # 关于我们主组件
│   │   ├── About.tsx           # 关于我们页面主组件
│   │   └── About.css           # 关于我们页面样式
│   ├── AboutBanner/            # 关于我们页面顶部横幅
│   │   ├── AboutBanner.tsx
│   │   └── AboutBanner.css
│   └── AboutContent/           # 关于我们页面内容区
│       └── AboutContent.tsx
├── Navbar/                     # 顶部导航栏相关组件
│   ├── Navbar.tsx              # 主导航栏组件
│   ├── Navbar.css              # 主导航栏样式
│   ├── NavbarList/             # 菜单列表子组件
│   ├── NavbarReserve/          # 预定按钮子组件
│   ├── NavbarInfo/             # 联系信息子组件
│   ├── NavbarItem/             # 单个菜单项
│   ├── NavbarOpen/             # 打开菜单按钮
│   └── NavbarClose/            # 关闭菜单按钮
├── Footer/                     # 页脚相关组件
│   ├── Footer.tsx              # 主页脚组件
│   ├── Footer.css              # 主页脚样式
│   ├── FooterBrand/            # 品牌信息
│   ├── FooterTop/              # 页脚顶部
│   ├── FooterList/             # 链接列表
│   ├── FooterLink/             # 单个链接
│   └── FooterBottom/           # 页脚底部
├── Menu/                       # 菜单相关组件
│   ├── Menu.tsx                # 菜单主组件
│   ├── Menu.css                # 菜单样式
│   ├── MenuCard/               # 单个菜单卡片
│   └── MenuList/               # 菜单列表
├── Service/                    # 服务相关组件
│   ├── Service.tsx             # 服务主组件
│   ├── Service.css             # 服务样式
│   ├── ServiceCard/            # 单项服务卡片
│   └── ServiceList/            # 服务列表
├── Hero/                       # 首页大图/轮播相关组件
│   ├── Hero.tsx                # Hero 主组件
│   ├── Hero.css                # Hero 样式
│   ├── HeroSlider/             # 轮播图
│   ├── SliderItem/             # 轮播单项
│   └── SliderButton/           # 轮播按钮
├── Feature/                    # 特色功能区
│   ├── Feature.tsx             # 特色主组件
│   ├── Feature.css             # 特色样式
│   ├── FeatureList/            # 特色列表
│   └── FeatureItem/            # 单项特色
├── Event/                      # 活动相关组件
│   ├── Event.tsx               # 活动主组件
│   ├── Event.css               # 活动样式
│   ├── EventList/              # 活动列表
│   └── EventCard/              # 单个活动卡片
├── SpecialDish/                # 招牌菜相关组件
│   ├── SpecialDish.tsx         # 招牌菜主组件
│   ├── SpecialDish.css         # 招牌菜样式
│   └── SpecialDishContent/     # 招牌菜内容
├── Testimonials/               # 用户评价
│   ├── Testimonials.tsx
│   └── Testimonials.css
├── Reservation/                # 预定相关组件
│   ├── Reservation.tsx         # 预定主组件
│   ├── Reservation.css         # 预定样式
│   ├── ReservationForm/        # 预定表单
│   ├── ReservationFormLeft/    # 表单左侧
│   ├── ReservationFormRight/   # 表单右侧
│   ├── ReservationFormRightSchedule/   # 右侧时间表
│   └── ReservationFormIconWrapper/     # 图标包裹
```

---
