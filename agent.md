# web-jayme Agent Notes

## 工作约定

- 修改 JavaScript 文件后必须运行 `npm test`。
- 安装依赖时优先使用 `pnpm`。
- 安装新的生产依赖前先询问用户确认。
- PowerShell 如无法执行激活脚本，可先运行：

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
```

## 项目概览

- 后端框架：Django 6。
- Python 虚拟环境：`.venv`。
- Django 项目包：`web_jayme`。
- Django 应用：`app`。
- 数据库：SQLite，文件为 `db.sqlite3`。
- 后台管理：Django admin + `django-simpleui`。
- 后台语言：简体中文，`LANGUAGE_CODE = 'zh-hans'`。
- 后台时区：`Asia/Shanghai`。
- 前台页面：React + Vite，源码在 `frontend/`。
- Django `/` 路由渲染 React 构建后的模板。
- Django `/admin/` 路由保留后台管理。

## 常用命令

在项目根目录激活 Python 虚拟环境：

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
. .\.venv\Scripts\Activate.ps1
```

运行 Django 检查：

```powershell
python .\manage.py check
```

启动 Django 开发服务器：

```powershell
python .\manage.py runserver 127.0.0.1:8000
```

运行数据库迁移：

```powershell
python .\manage.py migrate
```

安装前端依赖：

```powershell
cd frontend
corepack pnpm install
```

运行前端测试：

```powershell
cd frontend
npm.cmd test
```

构建 React 前台并复制到 Django：

```powershell
cd frontend
npm.cmd run build
```

## 前端集成方式

React 源码位于：

- `frontend/src/main.jsx`
- `frontend/src/styles.css`

Vite 构建配置位于：

- `frontend/vite.config.js`

构建命令会先生成 `frontend/dist`，再由：

- `frontend/scripts/copy-build.mjs`

复制到 Django 可识别的位置：

- `app/templates/frontend/index.html`
- `app/static/frontend/assets/`

Django 入口视图：

- `app/views.py`

Django 路由：

- `web_jayme/urls.py`

## 后台账号

当前已创建超级管理员：

- 用户名：`jayme`
- 邮箱：`mejay1635@gmail.com`

不要在公开文档或提交说明中继续扩散真实密码。
