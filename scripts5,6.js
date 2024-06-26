let tableShown_1 = false;
let tableShown_2 = false;
function change_lab_work_5() {
    let contentDiv = 
    `
        <!-- Тема, мета -->
        <div class="step-block" onclick="lab5_Meta()">
            <h3>Тема, Мета, Місце розташування сайту, звіту</h3>
        </div>
        <!-- Завдання №1 -->
        <div class="step-block" onclick="lab5_Task_1()">
            <h3>Завдання №1</h3>
        </div>
        <div id="structure-1" class="structure"></div>
        <!-- Завдання №2 -->
        <div class="step-block" onclick="lab5_Task_2()">
            <h3>Завдання №2</h3>                
        </div>
        <div id="structure-2" class="structure"></div>
        </div>
        <!-- Завдання №3 -->
        <div class="step-block" onclick="lab5_Task_3()">
            <h3>Використання JS у сайті</h3>
        </div>
        </div>
        <!-- Висновки -->
        <div class="step-block" onclick="lab5_Conclusions()">
            <h3>Висновки</h3>
        </div>
    `;
    document.getElementById("steps").innerHTML = contentDiv;
    lab5_Meta();
}

function lab5_Meta() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
        <ol>
            <li>
                <b>Тема</b>: ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT                
            </li>
            <li>
            <b>Мета</b>: придбати практичні навички роботи з масивами у js-сценаріях.  Реалізація програм засовами мови JAVASCRIPT
            </li>
            <li>
            <b>Місце розташування</b>:
                <ul>
                    <li>
                    <b>Сайту</b>: <a href='https://github.com/VoranReygetov/ToyBox-WEB-4'>Ось</a>,
                    <a href='https://voranreygetov.github.io/ToyBox-WEB-4/'>Жива сторінка</a>
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

function lab5_Task_1() {
    // Отримуємо доступ до елемента div за допомогою його id
    let contentDiv = document.getElementById("structure-1");
    if (tableShown_1) {
        contentDiv.innerHTML = '';
        tableShown_1 = false;
    }
    else{
        // Змінюємо текст у елементі div
        contentDiv.innerHTML = `
            <div class="step-block-smaller" onclick="lab5_Task_1_1()">Task 1</div>
            <div class="step-block-smaller" onclick="lab5_Task_1_2()">Task 2</div>
        `;
        tableShown_1 = true;
    }
}

