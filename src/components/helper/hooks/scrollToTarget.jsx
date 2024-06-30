export const scrollToTarget = (target, offset = 250) => {
  const element = document.getElementById(target);

  console.log("4");

  if (element !== null) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
