function change_lab_work_3(){
    let contentDiv = 
    `
        <!-- Тема, мета -->
        <div class="step-block" onclick="labMeta_3()">
            <h3>Тема, Мета, Місце розташування сайту, звіту</h3>
        </div>
        <!-- Завдання №1 -->
        <div class="step-block" onclick="labTask_3_1()">
            <h3>Завдання №1</h3><h4>Зовнішній вигляд макету. Код макету</h4>
        </div>
        <!-- Завдання №2 -->
        <div class="step-block" onclick="labTask_3_2()">
            <h3>Завдання №2</h3>                
        </div>
        <div id="structure-1" class="structure">         
        </div>
        <!-- Завдання №3 -->
        <div class="step-block" onclick="labTask_3_3()">
            <h3>Завдання №3 Flexbox</h3>
        </div>
        <div id="structure-2" class="structure">
        </div>
        <!-- Висновки -->
        <div class="step-block" onclick="labConclusions_3()">
            <h3>Висновки</h3>
        </div>
    `;
    document.getElementById("steps").innerHTML = contentDiv;
    tableShown_1 = false;
    tableShown_2 = false;
    labMeta_3();
}

function labMeta_3() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
        <ol>
            <li>
                <b>Тема</b>: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.
            </li>
            <li>
            <b>Мета</b>: придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок, придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX
            </li>
            <li>
            <b>Місце розташування</b>:
                <ul>
                    <li>
                    <b>Сайту</b>: <a href='https://voranreygetov.github.io/ToyBox-WEB-3/'>тут</a>
                    </li>
                    <li>
                    <b>Звіт</b>: <a href='https://voranreygetov.github.io/basics-full-stack-labs/'>тут</a>
                    </li>
                </ul>
            </li>
        </ol>
    `;
}

function labTask_3_1() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
        <table>
        <thead>
            <th>
                Зовнішній вигляд макету:
            </th>
            <th>
                Код макету:
            </th>
        </thead>
        <tbody>
            <td>
                <img src="imgs/lab3/1/1-1.png" class="img-big-size" alt="">
            </td>
            <td>
                <img src="imgs/lab3/1/1-2.png" class="img-big-size" alt="">
                <img src="imgs/lab3/1/1-3.png" class="img-big-size" alt="">
                <img src="imgs/lab3/1/1-4.png" class="img-big-size" alt="">
            </td>
        </tbody>
    </table>
    `;
}


