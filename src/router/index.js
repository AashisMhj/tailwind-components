import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/Home.page.vue';
// components
import ComponentHomePage from '@/pages/my-components/index.vue';
import Buttons from '@/pages/my-components/Buttons.vue'
import BreadCrumbs from '@/pages/my-components/BreadCrumbs.vue';
import Headers from '@/pages/my-components/Headers.vue';
import Cards from '@/pages/my-components/Cards.vue';
import Modals from '@/pages/my-components/Modals.vue';
import TextFields from '@/pages/my-components/TextFields.vue'
import NewsLetters from '@/pages/my-components/NewsLetters.vue';
import Carousel from '@/pages/my-components/Carousel.vue';
// layout demons
import LayoutHomePage from '@/pages/layout-demos/index.vue';
import GalleryFlexLayoutPage from '@/pages/layout-demos/GalleryFlex.page.vue'
import galleryGridLayoutDemo from '@/pages/layout-demos/GalleryGrid.page.vue';
import DescriptionListDemo from '@/pages/layout-demos/DescriptionList.page.vue';
// Animation
import AnimationPage from '@/pages/animations/index.vue';
import TransformationPage from '@/pages/animations/Transformation.vue';
import TransitionPage from '@/pages/animations/Transition.vue';
import TransformationEvents from '@/pages/animations/TransformationEvents.vue';
//
import Playground from '@/pages/Playground.vue';
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
      path: paths.buttons,
      name: "Buttons",
      component: Buttons
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
    {
      path: paths.modal,
      name: 'Modal',
      component: Modals
    },
    {
      path: paths.textFields,
      name: 'Text fields',
      component: TextFields
    },
    {
      path: paths.newsLetters,
      name: "News Letters",
      component: NewsLetters
    },
    {
      path: paths.carousel,
      name: "Carousel",
      component: Carousel
    },
    // 
    {
      path: paths.layoutsPage,
      name: "Layouts/ Sections",
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
    // animation
    {
      path: paths.animationPage,
      name: 'Animation Page',
      component: AnimationPage
    },
    {
      path: paths.transformation,
      name: 'Transformation Animation',
      component: TransformationPage
    },
    {
      path: paths.transition,
      name: 'Transition ',
      component: TransitionPage
    },
    {
      path: paths.transofrmationEvents,
      name: 'Transformation Events',
      component: TransformationEvents
    },
    // resource
    {
      path: paths.playGroundPage,
      name: 'Play ground',
      component: Playground,
    },
    {
      path: paths.resourcesPage,
      name: 'Resource',
      component: resourcePage
    }
  ]
})

export default router;