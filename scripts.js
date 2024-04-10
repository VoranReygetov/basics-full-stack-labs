function labDescription_1() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
    <p>
    Веб-додаток для пошуку та покупки дитячих іграшок. Діючі актори: <strong>Адміністратор</strong>, <strong>Користувач</strong>.<br><br>
    <strong>Користувач</strong> зможе:
    <ul>
        <li>Переглянути каталог товарів</li>
        <li>Відсортувати та фільтрувати товари</li>
        <li>Додати товар у кошик</li>
        <li>Створити замовлення</li>
    </ul>
    <strong>Адміністратор</strong>:
    <ul>
        <li>Додавати нові іграшки</li>
        <li>Редагувати/видаляти іграшки</li>
        <li>Переглядати замовлення</li>
    </ul>
</p>
    `;
}

function labMeta_1() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
        <ol>
            <li>
                Тема: структура HTML-документа. вибір предметної галузі. робота з посиланнями, таблицями, зображеннями, списками в HTML-документі.
            </li>
            <li>
                Мета: придбати практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
            </li>
            <li>
                Місце розташування:
                <ul>
                    <li>
                        Резюме: <a href='https://voranreygetov.github.io/my-resume-web/'>тут</a>
                    </li>
                    <li>
                        Магазин іграшок: <a href='https://voranreygetov.github.io/ToyBox-WEB/'>тут</a>
                    </li>
                    <li>
                        Звіт: <a href='https://voranreygetov.github.io/basics-full-stack-labs/'>тут</a>
                    </li>
                </ul>
            </li>
        </ol>
    `;
}
var tableShown = false;
function documentStructure_1() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("structure");
    if (tableShown) {
        contentDiv.innerHTML = '';
        tableShown = false;
    }
    else{
        // Змінюємо текст у елементі div
        contentDiv.innerHTML = `
        <ul class="step-block-list">
            <li class="step-block" onclick="labHTML_1_1()">HTML-код ТАБЛИЦЬ</li>
            <li class="step-block" onclick="labHTML_1_2()">HTML-код ФОРМИ</li>
            <li class="step-block" onclick="labHTML_1_3()">HTML-код ЗОБРАЖЕННЯ</li>
        </ul>
        `;
        tableShown = true;
    }
    
}
function labHTML_1_1() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
    <div style="display: flex;margin-left: 5px;">
    <img src="imgs/lab1/tables-screen-1.png" style="width: 25%;" alt="">
    <p>
        Таблиця використовується для відображення іграшок.
    </p>
</div>    `;
}
function labHTML_1_2() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
    <div style="display: flex;margin-left: 5px;">
                <img src="imgs/lab1/form-1.png" style="width: 25%;" alt="">
                <p>
                    Форма використовується для стрічки пошуку
                </p>
            </div>`;
}
function labHTML_1_3() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
    <div style="display: flex;margin-left: 5px;">
    <img src="imgs/lab1/icon-html-1.png" style="width: 30%;" alt="">
    <p>
        Зображення використовується як логотип магазину
    </p>
