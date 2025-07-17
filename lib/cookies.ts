
import Cookies from "js-cookie";

export function setCookie(name: string, value: string) {
  Cookies.set(name, value, { expires: 1, path: "/" });
}

export function getCookie(name: string) {
  return Cookies.get(name);
}

export function deleteCookie(name: string) {
  Cookies.remove(name, { path: "/" });
}
