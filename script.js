
//adding body text with java
const article = document.createElement("article")
article.textContent = "I am a 21 year old Computer Software Student, I am currently enrolled in Flatiron School and am Excited to be able to learn how to code. This website will be my documentation that I am familair with the content and can put it to use!";
const body = document.querySelector("body")

body.append(article);

const div = document.createElement("div")
body.append(div)

const header = document.createElement("h3")
header.textContent = "Click Below to See my Beautiful Girlfriend"

const button = document.createElement("button")
button.textContent = "Click"
body.append(div)
div.append(header)
div.append(button)

const clickButton = document.querySelector("button")
clickButton.addEventListener("click",() =>{
    displayImg()
})

function displayImg() {
    const Img = document.createElement("img")
    Img.src = 'https://lh3.googleusercontent.com/pw/AP1GczPowkWZ9UVuBEOvnhKZlpW-2zBJDcGh75HefPeNmjgtkdyU4KC8ab19xmM1GvHfnlfXCamo9aJcDN4Qbgc64eZxE4Qj1j9bhJ2BO9FHsp298pMMD3-BR63Y6nGldGFlx540wVmsdOdk4cJDwHoO96nKLcGepfzi4U49-msAsy1YC-vQ1daE5tParUP0iBLWbgd-kjY_LY3Z4bQu6I7JPwu0R0yRAojvN_mzIQjR0t07tZ9yNKuI66aCwwdMW_OnvoJU5mNYeELF8tf-LFk2LIsaX295fZpFTQ1oBqWpv37W-2zDhMG3o7ND05gwjN53W3q-9Y3HH-Xw87w8Igmn8h1ETX-4q-LBEZ4QraKrPhjiWhozjTM-oMsSQ2eRcc9ngkPf8YiICNEY_kmSLu_Q_hiVLzDTSlc_pfGm7ZD56YfR7WVXD9ZAe3zuMObutd4Rb9SC4lrEgMQI6LWF-drP2JHCfC9zF7J8wVpsnu-P-_R2PuL9c_NUA9RHNq05mHX1TnnSHil9KPqOgKS8QsUbkU_SgHNGeQcCFwNyiZ4ErhaHmNDWcxbkJMZPPA6dZ0EIHm9XntedNGTBvwuWw0gev6sCQnhTNMox29qSy6E9mXzyOMX0CG_QUzirQMvs8fCAJRtq_SmsawqfXSt53O3VHgZvzcgTGuKNeSQ6aACuEx8lRVryxEOBCdX6L4hr_t540nsidhE7zz7K7yOseaS3BX7lOrm4sYtVNiMdSd9EcbxUBKzNHGolluhy28GkPqSZddCbL0H6AMX23EaLGJbGGrZzCRYuowQ1bg9bfSjURePybZAlGAR7vmyLJlkjhtxry-UV94dsKL5zDXP3t18MRLT30p6meSiCQTU54mdNwYC44rKnk4cy3dWrEUEF5US0Sb-VNEdYT7CLqIPZGUtK7xlu=w1048-h911-s-no-gm?authuser=0'
    div.append(Img)
}