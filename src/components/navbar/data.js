export const navLinks = [
  { label: "Home", path: "/", icon: "fa-house-chimney" },
  {
    label: "Tests",
    path: "/tests",
    icon: "fa-list",
    dropdown: [
      { label: "All Tests", path: "/tests", icon: "fa-list-check" },
      { label: "Reading", path: "/tests/reading", icon: "fa-book" },
      { label: "Listening", path: "/tests/listening", icon: "fa-headphones" },
      { label: "Writing", path: "/tests/writing", icon: "fa-pen" },
      { label: "Speaking", path: "/tests/speaking", icon: "fa-microphone" },
    ],
  },
  { label: "Results", path: "/results", icon: "fa-chart-line" },
  { label: "About", path: "/about", icon: "fa-circle-info" },
];
