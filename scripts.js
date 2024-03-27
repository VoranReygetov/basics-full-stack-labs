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
        <ul>
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
    <img src="imgs/tables-screen-1.png" style="width: 25%;" alt="">
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
                <img src="imgs/form-1.png" style="width: 25%;" alt="">
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
    <img src="imgs/icon-html-1.png" style="width: 30%;" alt="">
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