const w = window;
const d = document;

export default function responsiveMedia(id, mq, desktop, mobile) {
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {

      d.getElementById(id).innerHTML = desktop;

    } else {
      d.getElementById(id).innerHTML = mobile;
    }
    console.log(e.matches)
  };

  
  breakpoint.addEventListener("change", responsive);

  responsive(breakpoint);
}