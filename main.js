let review = document.getElementById("review");
let intro = document.querySelectorAll('input[name="intro"]');
let fulName = "";
for (let i = 0; i < intro.length; i++) {
    fulName += `${intro[i].value}`;
    fulName += " ";
}

for(let i = 0; i < intro.length; i++) {
    intro[i].addEventListener("input", () => {
        let inputF = document.querySelectorAll('input[name="intro"]');
        fulName = "";
        for (let i = 0; i < inputF.length; i++) {
            fulName += `${inputF[i].value}`;
            fulName += " ";
        }
    });
}



document.querySelector('#open').onclick = function() {
    console.log(fulName);
    document.getElementById("thk").innerHTML = `Спасибо, ${fulName}, ваш отзыв отправлен!`;
    review.show(); // Показываем диалоговое окно
}
document.querySelector('#close').onclick = function() {
    review.close(); // Показываем диалоговое окно
}

let impressions = document.querySelectorAll('input[name="impress"]');
for(let i = 0; i < impressions.length; i++){
    impressions[i].addEventListener('change', changeMeter);
}
function changeMeter() {
    let value = this.value;
    let meter = document.querySelector('#impressVal');
    meter.value = value;
    document.getElementById("textVal").innerHTML = `Оценка: ${meter.value}%`;
    if(value === "0"){
        document.getElementById("textVal").innerHTML = ``;
    }
}

let selectElem = document.querySelector('select[name="country"]');
selectElem.addEventListener('change', (event)=>{
    switch (event.target.value) {
        case '1':
            document.querySelector('.locations-Belarus').style = "";
            document.querySelector('.locations-Italy').style.display = "none";
            document.querySelector('.locations-Estonia').style.display = "none";
            break;
        case '2':
            document.querySelector('.locations-Belarus').style.display = "none";
            document.querySelector('.locations-Italy').style = "";
            document.querySelector('.locations-Estonia').style.display = "none";
            break;
        case '3':
            document.querySelector('.locations-Belarus').style.display = "none";
            document.querySelector('.locations-Italy').style.display = "none";
            document.querySelector('.locations-Estonia').style = "";
            break;
    }
});

document.querySelector('#divZoo').addEventListener('mouseover', addImg);
document.querySelector('#divZoo').addEventListener('mouseout', deleteImg);
function addImg() {
    document.querySelector('#divZoo').insertAdjacentHTML('beforeend','<img src="images/zoo.jpg" alt="zoo" style="" id="imgZoo">');
}
function deleteImg() {
    document.querySelector('#imgZoo').remove();
}

