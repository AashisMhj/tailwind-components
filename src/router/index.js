import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/Home.page.vue';
// components
import ComponentHomePage from '@/pages/my-components/index.vue';
import BreadCrumbs from '@/pages/my-components/BreadCrumbs.vue';
import Headers from '@/pages/my-components/Headers.vue';
import Cards from '@/pages/my-components/Cards.vue';
// layout demons
import LayoutHomePage from '@/pages/layout-demos/index.vue';
import GalleryFlexLayoutPage from '@/pages/layout-demos/GalleryFlex.page.vue'
import galleryGridLayoutDemo from '@/pages/layout-demos/GalleryGrid.page.vue';
import DescriptionListDemo from '@/pages/layout-demos/DescriptionList.page.vue';
//
import PageHomePage from '@/pages/landing-pages/index.vue';
import Page1 from '@/pages/landing-pages/page1.page.vue';
//
import resourcePage from '@/pages/Resource.page.vue';
import paths from './paths';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: paths.homePath,
      name: 'home',
      component: HomePage
    },
    // 
    {
      path: paths.componentsPage,
      name: "Components",
      component: ComponentHomePage
    },
    {
      path: paths.breadCrumb,
      name: 'BreadCrumb',
      component: BreadCrumbs
    },
    {
      path: paths.headers,
      name: 'Headers',
      component: Headers
    },
    {
      path: paths.cards,
      name: 'Cards',
      component: Cards
    },
    // 
    {
      path: paths.layoutsPage,
      name: "Layouts",
      component: LayoutHomePage
    },
    {
      path: paths.galleryLayoutDemo,
      name: 'Gallery Demo Flex',
      component: GalleryFlexLayoutPage
    },
    {
      path: paths.galleryGridLayoutDemo,
      name: 'Gallery Demo Grid',
      component: galleryGridLayoutDemo
    },
    {
      path: paths.descriptionListDemo,
      name: 'Description List Demo',
      component: DescriptionListDemo
    },
    // 
    {
      path: paths.pages,
      name: "Landing Pages",
      component: PageHomePage
    },
    {
      path: paths.page1,
      name: 'Page 1',
      component: Page1
    },
    // resource
    {
      path: paths.resourcesPage,
      name: 'Resource',
      component: resourcePage
    }
  ]
})

export default router;