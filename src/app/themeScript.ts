import { THEME_COLOR, THEME_KEY } from "@/types/theme";

// The script owns the theme-color meta: React re-inserts a rendered one ahead of any edit made before hydration.
export const THEME_SCRIPT = `(function(){var t="dark";try{var s=localStorage.getItem("${THEME_KEY}");if(s==="light"||s==="dark"){t=s;document.documentElement.setAttribute("data-theme",s)}}catch(e){}var m=document.createElement("meta");m.name="theme-color";m.content=${JSON.stringify(THEME_COLOR)}[t];document.head.appendChild(m)})()`;
