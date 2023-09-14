const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/MarqueeHorizontal.vue") },
      { path: "/:delay", component: () => import("src/pages/MarqueeHorizontal.vue") },
      {
        path: "carousel/:delay",
        component: () => import("src/pages/CarouselView.vue"),
      },
      {
        path: "vertical",
        component: () => import("src/pages/MarqueeVertical.vue"),
      },
      {
        path: "vertical/:delay",
        component: () => import("src/pages/MarqueeVertical.vue"),
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
