import { ym } from "react-ym";

const IS_BROWSER = typeof window !== "undefined";

let key;

export function init(code) {
  key = `yaCounter${code}`;

  if (IS_BROWSER && !window[key] && code) {
    ym.initialize(code);
  }
}

export function pageview() {
  if (window[key]) {
    window[key].hit(window.location.pathname);
  }
}

export function reachGoal(...args) {
  if (window[key]) {
    window[key].reachGoal(...args);
  }
}
