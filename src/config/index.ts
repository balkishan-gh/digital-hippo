export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Editor picks",
        href: "#",
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Bestsellers",
        href: "#",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const,
    // The as const syntax is a TypeScript feature that's used to specify that the type of the value should be treated as a literal type, not just a general string. This means that the value "icons" can only be "icons" and nothing else. It restricts the possible values to the exact string literal "icons".
    featured: [
      {
        name: "Favourite Icon Picks",
        href: "#",
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Bestsellers",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
