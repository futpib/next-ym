import debug from "debug";

const log = debug("analytics");

export function init(code) {
  log(`Analytics init triggered for ${code}`);
}

export function pageview() {
  log(`Pageview triggered for ${window.location.pathname}`);
}

export function reachGoal(...args) {
  log('Goal reached:', ...args);
}