</div>           `;
}
function conclusions_1() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
    <p>
                У ході лабораторної роботи ми навчилися створювати та клонувати репозиторії з Github, використовувати застосунок Figma для створення макетів, вивчили семантичні теги,
                на практиці застосували різні теги, такі як table, a, ul, ol та створили своє резюме, сайт та звітний HTML-документ.  
            </p>  `;
}
function change_lab_work_1(){
    let contentDiv = 
    `
        <!-- Опис предметного середовища -->
        <div class="step-block" onclick="labDescription_1()">
            <h3>Опис предметного середовища</h3>
        </div>
        <!-- Тема, Мета, Місце розташування лабораторної роботи №1 -->
        <div class="step-block" onclick="labMeta_1()">
            <h3>Тема, Мета, Місце розташування лаби №1</h3>
        </div>
        <!-- Структура документа -->
        <div class="step-block" onclick="documentStructure_1()">
            <h3>Структура документа</h3>                
        </div>
        <div id="structure">                
        </div>
        <!-- Висновки -->
        <div class="step-block" onclick="conclusions_1()">
            <h3>Висновки</h3>
        </div>
    `;
    document.getElementById("steps").innerHTML = contentDiv;
    labDescription_1();
}
function change_lab_work_2(){
    let contentDiv = 
    `
        <div class="step-block" onclick="labDescription_2()">
            <h3>Тема, Мета, ЛР№2 Місце розташування сайту, звіту</h3>
        </div>
        <div class="step-block" onclick="labStyles_2()">
            <h3>Способи підключення стилів</h3>
        </div>
        <div class="step-block" onclick="labSelectors_2()">
            <h3>Селектори</h3>                
        </div>
        <div id="structure">
        </div>
        <div class="step-block" onclick="labAdvanced_2()">
            <h3>CSS: Шрифти Текст Таблиці Фон Контур Списки СSS Просунутий</h3>
        </div>
        <div class="step-block" onclick="labConclusions_2()">
            <h3>Висновки</h3>
        </div>
    `;
    document.getElementById("steps").innerHTML = contentDiv;
    labDescription_2();
}

