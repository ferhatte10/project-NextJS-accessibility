export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Redeemers",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Login",
      href: "/login",
    },
    {
      title: "Tips",
      href: "/",
      subItems: [
        {
          title: "Quit Smoking",
          href: "/dashboard/quit-smoking",
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
