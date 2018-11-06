import aInput from "./components/input";
import aIcon from "./components/icon";
const aweUI ={
    aInput,
    aIcon
}

const install = function(Vue, opts = {}) {;
  
    Object.keys(aweUI).forEach(key => {
      Vue.component(key, aweUI[key]);
    });

  };

  // auto install
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
  }
  
  export default Object.assign(aweUI, { install }); // eslint-disable-line no-undef