function labTask_3_2() {
    // Отримуємо доступ до елемента div за допомогою його id
    let contentDiv = document.getElementById("structure-1");
    if (tableShown_1) {
        contentDiv.innerHTML = '';
        tableShown_1 = false;
    }
    else{
        // Змінюємо текст у елементі div
        contentDiv.innerHTML = `
            <div class="step-block-smaller" onclick="labTask_3_2_1()">Фіксована таблична верстка</div>
            <div class="step-block-smaller" onclick="labTask_3_2_2()">Гумова таблична верстка</div>
            <div class="step-block-smaller" onclick="labTask_3_2_3()">Фіксована блокова верстка</div>
            <div class="step-block-smaller" onclick="labTask_3_2_4()">Гумова блокова верста</div>
        `;
        tableShown_1 = true;
    }
    
}
function labTask_3_2_1(){
    let contentDiv = 
    `
        <table>
        <thead>
            <th>Зовнішній вигляд</th>
            <th>HTML код</th>
            <th>CSS код</th>
        </thead>
        <tbody>
            <td><img src="./imgs/lab3/2/2-1.png" class="img-big-size" alt=""></td>
            <td><img src="./imgs/lab3/2/2-2.png" class="img-big-size" alt=""></td>
            <td><img src="./imgs/lab3/2/2-6.png" class="img-big-size" alt=""></td>
        </tbody>
    </table>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}
function labTask_3_2_2(){
    let contentDiv = 
    `
    <table>
        <thead>
            <th>HTML код</th>
            <th>CSS код</th>
        </thead>
        <tbody>
            <td><img src="./imgs/lab3/2/2-3.png" class="img-big-size" alt=""></td>
            <td><img src="./imgs/lab3/2/2-7.png" class="img-big-size" alt=""></td>
        </tbody>
    </table>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function labTask_3_2_3(){
    let contentDiv = 
    `
    <table>
        <thead>
            <th>HTML код</th>
            <th>CSS код</th>
        </thead>
        <tbody>
            <td><img src="./imgs/lab3/2/2-4.png" class="img-big-size" alt=""></td>
            <td><img src="./imgs/lab3/2/2-8.png" class="img-big-size" alt=""></td>
        </tbody>
    </table>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function labTask_3_2_4(){
    let contentDiv = 
    `
    <table>
        <thead>
            <th>HTML код</th>
            <th>CSS код</th>
        </thead>
        <tbody>
            <td><img src="./imgs/lab3/2/2-5.png" class="img-big-size" alt=""></td>
            <td><img src="./imgs/lab3/2/2-9.png" class="img-big-size" alt=""></td>
        </tbody>
    </table>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function labTask_3_3() {
    // Отримуємо доступ до елемента div за допомогою його id
    let contentDiv = document.getElementById("structure-2");
    if (tableShown_2) {
        contentDiv.innerHTML = '';
        tableShown_2 = false;
    }
    else{
        // Змінюємо текст у елементі div
        contentDiv.innerHTML = `
            <div class="step-block-smaller" onclick="labTask_3_3_1()">Зовнішній вигляд сторінки</div>
            <div class="step-block-smaller" onclick="labTask_3_3_2()">HTML-код</div>
            <div class="step-block-smaller" onclick="labTask_3_3_3()">CSS-код</div>
        `;
        tableShown_2 = true;
    }
}

function labTask_3_3_1(){
    let contentDiv = 
    `
    <table>
        <thead>
            <th>Зовнішній вигляд сторінки</th>
        </thead>
        <tbody>
            <td><img src="./imgs/lab3/3/3-1.png" alt=""></td>
        </tbody>
    </table>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function labTask_3_3_2(){
    let contentDiv = 
    `
    <table>
        <thead>
            <th>HTML код</th>
            <th></th>
        </thead>
        <tbody>
            <td>
                <img src="./imgs/lab3/3/3-2.png" class="img-big-size" alt="">
                <img src="./imgs/lab3/3/3-3.png" class="img-big-size" alt="">
            </td>
            <td>
                <img src="./imgs/lab3/3/3-4.png" class="img-big-size" alt="">
            </td>
        </tbody>
    </table>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function labTask_3_3_3(){
    let contentDiv = 
    `
    <table>
        <thead>
            <th>CSS код</th>
            <th></th>
        </thead>
        <tbody>
            <td>
                <img src="./imgs/lab3/3/3-5.png" class="img-big-size" alt="">
                <img src="./imgs/lab3/3/3-6.png" class="img-big-size" alt="">
                <img src="./imgs/lab3/3/3-7.png" class="img-big-size" alt="">
            </td>
            <td>
                <img src="./imgs/lab3/3/3-8.png" class="img-big-size" alt="">
                <img src="./imgs/lab3/3/3-9.png" class="img-big-size" alt="">
            </td>
        </tbody>
    </table>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}
function labConclusions_3(){
    let contentDiv = 
    `
    В ході лабораторної роботи з верстки веб-сторінок засобами CSS та використання Flexbox для створення макетів, придбав практичні навички роботи з різними підходами у верстці, а також виділив переваги та недоліки різних типів макетів:            <table>
    <thead>
        <th>
            
        </th>
        <th>
            Таблиці
        </th>
        <th>
            Блоки
        </th>
        <th>
            Flexbox
        </th>
    </thead>
    <tbody>
        <tr>
            <td><b>Переваги</b></td>
            <td>Стабільність розташування елементів.</td>
            <td>Гнучкість та респонсивність. Краща семантика.</td>
            <td>Висока гнучкість і адаптивність. Сучасний стандарт, що відповідає респонсивному дизайну.</td>
        </tr>
        <tr>
            <td>
                <b>Недоліки</b>
            </td>
            <td>Недостатня гнучкість та респонсивність.
                Погана семантика</td>
            <td>Плаваючі елементи можуть викликати проблеми з вирівнюванням.</td>
            <td>Відносна складність для новачків.</td>
        </tr>
    </tbody>
</table>
Отже, таблиці краще підходять для статичних макетів, але вони застаріли. Flexbox є кращим варіантом для сучасних адаптивних веб-додатків, оскільки надає більше можливостей для створення респонсивного дизайну.
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

let tableShown_3 = false;

function change_lab_work_4(){
    let contentDiv = 
    `
        <!-- Тема, мета -->
        <div class="step-block" onclick="lab4_Meta()">
            <h3>Тема, Мета, Місце розташування сайту, звіту</h3>
        </div>
        <!-- Зовнішній вигляд сайту -->
        <div class="step-block" onclick="lab4_View()">
            <h3>Зовнішній вигляд сайту
        </div>
        <div id="structure-3" class="structure">
        </div>
        <!-- Приклади CSS -->
        <div class="step-block" onclick="lab4_Examples()">
            <h3>Приклади CSS</h3>                
        </div>
        <div id="structure-1" class="structure">         
        </div>
        <!-- Висновки -->
        <div class="step-block" onclick="lab4_Conclusions()">
            <h3>Висновки</h3>
        </div>
    `;
    document.getElementById("steps").innerHTML = contentDiv;
    tableShown_3 = false;
    lab4_Meta();
}

function lab4_Meta() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
        <ol>
            <li>
                <b>Тема</b>: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.
            </li>
            <li>
            <b>Мета</b>: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції. Метатег viewport. Інструменти розробника. Стратегія Mobile First. 
            </li>
            <li>
            <b>Місце розташування</b>:
                <ul>
                    <li>
                    <b>Сайту</b>: <a href='https://voranreygetov.github.io/ToyBox-WEB-4/'>Жива сторінка</a>
                    </li>
                    <li>
                    <b>Звіт</b>: <a href='https://voranreygetov.github.io/basics-full-stack-labs/'>Жива сторінка</a>
                    </li>
                </ul>
            </li>
        </ol>
    `;
}

function lab4_View() {
    // Отримуємо доступ до елемента div за допомогою його id
    let contentDiv = document.getElementById("structure-3");
    if (tableShown_3) {
        contentDiv.innerHTML = '';
        tableShown_3 = false;
    }
    else{
        // Змінюємо текст у елементі div
        contentDiv.innerHTML = `
            <div class="step-block-smaller" onclick="lab4_View_1()">Десктопна</div>
            <div class="step-block-smaller" onclick="lab4_View_2()">Планшетна</div>
            <div class="step-block-smaller" onclick="lab4_View_3()">Мобільна</div>
        `;
        tableShown_3 = true;
    }
}

function lab4_View_1(){
    let contentDiv = 
    `
    <div class="grid-with-header">
        <h2>Десктопна версія на ширину екрана більшу за 1024px</h2>
        <img src="./imgs/lab4/1/1-1.png" class="img-big-size" alt="">
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function lab4_View_2(){
    let contentDiv = 
    `
    <div class="flexbox-with-header">
        <h2>Планшетна версія на ширину екрана меншу за 1024px</h2>
        <div>
            <div class="flex-column-container"><img src="./imgs/lab4/1/1-2.png" class="img-big-size" alt=""></div>
            <img src="./imgs/lab4/1/1-3.png" class="img-big-size" alt="">
        </div>
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}
function lab4_View_3(){
    let contentDiv = 
    `
    <div class="flexbox-with-header">
        <h2>Мобільна версія на ширину екрана меншу за 768px</h2>
        <div>
        <div><img src="./imgs/lab4/1/1-4.png" class="img-big-size" alt=""></div>
            <img src="./imgs/lab4/1/1-5.png" class="img-big-size" alt="">
        </div>
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function lab4_Examples(){
    let contentDiv = 
    `
    <div class="flexbox-with-header">
        <h2>Приклади використання CSS для адаптивної верстки</h2>
        <div>
            <div class="flex-column-container">
                <img src="./imgs/lab4/2/2-1.png" class="img-big-size" alt="">
                Зміна паддінгу в макеті в залежності від розміру вікна
            </div>
            
            <div class="flex-column-container">
                <img src="./imgs/lab4/2/2-2.png" class="img-big-size" alt="">
                Зміна лого 
            </div>
            
            <div class="flex-column-container">
                <img src="./imgs/lab4/2/2-3.png" class="img-big-size" alt="">
                Зміна положення сайдбару
            </div>
            
            <div class="flex-column-container">
                <img src="./imgs/lab4/2/2-4.png" class="img-big-size" alt="">
                Зміна слайдеру
            </div>
            
            <div class="flex-column-container">
                <img src="./imgs/lab4/2/2-10.png" class="img-big-size" alt="">
                Зміна кількості продуктів в рядку з використанням AND
            </div>
            
            <div class="flex-column-container">
                <img src="./imgs/lab4/2/2-6.png" class="img-big-size" alt="">
                Поява кнопок користувача знизу при мобільному варіанті
            </div>                    
        </div>
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function lab4_Conclusions(){
    let contentDiv = 
    `
    У ході лабораторної роботи розробив адаптивну верстку з використанням медіа-запитів та CSS-правил. Основна мета роботи полягала в тому, щоб створити гнучкий дизайн, який коректно відображався б на різних пристроях: десктопах, планшетах і мобільних телефонах.
    <p>Для визначення брейкпоінтів я використав стандартні значення:
        <ul>
            <li>768px для мобільних пристроїв
            </li>
            <li>1024px для планшетів
            </li>
            <li>Всі пристрої з більшою шириною вважалися десктопними
            </li>
        </ul>
    </p>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}