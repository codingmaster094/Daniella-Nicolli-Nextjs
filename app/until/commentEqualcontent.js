export default function commentEqualcontent() {
  if (typeof window === "undefined") return;

  function setEqualHeight(elementWrapper, element) {
    let maxHeight = 0;
    document
      .querySelectorAll(`.${elementWrapper} .${element}`)
      .forEach((el) => {
        el.style.height = "auto";
        maxHeight = Math.max(maxHeight, el.clientHeight);
      });
    document
      .querySelectorAll(`.${elementWrapper} .${element}`)
      .forEach((el) => {
        el.style.height = `${maxHeight}px`;
      });
  }

  if (window.innerWidth >= 768) {
    setEqualHeight("equal-text", "heading");
    setEqualHeight("equal-text", "paragraph");
    setEqualHeight("equal-text1", "heading");
    setEqualHeight("equal-text1", "paragraph");
    setEqualHeight("equal-text2", "heading");
    setEqualHeight("equal-text2", "paragraph");
  }
}
