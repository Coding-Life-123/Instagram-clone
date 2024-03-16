export function setBodyColor({color, text}){
    document.documentElement.style.setProperty('--bodyColor', color)
    document.documentElement.style.setProperty('--textColor', text)
}