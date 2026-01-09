import { route } from "./router.js";

window.MitkoAI = {
  reply(text) {
    try {
      return route(text);
    } catch (e) {
      console.error(e);
      return "Router error.";
    }
  }
};