function labSelectors_2() {
    // Отримуємо доступ до елемента div за допомогою його id
    let contentDiv = document.getElementById("structure");
    if (tableShown) {
        contentDiv.innerHTML = '';
        tableShown = false;
    }
    else{
        // Змінюємо текст у елементі div
        contentDiv.innerHTML = `
            <div class="step-block-smaller" onclick="labSelectors_2_1()">Селектори тегу</div>
            <div class="step-block-smaller" onclick="labSelectors_2_2()">Селектори класу</div>
            <div class="step-block-smaller" onclick="labSelectors_2_3()">Селектори ідентифікаторів</div>
            <div class="step-block-smaller" onclick="labSelectors_2_4()">Інші селектори</div>
        `;
        tableShown = true;
    }
    
}
function labDescription_2(){
    let contentDiv = 
    `
    <ol class="main-list-margin">
        <li>
            <b>Тема:</b> каскадні таблиці стилів, селектори, ідентифікатори, стильове
            оформлення текстових елементів в html-документах.
        </li>
        <li>
            <b>Мета:</b> придбати практичні навички роботи з селекторами, ідентифікаторами,
            списками, різноманітними властивостями кольору і фону, зовнішними та
            внутрішними відступами, плаваючими елементами, оформленням текстових
            елементів.
        </li>
        <li>
            <b>Місце розташування сайту:</b> <a href="https://github.com/VoranReygetov/ToyBox-WEB-2">ось</a>.
        </li>
        <li>
            <b>Місце розташування звіту:</b> <a href="https://github.com/VoranReygetov/basics-full-stack-labs">ось</a>.
        </li>
    </ol>
    `
    document.getElementById("content").innerHTML = contentDiv;
}
function labStyles_2(){
    let contentDiv = 
    `
            <div style="display: flex; align-items: center; flex-direction: column;">
                <p>Існує 3 способи підключення стилів до HTML-документу</p>
                <div class="conn-styles-types">
                    <div class="conn-styles-types-block">
                        <img class="conn-styles-types-block-img" src="imgs/lab2/conn-styles-types-1.png" alt="">
                        Вбудований (Inline)
                    </div>
                    <div class="conn-styles-types-block">
                        <img class="conn-styles-types-block-img" src="imgs/lab2/conn-styles-types-2.png" alt="">
                        Внутрішній (Internal)
                    </div>
                    <div class="conn-styles-types-block">
                        <img class="conn-styles-types-block-img" src="imgs/lab2/conn-styles-types-3.png" alt="">
                        Зовнішній (External)
                    </div>
                </div>
            </div>
    `
    document.getElementById("content").innerHTML = contentDiv;
}
function labSelectors_2_3(){
    let contentDiv = 
    `
    <div style="display: flex; align-items: center; flex-direction: column;">
                <p>Селектори ідентифікатору</p>
                <div class="conn-styles-types">
                    <div class="conn-styles-types-block">
                        <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-1-1.png" alt="">
                    </div>
                    <div class="conn-styles-types-block">
                        <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-1-2.png" alt="">
                    </div>
                    <div class="conn-styles-types-block">
                        <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-1-3.png" alt="">
                    </div>
                </div>
        </div>     
    `
    document.getElementById("content").innerHTML = contentDiv;
}
function labSelectors_2_1(){
    let contentDiv = 
    `
    <div style="display: flex; align-items: center; flex-direction: column;">
        <p>Селектори тегу</p>
        <div class="conn-styles-types">
            <div class="conn-styles-types-block">
                <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-2-1.png" alt="">
            </div>
            <div class="conn-styles-types-block">
                <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-2-2.png" alt="">
            </div>
            <div class="conn-styles-types-block">
                <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-2-3.png" alt="">
        </div>
    </div>
    `
    document.getElementById("content").innerHTML = contentDiv;
}
function labSelectors_2_2(){
    let contentDiv = 
    `
    <div style="display: flex; align-items: center; flex-direction: column;">
                <p>Селектори класу</p>
                <div class="conn-styles-types">
                    <div class="conn-styles-types-block">
                        <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-3-1.png" alt="">
                    </div>
                    <div class="conn-styles-types-block">
                        <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-3-2.png" alt="">
                    </div>
                    <div class="conn-styles-types-block">
                        <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-3-3.png" alt="">
                    </div>
                </div>
            </div>
        </div>        
    `;
    document.getElementById("content").innerHTML = contentDiv;
}
function labSelectors_2_4(){
    let contentDiv = 
    `
    <div style="display: flex; align-items: center; flex-direction: column;">
        <p>Інші селектори</p>
        <p>Дочірній селектор та Універсальний селектор</p>
        <div class="conn-styles-types">
            <div class="conn-styles-types-block">
                <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-4-1.png" alt="">
            </div>
            <div class="conn-styles-types-block">
                <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-4-2.png" alt="">
            </div>
            <div class="conn-styles-types-block">
                <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-4-3.png" alt="">
            </div>
        </div>
        <p>Селектор атрибута</p>
        <div class="conn-styles-types">
            <div class="conn-styles-types-block">
                <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-4-4.png" alt="">
            </div>
            <div class="conn-styles-types-block">
                <img class="conn-styles-types-block-img" src="imgs/lab2/selector-types-4-5.png" alt="">
            </div>
        </div>
    </div>
    `;
    document.getElementById("content").innerHTML = contentDiv;
}
function labAdvanced_2(){
    let contentDiv = 
    `
            <div class="css-showcase-cont">
                <div class="conn-styles-types">
                    <h2>Шрифти та Текст</h2>
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-1-1.png" alt="">
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-1-2.png" alt="">
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-1-3.png" alt="">
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-1-4.png" alt="">
                </div>
                <div class="conn-styles-types">
                    <h2>Контур, Списки, Фон</h2>
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-2-4-1.png" alt="">
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-2-2.png" alt="">
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-2-3.png" alt="">
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-2-4.png" alt="">
                </div>
                <div class="conn-styles-types">
                    <h2>Таблиці</h2>
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-3-1.png" alt="">
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-3-2.png" alt="">
                </div>
                <div class="conn-styles-types">
                    <h2>CSS Просунутий</h2>
                    Заокруглення та кнопки
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-3-3.png" alt="">
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-3-4.png" alt="">
                    Текстові ефекти
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-3-5.png" alt="">
                    <img class="conn-styles-types-block-img" src="imgs/lab2/css-demonstration-3-6.png" alt="">
                </div>
            </div>
    `;
    document.getElementById("content").innerHTML = contentDiv;
}
function labConclusions_2(){
    let contentDiv = 
    `
    <b>Висновки:</b> у ході лабораторної роботи ознайомився та навчився використовувати каскадні таблиці стилів для стильового оформлення
    елементів html-документа. Набрався навичок з різними селекторами, різноманітними властивостями кольору і фону, зовнішними та внутрішними відступами, 
    плаваючими елементами.
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}