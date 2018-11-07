import Input from "./components/input";
import Icon from "./components/icon";
import Button from "./components/button";
const iview ={
    Input,
    Icon,
    Button,
}

const install = function(Vue, opts = {}) {;
  
    Object.keys(iview).forEach(key => {
      Vue.component(key, iview[key]);
    });

  };

  // auto install
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
  }
  
  export default Object.assign(iview, { install }); // eslint-disable-line no-undef