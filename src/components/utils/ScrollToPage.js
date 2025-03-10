export const scrollPageTo = (target) => {
  const section = document.getElementById(target);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
