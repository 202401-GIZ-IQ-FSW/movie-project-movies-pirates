const navItems = [
  { id: 1, name: "Home", href: "#", isDropdown: false },
  {
    id: 2,
    name: "Movies",
    href: "/Movie?page=1&sort_by=popularity",
    isDropdown: true,
    dropdownItems: [
      { id: 22, name: "Top Rate", href: "/Movie?page=1&sort_by=popularity" },
      { id: 23, name: "Popular", href: "#" },
      { id: 24, name: "Latest", href: "#" },
      { id: 25, name: "Now Playing", href: "#" },
      { id: 26, name: "Up Coming", href: "#" },
    ],
  },
  { id: 3, name: "TV Shows", href: "#", isDropdown: false },
  {
    id: 4,
    name: "Genre",
    href: "#",
    isDropdown: true,
    dropdownItems: [
      { id: 44, name: "#", href: "#" },
      { id: 45, name: "#", href: "#" },
      { id: 46, name: "#", href: "#" },
      { id: 47, name: "#", href: "#" },
      { id: 48, name: "#", href: "#" },
    ],
  },
  { id: 5, name: "Actors", href: "/Actors", isDropdown: false },
]
export default navItems
