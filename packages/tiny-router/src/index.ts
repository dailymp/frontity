import TinyRouter from "../type";
import { set, init } from "./actions";

const tinyRouter: TinyRouter = {
  name: "@frontity/tiny-router",
  state: {
    router: {
      path: "/",
      page: null,
      location: state => {
        return new URL(
          state.router.page > 1
            ? state.router.path.replace(/\/?$/, `/page/${state.router.page}/`)
            : state.router.path,
          state.frontity.url
        );
      }
    }
  },
  actions: {
    router: {
      init,
      set
    }
  }
};

export default tinyRouter;
