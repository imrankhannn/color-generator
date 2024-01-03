const btn = document.querySelector("button");
const colorVal = document.querySelector("h2 span")

const randomColourGen = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256); 
    const blue = Math.floor(Math.random() * 256);
    const newColour = (`rgb(${red}, ${green}, ${blue})`);   
    return newColour;
}
btn.addEventListener('click', ()=>{
const bodyBackground = randomColourGen();
colorVal.textContent = bodyBackground;
document.querySelector ("body").style.backgroundColor = bodyBackground;
})