function lab5_Task_1_1(){
    let contentDiv = 
    `
    <p>Створити два одновимірних масива. Знайти найменший спільний двох масивів. Упорядкувати масив у порядку зростання методом бульбашки.</p>
    <div>
        <div class="flex-column-container">
            <img src="./imgs/lab5/1/1-1.png" class="img-big-size" alt="">
            HTML файл
        </div>
        
        <div class="flex-column-container">
            <img src="./imgs/lab5/1/1-2.png" class="img-big-size" alt="">
            JS файл
        </div>
        
        <div class="flex-column-container">
            <img src="./imgs/lab5/1/1-3.png" class="img-big-size" alt="">
            Демонстація роботи
        </div>                 
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function lab5_Task_1_2(){
    let contentDiv = 
    `
    <p>Реалізувати програму-будильник. Основні функції: увімкнення-вимкнення, уведення дати та часу.</p>
    <div>
            <div class="flex-column-container">
                <img src="./imgs/lab5/2/2-1.png" class="img-big-size" alt="">
                HTML файл
            </div>
            
            <div class="flex-column-container">
                <img src="./imgs/lab5/2/2-2.png" class="img-big-size" alt="">
                JS файл
            </div>
            
            <div class="flex-column-container">
                <img src="./imgs/lab5/2/2-3.png" class="img-big-size" alt="">
                Демонстація роботи
            </div>                 
    </div> 
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function lab5_Task_2() {
    // Отримуємо доступ до елемента div за допомогою його id
    let contentDiv = document.getElementById("structure-2");
    if (tableShown_2) {
        contentDiv.innerHTML = '';
        tableShown_2 = false;
    }
    else{
        // Змінюємо текст у елементі div
        contentDiv.innerHTML = `
            <div class="step-block-smaller" onclick="lab5_Task_2_1()">2,4,6</div>
            <div class="step-block-smaller" onclick="lab5_Task_2_2()">8,9,10</div>
        `;
        tableShown_2 = true;
    }
}

function lab5_Task_2_1(){
    let contentDiv = 
    `
    <p>Парні варіанти</p>
    <div>
        <div class="flex-column-container">
            Функція getProductDetails приймає ідентифікатор товару productId та дві колбек-функції: successCallback і errorCallback.
            <img src="./imgs/lab5/3/3-1.png" class="img-big-size" alt="">
            <img src="./imgs/lab5/3/3-2.png" class="img-big-size" alt="">
        </div>
        
        <div class="flex-column-container">
            Є масив міст з концертами, вивести де концерти ще не відбулися, відсортувати за датою і вивести в консоль.  
            <img src="./imgs/lab5/3/3-3.png" class="img-big-size" alt="">
            <img src="./imgs/lab5/3/3-4.png" class="img-big-size" alt="">
        </div>
        
        <div class="flex-column-container">
            Створити функцію, яка знижує ціну на 30% для медикаментів дорожче 300 та додати айді до кожного об'єкта у вихідному масиві.
            <img src="./imgs/lab5/3/3-5.png" class="img-big-size" alt="">
            <img src="./imgs/lab5/3/3-6.png" class="img-big-size" alt="">
        </div>        
    </div>       
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function lab5_Task_2_2(){
    let contentDiv = 
    `
    <p>Парні варіанти</p>
    <div>
        <div class="flex-column-container">
            Написати конструктор Storage для керування складом. Він отримує початковий масив товарів і зберігає його у властивості items. Методи класу:
            <ul>
                <li>getItems(): повертає масив товарів.</li>
                <li>addItem(item): додає новий товар до складу.</li>
                <li>removeItem(item): видаляє товар, якщо він є у складі.</li>
            </ul>
            <img src="./imgs/lab5/3/3-7.png" class="img-big-size" alt="">
            <img src="./imgs/lab5/3/3-8.png" class="img-big-size" alt="">
        </div>
        
        <div class="flex-column-container">
            Створити об'єкт, де ключі — назви тегів, а значення — кількість їхніх появ у масиві tweets.        
            <img src="./imgs/lab5/3/3-9.png" class="img-big-size" alt="">
            <img src="./imgs/lab5/3/3-10.png" class="img-big-size" alt="">
        </div>
        
        <div class="flex-column-container">
            Функція checkBrackets(str) перевіряє рядок коду на правильність відкриття і закриття круглих (), фігурних {}, та квадратних [] дужок. 
            <img src="./imgs/lab5/3/3-11.png" class="img-big-size" alt="">
            <img src="./imgs/lab5/3/3-12.png" class="img-big-size" alt="">
        </div>    
    </div>    
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function lab5_Task_3(){
    let contentDiv = 
    `
    Сценарії JS на сайті
    <div>
        <div class="flex-column-container">
            Використання JS для динамічного слайдеру рекомендацій
            <img src="./imgs/lab5/4/4-1.png" class="img-big-size" alt="">
            <p>Створення функцій онклік для кнопок уперед та назад, які змінюють активний елемент слайдеру.</p>
            <p>Встановлення інтервалу, який працює як натискання уперед кожні 3 секунди.</p>
            <p>Створення функції, яка змінює відображений елемент на слайдері, та змінює клас точок в залежності від активного елементу.</p>
        </div>
        <div class="flex-column-container">
            <img src="./imgs/lab5/4/4-2.png" class="img-big-size" alt="">
            <p>Результат роботи</p>
        </div>
    </div> 
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function lab5_Conclusions(){
    let contentDiv = 
    `
    <div>
        У ході лабораторної роботи розглянув основні аспекти роботи з масивами та об'єктами в JavaScript, здобув практичні навички з різних аспектів мови програмування JavaScript, включаючи:
        <ul>
            <ul>Робота з масивами:
                <li>
                    Вивчення методів масивів, таких як map, filter, forEach, sort, та інші.
                </li>
            </ul>
            <ul>Робота з об'єктами:
                <li>Оволодіння методами роботи з об'єктами, такими як Object.entries.</li>
            </ul>
            <ul>
                Колбек-функції:
                <li>
                    Використання колбеків для побудови динамічних та інтерактивних функцій.
                </li>
            </ul>
        </ul>
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function change_lab_work_6() {
    let contentDiv = 
    `
        <!-- Тема, мета -->
        <div class="step-block" onclick="lab6_Meta()">
            <h3>Тема, Мета, Місце розташування завдання, звіту</h3>
        </div>
        <!-- Завдання №2,4 -->
        <div class="step-block" onclick="lab6_Task_1()">
            <h3>Завдання №2,4,6</h3>
        </div>
        <div id="structure-1" class="structure"></div>
        <!-- Завдання №6,7,8 -->
        <div class="step-block" onclick="lab6_Task_2()">
            <h3>Завдання №6,7,8</h3>                
        </div>
        <div id="structure-2" class="structure"></div>
        </div>
        <!-- Завдання №9,10 -->
        <div class="step-block" onclick="lab6_Task_3()">
            <h3>Завдання №9,10</h3>
        </div>
        </div>
        <!-- Висновки -->
        <div class="step-block" onclick="lab6_Conclusions()">
            <h3>Висновки</h3>
        </div>
    `;
    document.getElementById("steps").innerHTML = contentDiv;
    lab6_Meta();
}

function lab6_Meta() {
    // Отримуємо доступ до елемента div за допомогою його id
    var contentDiv = document.getElementById("content");

    // Змінюємо текст у елементі div
    contentDiv.innerHTML = `
        <ol>
            <li>
                <b>Тема</b>: КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ. THROTTLE. МОДУЛЬНОСТЬ КОДУ         
            </li>
            <li>
            <b>Мета</b>: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT            
            </li>
            <li>
            <b>Місце розташування</b>:
                <ul>
                    <li>
                    <b>Завдання</b>: <a href='https://github.com/VoranReygetov/ToyBox-WEB-6'>Ось</a>,
                    <a href='https://voranreygetov.github.io/ToyBox-WEB-6/'>Жива сторінка</a>
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
function lab6_Task_1(){
    let contentDiv = 
    `
    <p>Завдання 2,4</p>
    <div>
        <div class="flex-column-container">
            «SWAP ME» міняє вміст інпутів:
            <img src="./imgs/lab6/1/6-1.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/1/6-3.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/1/6-5.png" class="img-big-size" alt="">
        </div>
        
        <div class="flex-column-container">
            "Зменшити" робить квадрат менше на 15 пікселів, "Збільшити" - збільшить.
            <img src="./imgs/lab6/1/6-2.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/1/6-4.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/1/6-6.png" class="img-big-size" alt="">
        </div>
    </div>  
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}
function lab6_Task_2(){
    let contentDiv = 
    `
    <p>Завдання 6,7,8</p>
    <div>
        <div class="flex-column-container">
            "Подвоїти", збільшити значення у кожному елементі списку у 2 рази, "Степінь" - в другу.
            <img src="./imgs/lab6/2/6-1.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/2/6-4.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/2/6-7.png" class="img-big-size" alt="">
        </div>
        
        <div class="flex-column-container">
            Порахує і виведе в консоль кількість категорій в ul#categories, кількість елементів в категорії
            <img src="./imgs/lab6/2/6-2.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/2/6-5.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/2/6-8.png" class="img-big-size" alt="">
        </div>

        <div class="flex-column-container">
            Відправлення форми, перевіряє, чи всі поля заповнені. Якщо не всі, виводиться повідомлення про заповнення всіх полів. Якщо всі поля заповнені, значення полів збираються в об'єкт, виводяться в консоль і поля форми очищаються.
            <img src="./imgs/lab6/2/6-3.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/2/6-6.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/2/6-9.png" class="img-big-size" alt="">   
        </div>
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function lab6_Task_3(){
    let contentDiv = 
    `
    <p>Завдання 9,10</p>
    <div>
        <div class="flex-column-container">
            Скрипт, який змінює колір фону елемента &lt;body&gt; через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
            <img src="./imgs/lab6/3/6-1.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/3/6-3.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/3/6-5.png" class="img-big-size" alt="">
        </div>
        
        <div class="flex-column-container">
            Скрипт, що дозволяє користувачеві створювати та очищувати колекцію елементів. Користувач вводить у поле кількість елементів, які хоче створити, та може створити їх, натиснувши кнопку "Create", а також очистити колекцію кнопкою "Destroy".
            <img src="./imgs/lab6/3/6-2.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/3/6-4.png" class="img-big-size" alt="">
            <img src="./imgs/lab6/3/6-6.png" class="img-big-size" alt="">
        </div>
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}

function lab6_Conclusions(){
    let contentDiv = 
    `
    <div>
        У ході лабораторної роботи працював з об'єктами, методами об'єкта, колбеками, стрілочними функціями та модульністю коду в мові JavaScript. 
    </div>
    `
    ;
    document.getElementById("content").innerHTML = contentDiv;
}