function editElement(element, match, replacer) {
  //   while (element.textContent.includes(match)) {
  //     element.textContent = element.textContent.replace(match, replacer);
  //   }

  // //regexp solution
  //   let pattern = new RegExp(match, "g");
  //   element.textContent = element.textContent.replace(pattern, replacer);

  //another regexp solution
  const content = element.textContent;
  const matcher = new RegExp(match, "g");
  const edited = content.replace(matcher, replacer);
  element.textContent = edited;
}
