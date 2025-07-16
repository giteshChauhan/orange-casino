import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

export default function toaster(message = "") {
    toast(` 🍊  ${message}`, {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}