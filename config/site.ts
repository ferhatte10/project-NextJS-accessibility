export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Redeemers",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Tips",
      href: "/",
      subItems: [
        {
          title: "SubItem 1",
          href: "/subitem-1",
        },
        {
          title: "SubItem 2",
          href: "/subitem-2",
        },
        // Add more subitems as needed
      ],
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
