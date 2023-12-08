const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/MarqueeHorizontal.vue") },
      {
        path: "/:delay",
        component: () => import("src/pages/MarqueeHorizontal.vue"),
      },
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
      },
      {
        path: "scores",
        component: () => import("src/pages/MarqueeScores.vue"),
      },
      {
        path: "scores/:delay",
        component: () => import("src/pages/MarqueeScores.vue"),
      },
    ],
  },

  {
    path: "/betting",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/SportsBetting.vue") },
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
