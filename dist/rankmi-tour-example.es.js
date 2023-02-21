function c(o) {
  document.querySelector(o).textContent = "Lol";
}
class d {
  constructor(i, h, s) {
    this.id = i, this.title = h, this.content = s;
  }
}
class a {
  constructor(i) {
    this.finish = !1, this.pictureInside = !1;
    for (const t of i)
      if (t instanceof d) {
        if (!document.getElementById(t.id))
          throw new Error("Please ensure all steps have valid target id");
      } else
        throw new Error("Please use Step Class to initilize the steps");
    this.index = 0, this.stepList = i, this.currentStep = i.at(this.index), this.createElement = (t, e, n) => {
      const r = document.createElement(t);
      return r.setAttribute(e, n), r;
    }, this.appendChild = (t, ...e) => {
      for (const n of e)
        t.appendChild(n);
      return t;
    };
    const h = function(t) {
      let e = 0, n = 0, r = 0, l = 0;
      r = t.getBoundingClientRect().height, l = t.getBoundingClientRect().width;
      do
        e += t.offsetTop || 0, n += t.offsetLeft || 0, t = t.offsetParent;
      while (t);
      return {
        top: e,
        left: n,
        height: r,
        width: l
      };
    };
    this.render = async () => {
      this.target = document.getElementById(this.currentStep.id), this.header.innerHTML = this.currentStep.title, this.content.innerHTML = this.currentStep.content, this.nextBtn.textContent = this.index + 2 > this.stepList.length ? "Done" : "Next", this.prevBtn.textContent = this.index - 1 < 0 ? "End" : "Back";
      const t = h(this.target), e = h(this.tourView);
      t.top + e.height + 10 > window.innerHeight ? this.tourView.style.top = `${t.top - e.height - 10}px` : this.tourView.style.top = `${t.top + t.height + 10}px`, t.left + e.width + 10 > window.innerWidth ? (this.tourView.style.left = `${t.left - e.width - 10}px`, this.tourView.style.top = `${t.top}px`) : this.tourView.style.left = `${t.left}px`, this.target.classList.add("tiny-tour-target");
    }, this.getNextStep = () => {
      if (this.clean(), this.index + 2 > this.stepList.length) {
        s.unobserve(this.tourView), this.finish = !0, this.tourView.style.display = "none";
        return;
      }
      this.index++, this.currentStep = i.at(this.index), this.render();
    }, this.getPrevStep = () => {
      if (this.clean(), this.index - 1 < 0) {
        s.unobserve(this.tourView), this.finish = !0, this.tourView.style.display = "none";
        return;
      }
      this.index--, this.currentStep = i.at(this.index), this.render();
    }, this.clean = () => {
      this.nextBtn.textContent = this.index + 2 > this.stepList.length ? "Done" : "Next", this.prevBtn.textContent = this.index - 1 < 0 ? "End" : "Back", this.target.classList.remove("tiny-tour-target");
    }, this.tourView = this.createElement("div", "id", "tiny-tour-box"), this.closeBtn = this.createElement("button", "id", "tiny-tour-close"), this.header = this.createElement("div", "id", "tiny-tour-header"), this.content = this.createElement("div", "id", "tiny-tour-content"), this.btnContainer = this.createElement("div", "class", "tiny-tour-buttons"), this.prevBtn = this.createElement("button", "class", "tiny-tour-prev"), this.nextBtn = this.createElement("button", "class", "tiny-tour-next"), this.tourView.style.transition = "top 0.2s, left 0.2s", this.closeBtn.addEventListener("click", () => {
      s.unobserve(this.tourView), this.target.classList.remove("tiny-tour-target"), this.finish = !0, this.tourView.style.display = "none";
    }), this.appendChild(
      this.tourView,
      this.closeBtn,
      this.header,
      this.content,
      this.appendChild(this.btnContainer, this.prevBtn, this.nextBtn)
    ), document.body.appendChild(this.tourView), this.prevBtn.addEventListener("click", this.getPrevStep), this.nextBtn.addEventListener("click", this.getNextStep);
    const s = new ResizeObserver((t) => {
      this.render();
    });
    s.observe(this.tourView), window.onresize = () => {
      this.finish || (this.render(), this.scrollIntoView());
    }, this.scrollIntoView = () => {
      this.tourView.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }, this.tourView.ontransitionend = () => {
      this.scrollIntoView();
    }, this.render(), this.scrollIntoView();
  }
}
export {
  d as Step,
  a as TinyTour,
  c as default
};
