function change_lab_work_7() {
    let contentDiv = 
    `
        <!-- Тема, мета -->
        <div class="step-block" onclick="lab7_Meta()">
            <h3>Тема, Мета, Місце розташування завдань, звіту, фігми</h3>
        </div>
        <!-- Завдання №1 -->
        <div class="step-block" onclick="lab7_Task_1()">
            <h3>Завдання №1</h3>
        </div>
        <div id="structure-1" class="structure"></div>
        <!-- Завдання №2 -->
        <div class="step-block" onclick="lab7_Task_2()">
            <h3>Завдання №2</h3>                
        </div>
        <div id="structure-2" class="structure"></div>
        </div>
        </div>
        <!-- Висновки -->
        <div class="step-block" onclick="lab7_Conclusions()">
            <h3>Висновки</h3>
        </div>
    `;
    document.getElementById("steps").innerHTML = contentDiv;
    lab7_Meta();
    tableShown_1 = false;
    tableShown_2 = false;
}

function lab7_Meta() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
        <ol>
            <li>
                <b>Тема</b>: WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНОСТЬ  КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА. ДЕЛЕГУВАННЯ ПОДІЙ.
            </li>
            <li>
            <b>Мета</b>: придбати практичні навички роботи створення модального вікна; повторити процес створення макету, зокрема створення макету галереї довільних зображень; закріпити навички роботи з делегуванням подій.
            </li>
            <li>
            <b>Місце розташування</b>:
                <ul>
                    <li>
                    <b>Завдання 1</b>: <a href='https://github.com/VoranReygetov/ToyBox-WEB-7'>Ось</a>,
                    <a href='https://voranreygetov.github.io/ToyBox-WEB-7/'>Жива сторінка</a>
                    </li>
                    <li>
                    <b>Завдання 2</b>: <a href='https://github.com/VoranReygetov/ToyBox-WEB-7.1'>Ось</a>,
                    <a href='https://voranreygetov.github.io/ToyBox-WEB-7.1/'>Жива сторінка</a>
                    </li>
                    <li>
                    <b>Figma</b>: <a href='https://www.figma.com/design/bSMjBuEUfbXglmCXm25Ljm/Gallery-%2B-Form?node-id=0-1&t=pqZK4SYEcJAvf5WO-0'>Ось</a>
                    </li>
                    <li>
                    <b>Звіт</b>: <a href='https://github.com/VoranReygetov/basics-full-stack-labs'>Ось</a>,
                    <a href='https://voranreygetov.github.io/basics-full-stack-labs/'>Жива сторінка</a>
                    </li>
                </ul>
            </li>
        </ol>
    `;
}

function lab7_Task_1() {
    // Отримуємо доступ до елемента div за допомогою його id
    let contentDiv = document.getElementById("structure-1");
    if (tableShown_1) {
        contentDiv.innerHTML = '';
        tableShown_1 = false;
    }
    else{
        // Змінюємо текст у елементі div
        contentDiv.innerHTML = `
            <div class="step-block-smaller" onclick="lab7_Task_1_1()">HTML, CSS, JS</div>
            <div class="step-block-smaller" onclick="lab7_Task_1_2()">Демонстація роботи</div>
        `;
        tableShown_1 = true;
    }
}

function lab7_Task_1_1(){
    let contentDiv = 
    `
    <p>Галерея</p>
    <div>
        <div class="flex-column-container">
            <img src="./imgs/lab7/1/7-1.png" class="img-big-size" alt="">
            HTML файл
        </div>
        
        <div class="flex-column-container">
            <img src="./imgs/lab7/1/7-2.png" class="img-big-size" alt="">
            <img src="./imgs/lab7/1/7-3.png" class="img-big-size" alt="">
            CSS файл
        </div>

        <div class="flex-column-container">
            <img src="./imgs/lab7/1/7-4.png" class="img-big-size" alt="">
            <img src="./imgs/lab7/1/7-5.png" class="img-big-size" alt="">
            JS файл
        </div>                
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}
function lab7_Task_1_2(){
    let contentDiv = 
    `
    <p>Демонстація роботи</p>
    <div>
        <div class="flex-column-container">
            <img src="./imgs/lab7/2/7-1.png" class="img-big-size" alt="">
            Сторінка
            <img src="./imgs/lab7/2/7-2.png" class="img-big-size" alt="">
            Hover
            <img src="./imgs/lab7/2/7-3.png" class="img-big-size" alt="">
            Lightbox
        </div>
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}
function lab7_Task_2() {
    // Отримуємо доступ до елемента div за допомогою його id
    let contentDiv = document.getElementById("structure-2");
    if (tableShown_1) {
        contentDiv.innerHTML = '';
        tableShown_1 = false;
    }
    else{
        // Змінюємо текст у елементі div
        contentDiv.innerHTML = `
            <div class="step-block-smaller" onclick="lab7_Task_2_1()">HTML, CSS, JS</div>
            <div class="step-block-smaller" onclick="lab7_Task_2_2()">Демонстація роботи</div>
        `;
        tableShown_1 = true;
    }
}

function lab7_Task_2_1(){
    let contentDiv = 
    `
    <p>Форма</p>
    <div>
        <div class="flex-column-container">
            <img src="./imgs/lab7/3/7-1.png" class="img-big-size" alt="">
            HTML файл
        </div>
        
        <div class="flex-column-container">
            <img src="./imgs/lab7/3/7-2.png" class="img-big-size" alt="">
            <img src="./imgs/lab7/3/7-3.png" class="img-big-size" alt="">
            CSS файл
        </div>

        <div class="flex-column-container">
            <img src="./imgs/lab7/3/7-4.png" class="img-big-size" alt="">
            JS файл
        </div>                
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}
function lab7_Task_2_2(){
    let contentDiv = 
    `
    <p>Демонстація роботи</p>
    <div>
        <div class="flex-column-container">
            <img src="./imgs/lab7/4/7-1.png" class="img-big-size" alt="">
            Сторінка
            <img src="./imgs/lab7/4/7-2.png" class="img-big-size" alt="">
            Незаповнена форма
            <img src="./imgs/lab7/4/7-3.png" class="img-big-size" alt="">
            Повернення об’єкту formData 
        </div>
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function lab7_Conclusions(){
    let contentDiv = 
    `
    <div>
        У ході лабораторної роботи придбав практичні навички роботи створення модального вікна; повторив процес створення макету, зокрема створення макету галереї довільних зображень; закріпив навички роботи з делегуванням подій.
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}