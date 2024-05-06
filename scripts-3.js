let tableShown_1 = false;
let tableShown_2 = false;

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