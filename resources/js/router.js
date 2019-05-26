import VueRouter from 'vue-router'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import AdminDashboard from './pages/admin/Dashboard'
import CreateCategory from './pages/admin/CreateCategory'
import CategoryList from './pages/admin/CategoryList'
import ArticleList from './pages/admin/ArticleList'
import CreateArticle from './pages/admin/CreateArticle'
import ShowArticle from './pages/ShowArticle'
import CreateComment from './pages/CreateComment'

// Routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
  },
  {
    path: '/article/:id',
    name: 'article.show',
    component: ShowArticle,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/article/:article_id/comment/create',
    name: 'comment.create',
    component: CreateComment,
    meta: {
      auth: undefined
    }
  },
  // ADMIN ROUTES
  {
    path: '/admin',
    name: 'admin.dashboard',
    component: AdminDashboard,
    meta: {
      auth: true
    }
  },
  {
    path: '/admin/category',
    name: 'admin.category',
    component: CategoryList,
    meta: {
      auth: true
    }
  },
  {
    path: '/admin/category/create',
    name: 'admin.category.create',
    component: CreateCategory,
    meta: {
      auth: true
    }
  },
  {
    path: '/admin/article',
    name: 'admin.article',
    component: ArticleList,
    meta: {
      auth: true
    }
  },
  {
    path: '/admin/article/create',
    name: 'admin.article.create',
    component: CreateArticle,
    meta: {
      auth: true
    }
  },
]

const router = new VueRouter({
  history: true,
  mode: 'history',
  routes,
})

export default router