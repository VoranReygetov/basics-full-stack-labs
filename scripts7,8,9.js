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
    if (tableShown_2) {
        contentDiv.innerHTML = '';
        tableShown_2 = false;
    }
    else{
        // Змінюємо текст у елементі div
        contentDiv.innerHTML = `
            <div class="step-block-smaller" onclick="lab7_Task_2_1()">HTML, CSS, JS</div>
            <div class="step-block-smaller" onclick="lab7_Task_2_2()">Демонстація роботи</div>
        `;
        tableShown_2 = true;
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

function change_lab_work_8() {
    let contentDiv = 
    `
        <!-- Тема, мета -->
        <div class="step-block" onclick="lab8_Meta()">
            <h3>Сертифікат, оцінка</h3>
        </div>
        <!-- Завдання №1 -->
        <div class="step-block" onclick="lab8_Task_1()">
            <h3>Тести</h3>
        </div>
        </div>
        <!-- Висновки -->
        <div class="step-block" onclick="lab8_Conclusions()">
            <h3>Висновки</h3>
        </div>
    `;
    document.getElementById("steps").innerHTML = contentDiv;
    lab8_Meta();
}

function lab8_Meta() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
    <p>Сертифікат та оцінка</p>
    <div>
        <div class="flex-column-container">
            <img src="./imgs/lab8/1/1-1.png" class="img-big-size" alt="">
            Сертифікат
            <img src="./imgs/lab8/1/1-2.png" class="img-big-size" alt="">
            Оцінка
        </div>
    </div>
    `;
}

function generate1ImageHTML(number) {
    const imagePath = `./imgs/lab8/2/1/www.coursera.org_learn_react-basics_quiz_8NOQO_self-review-creating-and-importing-components_view-attempt (${number}).png`;
    const imageHTML = `<img src="${imagePath}" class="img-big-size" alt="Image ${number}">`;
    return imageHTML;
  }
  function generate2ImageHTML(number) {
    const imagePath = `./imgs/lab8/2/2/www.coursera.org_learn_react-basics_quiz_8NOQO_self-review-creating-and-importing-components_view-attempt (${number}).png`;
    const imageHTML = `<img src="${imagePath}" class="img-big-size" alt="Image ${number}">`;
    return imageHTML;
  }
  function generate2_1ImageHTML(number) {
    const imagePath = `D:\Programs\WEB\basics-full-stack-labs\imgs\lab8/2/2\www.coursera.org_learn_react-basics_quiz_r83Ux_knowledge-check-data-flow_view-attempt (${number}).png`;
    const imageHTML = `<img src="${imagePath}" class="img-big-size" alt="Image ${number}">`;
    return imageHTML;
  }
  function generate3ImageHTML(number) {
    const imagePath = `./imgs/lab8/2/3/www.coursera.org_learn_react-basics_quiz_r83Ux_knowledge-check-data-flow_view-attempt (${number}).png`;
    const imageHTML = `<img src="${imagePath}" class="img-big-size" alt="Image ${number}">`;
    return imageHTML;
  }

function lab8_Task_1(){

    let all1ImagesHTML = ''; // Initialize an empty string
    let all2ImagesHTML = ''; // Initialize an empty string
    let all3ImagesHTML = ''; // Initialize an empty string
    for (let i = 1; i <= 14; i++) {
      let imageHTML = generate1ImageHTML(i);
      all1ImagesHTML += imageHTML;
    }
    for (let i = 1; i <= 9; i++) {
        let imageHTML = generate2ImageHTML(i);
        all2ImagesHTML += imageHTML;
    }
    for (let i = 10; i <= 16; i++) {
        let imageHTML = generate2_1ImageHTML(i);
        all2ImagesHTML += imageHTML;
    }
    for (let i = 1; i <= 16; i++) {
        let imageHTML = generate3ImageHTML(i);
        all3ImagesHTML += imageHTML;
    }
      

    let contentDiv = 
    `
    <p>Тести</p>
    <div class="flex-column-container">
    <b>1 Тиждень</b>
    ${all1ImagesHTML}
    <img src="./imgs/lab8/2/1/www.coursera.org_learn_react-basics_quiz_8NOQO_self-review-creating-and-importing-components_view-attempt.png" class="img-big-size" alt="">
    <b>2 Тиждень</b>
    ${all2ImagesHTML}
    <img src="./imgs/lab8/2/2/www.coursera.org_learn_react-basics_quiz_r83Ux_knowledge-check-data-flow_view-attempt.png" class="img-big-size" alt="">
    <b>3 Тиждень</b>
    ${all3ImagesHTML}
    <img src="./imgs/lab8/2/3/www.coursera.org_learn_react-basics_quiz_r83Ux_knowledge-check-data-flow_view-attempt.png" class="img-big-size" alt="">
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function lab8_Conclusions(){
    let contentDiv = 
    `
    <h4>Висновки</h4>
    <h4>В ході виконання лабораторної роботи:</h4>
    <ul>
      <li>Пройдшов курс React basics від Meta</li>
      <li>Придбав практичні навички роботи з бібліотекою React</li>      
    </ul>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function change_lab_work_9() {
    let contentDiv = 
    `
        <!-- Тема, мета -->
        <div class="step-block" onclick="lab9_Meta()">
            <h3>Сертифікат, оцінка</h3>
        </div>
        <!-- Завдання №1 -->
        <div class="step-block" onclick="lab9_Task_1()">
            <h3>Тести</h3>
        </div>
        </div>
        <!-- Висновки -->
        <div class="step-block" onclick="lab9_Conclusions()">
            <h3>Висновки</h3>
        </div>
    `;
    document.getElementById("steps").innerHTML = contentDiv;
    lab9_Meta();
}

function lab9_Meta() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
    <p>Сертифікат та оцінка</p>
    <div>
        <div class="flex-column-container">
            <img src="./imgs/lab9/1/2-2.png" class="img-big-size" alt="">
            Сертифікат
            <img src="./imgs/lab9/1/2-1.png" class="img-big-size" alt="">
            Оцінка
        </div>
    </div>
    `;
}

function generate21ImageHTML(number) {
    const imagePath = `./imgs/lab9/2/1/www.coursera.org_learn_restful-apis-with-node-and-express_quiz_nJjmo_middleware-practice-quiz_view-attempt (${number}).png`;
    const imageHTML = `<img src="${imagePath}" class="img-big-size" alt="Image ${number}">`;
    return imageHTML;
  }
  function generate22ImageHTML(number) {
    const imagePath = `./imgs/lab9/2/2/www.coursera.org_learn_restful-apis-with-node-and-express_quiz_nJjmo_middleware-practice-quiz_view-attempt (${number}).png`;
    const imageHTML = `<img src="${imagePath}" class="img-big-size" alt="Image ${number}">`;
    return imageHTML;
  }
  function generate23ImageHTML(number) {
    const imagePath = `./imgs/lab9/2/3/www.coursera.org_learn_restful-apis-with-node-and-express_quiz_nJjmo_middleware-practice-quiz_view-attempt (${number}).png`;
    const imageHTML = `<img src="${imagePath}" class="img-big-size" alt="Image ${number}">`;
    return imageHTML;
  }

function lab9_Task_1(){

    let all1ImagesHTML = ''; // Initialize an empty string
    let all2ImagesHTML = ''; // Initialize an empty string
    let all3ImagesHTML = ''; // Initialize an empty string
    for (let i = 1; i <= 8; i++) {
      let imageHTML = generate21ImageHTML(i);
      all1ImagesHTML += imageHTML;
    }
    for (let i = 1; i <= 16; i++) {
        let imageHTML = generate22ImageHTML(i);
        all2ImagesHTML += imageHTML;
    }
    for (let i = 10; i <= 10; i++) {
        let imageHTML = generate23ImageHTML(i);
        all2ImagesHTML += imageHTML;
    }
      

    let contentDiv = 
    `
    <p>Тести</p>
    <div class="flex-column-container">
    <b>1 Тиждень</b>
    ${all1ImagesHTML}
    <img src="./imgs/lab9/2/1/www.coursera.org_learn_restful-apis-with-node-and-express_quiz_nJjmo_middleware-practice-quiz_view-attempt.png" class="img-big-size" alt="">
    <b>2 Тиждень</b>
    ${all2ImagesHTML}
    <img src="./imgs/lab9/2/2/www.coursera.org_learn_restful-apis-with-node-and-express_quiz_nJjmo_middleware-practice-quiz_view-attempt.png" class="img-big-size" alt="">
    <b>3 Тиждень</b>
    ${all3ImagesHTML}
    <img src="./imgs/lab9/2/3/www.coursera.org_learn_restful-apis-with-node-and-express_quiz_nJjmo_middleware-practice-quiz_view-attempt.png" class="img-big-size" alt="">
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function lab9_Conclusions(){
    let contentDiv = 
    `
    <h4>Висновки</h4>
    <h4>В ході виконання лабораторної роботи:</h4>
    <ul>
    <li>Пройшов курс Building RESTful APIs with Node.js and Express</li>
    <li>Придбав практичні навички роботи з фреймворком Express</li>
    <li>
    Придбав практичні навички розробки з БД MongoDB
    </li>
    <li>
    Реалізував  CRUD - операції
    </li>
    </ul>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}