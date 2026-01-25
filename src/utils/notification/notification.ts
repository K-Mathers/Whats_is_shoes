import { Slide, toast } from "react-toastify";

export const successNotification = (msg: string, theme: string = "light") => {
  toast.success(msg, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme,
    transition: Slide,
  });
};

export const errorNotification = (msg: string, theme: string = "light") => {
  toast.error(msg, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme,
    transition: Slide,
  });
};
