// TODO нужно переписать author, потому что нужны склонения
export const questions: Array<{
    author: string,
    avatar: string,
    question: string,
    city: string,
    answers: Array<{
        text: string,
        isCorrect: boolean
    }>
}> = [
    // 1)
    {
        "author": "Елена Вотчинова",
        "avatar": "votchinova.png",
        "question": "Елена увлекается занятием экзотического происхождения. Как думаете, какое хобби у Елены?",
        "city": "из Нижнего Новгорода",
        "answers": [
            { "text": "Американский рестлинг", "isCorrect": false },
            { "text": "Африканский хип-хоп", "isCorrect": false },
            { "text": "Тайский бокс", "isCorrect": true }
        ]
    },

    // 2)
    {
        "author": "Артём Полтавец",
        "avatar": "poltavec.png",
        "question": "В хобби Артёма живёт настоящий дух молодости. Угадаете, чем Артём занимается вечерами?",
        "city": "из Москвы",
        "answers": [
            { "text": "Создаёт игры в Роблоксе", "isCorrect": false },
            { "text": "Собирает автомобили из Lego", "isCorrect": true },
            { "text": "Любит сладости", "isCorrect": false }
        ]
    },

    // 3)
    {
        "author": "Антон Югай",
        "avatar": "yugai.png",
        "question": "У самурая нет цели, только путь. А у Антона…",
        "city": "из Москвы",
        "answers": [
            { "text": "Нет дома, есть только квартира", "isCorrect": false },
            { "text": "Нет мечты, есть только цели", "isCorrect": true },
            { "text": "Нет собаки, есть только хомяк", "isCorrect": false }
        ]
    },

    // 4)
    {
        "author": "Евгений Бобров",
        "avatar": "bobrov.png",
        "question": "Евгений живёт эту жизнь на 100%. Но есть одна вещь, которую он сделал только наполовину. Какая?",
        "city": "из Москвы",
        "answers": [
            { "text": "Пробежал полумарофон", "isCorrect": true },
            { "text": "Объехал полмира", "isCorrect": false },
            { "text": "Евгений всё доводит до конца", "isCorrect": false }
        ]
    },

    // 5)
    {
        "author": "Специальный вопрос о сотрудниках «Северстали»",
        "avatar": "severstal.png",
        "question": "На вопрос о лучшем дне в жизни 90% участников опроса ответили именно так. Догадаетесь?",
        "city": "",
        "answers": [
            { "text": "День рождения ребёнка", "isCorrect": true },
            { "text": "Выпускной", "isCorrect": false },
            { "text": "Праздник огурца", "isCorrect": false }
        ]
    },

    // 6)
    {
        "author": "Алена Павлова",
        "avatar": "pavlova.png",
        "question": "Алёна часто занимается добрыми делами после работы. Угадаете в какой сфере?",
        "city": "из Череповца",
        "answers": [
            { "text": "Посадила 80 деревьев", "isCorrect": false },
            { "text": "Провела 5 субботников", "isCorrect": false },
            { "text": "Спасла 11 собак из приюта", "isCorrect": true }
        ]
    },

    // 7)
    {
        "author": "Сергей Ливкоев",
        "avatar": "livkoev.png",
        "question": "У Сергея есть кот, которого он назвал в честь героя популярного мультфильма. Как?",
        "city": "из Череповца",
        "answers": [
            { "text": "Матроскин", "isCorrect": false },
            { "text": "Морти", "isCorrect": true },
            { "text": "Спанч Боб", "isCorrect": false }
        ]
    },

    // 8)
    {
        "author": "Татьяна Кузерова",
        "avatar": "kuzerova.png",
        "question": "Самое необычное событие, на котором Татьяна была в 2024 — это концерт…",
        "city": "из Волгограда",
        "answers": [
            { "text": "«Короля и Шута»", "isCorrect": true },
            { "text": "Поющих фонтанов", "isCorrect": false },
            { "text": "Metallica", "isCorrect": false }
        ]
    },

    // 9)
    {
        "author": "Специальный вопрос о сотрудниках «Северстали»",
        "avatar": "severstal.png",
        "question": "В Северстали любят анекдоты. Угадаете, как звучит самый популярный?",
        "city": "",
        "answers": [
            { "text": "Красная шапочка посинела", "isCorrect": false },
            { "text": "Колобок повесился", "isCorrect": true },
            { "text": "Буратино пустил корни", "isCorrect": false }
        ]
    },

    // 10)
    {
        "author": "Иван Герасимов",
        "avatar": "gerasimov.png",
        "question": "Иван живёт в самом культурном городе России, но в глубине души хотел бы жить…",
        "city": "из Санкт-Петербурга",
        "answers": [
            { "text": "В Москве, потому что все хотят", "isCorrect": false },
            { "text": "В Антарктиде с 3 пингвинами", "isCorrect": false },
            { "text": "В деревне с пятью гусями", "isCorrect": true }
        ]
    },

    // 11)
    {
        "author": "Игорь Доев",
        "avatar": "doev.png",
        "question": "Помимо крутой работы, у Игоря одно время было очень крутое хобби. Какое?",
        "city": "из Москвы",
        "answers": [
            { "text": "Читал рэп", "isCorrect": true },
            { "text": "Занимался киберспортом", "isCorrect": false },
            { "text": "Занимался бальными танцами", "isCorrect": false }
        ]
    },

    // 12)
    {
        "author": "Специальный вопрос о сотрудниках «Северстали»",
        "avatar": "severstal.png",
        "question": "Какое домашнее животное чаще всего можно встретить у наших сотрудников?",
        "city": "",
        "answers": [
            { "text": "Собачек", "isCorrect": false },
            { "text": "Котиков", "isCorrect": true },
            { "text": "Динозавров", "isCorrect": false }
        ]
    },

    // 13)
    {
        "author": "Елена Кукушкина",
        "avatar": "kukushkina.png",
        "question": "Лучшее путешествие в жизни Елены было на Чукотку. В какой стране мечтает побывать Елена?",
        "city": "из Ярославля",
        "answers": [
            { "text": "Северная Корея", "isCorrect": false },
            { "text": "Китай", "isCorrect": true },
            { "text": "Южная Корея", "isCorrect": false }
        ]
    },

    // 14)
    {
        "author": "Ирина Соломенко",
        "avatar": "solomenko.png",
        "question": "Ирина ОЧЕНЬ любит гулять. Как думаете, сколько километров она прошла за лето 2024 года?",
        "city": "из Череповца",
        "answers": [
            { "text": "543", "isCorrect": false },
            { "text": "727", "isCorrect": false },
            { "text": "908", "isCorrect": true }
        ]
    },

    // 15)
    {
        "author": "Георгий Стерляжников",
        "avatar": "sterlyazhnikov.png",
        "question": "Что Георгий мечтает сделать в этой жизни своими руками?",
        "city": "из Костомукши",
        "answers": [
            { "text": "Построить дом", "isCorrect": true },
            { "text": "Приготовить борщ", "isCorrect": false },
            { "text": "Написать книгу 🤗", "isCorrect": false }
        ]
    },

    // 16)
    {
        "author": "Екатерина Фадеева",
        "avatar": "fadeeva.png",
        "question": "Екатерина умеет выполнять один практически цирковой трюк. Угадаете, какой?",
        "city": "из Череповца",
        "answers": [
            { "text": "Жонглирование 5-ю предметами", "isCorrect": false },
            { "text": "Шпагат на ходулях", "isCorrect": true },
            { "text": "Сальто назад", "isCorrect": false }
        ]
    },

    // 17)
    {
        "author": "Оксана Селиверстова",
        "avatar": "selivestrova.png",
        "question": "Оксана мечтает увидеть кое-каких необычных животных в необычном месте. Каких и где?",
        "city": "из Нижнего Новгорода",
        "answers": [
            { "text": "Пингвинов в ЮАР", "isCorrect": true },
            { "text": "Страусов в Австралии", "isCorrect": false },
            { "text": "Слонов в Антарктиде", "isCorrect": false }
        ]
    },

    // 18)
    {
        "author": "Антон Юзов",
        "avatar": "yuzov.png",
        "question": "Лучший день в жизни Антона — это…",
        "city": "из Череповца",
        "answers": [
            { "text": "Новый год-2012", "isCorrect": false },
            { "text": "День рождения кота", "isCorrect": false },
            { "text": "Пятница", "isCorrect": true }
        ]
    },

    // 19)
    {
        "author": "Вера Куницына",
        "avatar": "kunicina.png",
        "question": "Сколько воздушных шариков Вера может надуть за раз?",
        "city": "из Колпино",
        "answers": [
            { "text": "12", "isCorrect": false },
            { "text": "50", "isCorrect": true },
            { "text": "Около вагона", "isCorrect": false }
        ]
    },

    // 20)
    {
        "author": "Анастасия Савёлова",
        "avatar": "savelova.png",
        "question": "О каком навыке обращения с животными Анастасия знает не понаслышке?",
        "city": "из Череповца",
        "answers": [
            { "text": "Как доить козу", "isCorrect": true },
            { "text": "Как успокоить злого кота", "isCorrect": false },
            { "text": "Как победить медведя", "isCorrect": false }
        ]
    },

    // 21)
    {
        "author": "Александр Ким",
        "avatar": "kim.png",
        "question": "Александр увлекается юмором. Как думаете, в каком формате?",
        "city": "из Череповца",
        "answers": [
            { "text": "Ведёт паблик с мемами", "isCorrect": false },
            { "text": "Выступает со стендапом", "isCorrect": true },
            { "text": "Поёт частушки", "isCorrect": false }
        ]
    },

    // 22)
    {
        "author": "Екатерина Петухова",
        "avatar": "petuhova.png",
        "question": "Какие необычные животные живут дома у Екатерины?",
        "city": "из Череповца",
        "answers": [
            { "text": "Петухи", "isCorrect": false },
            { "text": "Муравьи", "isCorrect": true },
            { "text": "Муравьеды", "isCorrect": false }
        ]
    },

    // 23)
    {
        "author": "Екатерина Пелевина",
        "avatar": "pelevina.png",
        "question": "Екатерина — желанный гость на любом празднике, потому что она умеет…",
        "city": "из Нижнего Новгорода",
        "answers": [
            { "text": "Готовить оливье", "isCorrect": false },
            { "text": "Петь в караоке", "isCorrect": false },
            { "text": "Играть на баяне", "isCorrect": true }
        ]
    },

    // 24)
    {
        "author": "Ирина Шанаева",
        "avatar": "shanaeva.png",
        "question": "Во сколько лет Ирина впервые попала в металлургию?",
        "city": "из Череповца",
        "answers": [
            { "text": "В 5 лет", "isCorrect": true },
            { "text": "В 13 лет", "isCorrect": false },
            { "text": "В 18 лет и 1 день", "isCorrect": false }
        ]
    },

    // 25)
    {
        "author": "Ольга Тычкова",
        "avatar": "tichkova.png",
        "question": "Как называется благотворительный фонд, в котором Ольга поддерживает любимых животных?",
        "city": "из Москвы",
        "answers": [
            { "text": "«Апероль Шпиц»", "isCorrect": true },
            { "text": "«КосмополиКот»", "isCorrect": false },
            { "text": "«Шам Пань Пудель»", "isCorrect": false }
        ]
    },

    // 26)
    {
        "author": "Виктория Баранова",
        "avatar": "baranova.png",
        "question": "Виктория увлекается реконструкцией. Угадаете, реконструкцией чего?",
        "city": "из Волгограда",
        "answers": [
            { "text": "Костюмов эпохи викингов", "isCorrect": true },
            { "text": "Сцены из «Ледового побоища»", "isCorrect": false },
            { "text": "Стадиона «Динамо»", "isCorrect": false }
        ]
    },

    // 27)
    {
        "author": "Богдан Гнусин",
        "avatar": "gnusin.png",
        "question": "Богдан обожает настольные игры. Сколькичасовую партию однажды он сыграл, не выходя из-за стола?",
        "city": "из Москвы",
        "answers": [
            { "text": "Шесть", "isCorrect": false },
            { "text": "Восемь с половиной", "isCorrect": false },
            { "text": "Двенадцать", "isCorrect": true }
        ]
    },

    // 28)
    {
        "author": "Анна Ушакова",
        "avatar": "ushakova.png",
        "question": "В среднем у людей их четыре, а у Анны целых 22. Догадаетесь, о чём речь?",
        "city": "из Череповца",
        "answers": [
            { "text": "Котов", "isCorrect": false },
            { "text": "Кактусов", "isCorrect": false },
            { "text": "Двоюродных племянников", "isCorrect": true }
        ]
    },

    // 29)
    {
        "author": "Алёна Павлова",
        "avatar": "pavlova.png",
        "question": "Алёну все друзья зовут Алёной. Но в паспорте её имя написано иначе. Как?",
        "city": "из Череповца",
        "answers": [
            { "text": "Алена", "isCorrect": true },
            { "text": "Елена", "isCorrect": false },
            { "text": "Алина", "isCorrect": false }
        ]
    },

    // 30)
    {
        "author": "Дмитрий Масалыкин",
        "avatar": "masalikin.png",
        "question": "Домашнее животное Дмитрия зовут очень вкусным именем. Отгадайте правильный вариант!",
        "city": "из Воронежа",
        "answers": [
            { "text": "Кошка Фисташка", "isCorrect": true },
            { "text": "Пёс Пельмень", "isCorrect": false },
            { "text": "Рыбка Шаурма", "isCorrect": false }
        ]
    },

    // 31)
    {
        "author": "Алла Соловей",
        // TODO добавить
        "avatar": "",
        "question": "До начала карьеры в металлургии Алла подрабатывала в магической индустрии. Кем?",
        "city": "из Севастополя",
        "answers": [
            { "text": "Подмастерьем белого мага в лесу", "isCorrect": false },
            { "text": "Помощницей Санта Клауса на Голливудском бульваре", "isCorrect": true },
            { "text": "Куклой колдуна в известной группе", "isCorrect": false }
        ]
    },

    // 32)
    {
        "author": "Никита Карев",
        "avatar": "karev.png",
        "question": "Никита любитель экстремальных гастрономических впечатлений. Что в жизни пробовал Никита?",
        "city": "из Череповца",
        "answers": [
            { "text": "Самый старый бургер", "isCorrect": false },
            { "text": "Самый острый перец", "isCorrect": true },
            { "text": "Самую сладкую вату", "isCorrect": false }
        ]
    },

    // 33)
    {
        "author": "Денис Мартынов",
        "avatar": "martinov.png",
        "question": "Хорошие вещи нужны не только людям, но и животным. Что и для каких животных мастерит Денис?",
        "city": "из Череповца",
        "answers": [
            { "text": "Кормушки для птиц", "isCorrect": false },
            { "text": "Костюмчики для ежей", "isCorrect": false },
            { "text": "Домики для шмелей", "isCorrect": true }
        ]
    },

    // 34)
    {
        "author": "Татьяна Громова",
        "avatar": "gromova.png",
        "question": "У Татьяны дома есть триста…",
        "city": "из Череповца",
        "answers": [
            { "text": "Рублей", "isCorrect": false },
            { "text": "Домашних растений", "isCorrect": true },
            { "text": "Коллекционных фигурок", "isCorrect": false }
        ]
    },

    // 35)
    {
        "author": "Анна Павлова",
        "avatar": "pavlova-anna.png",
        "question": "Анна боится высоты. Угадаете любимое хобби Анны?",
        "city": "из Череповца",
        "answers": [
            { "text": "Собирание грибов", "isCorrect": false },
            { "text": "Дайвинг", "isCorrect": false },
            { "text": "Прыжки с парашютом", "isCorrect": true }
        ]
    },

    // 36)
    {
        "author": "Галина Ковина",
        "avatar": "kovina.png",
        "question": "Галина работала внештатным корреспондентом в газете с удивительным названием. Каким?",
        "city": "из Череповца",
        "answers": [
            { "text": "«Фанерщик Прикамья»", "isCorrect": true },
            { "text": "«Красный Якутянин»", "isCorrect": false },
            { "text": "«Забайкальская Неправда»", "isCorrect": false }
        ]
    },

    // 37)
    {
        "author": "Оксана Самсонова",
        "avatar": "samsonova.png",
        "question": "Однажды Оксана написала биографию…",
        "city": "из Череповца",
        "answers": [
            { "text": "Леонида Брежнева", "isCorrect": false },
            { "text": "Генерального директора «Северстали»", "isCorrect": false },
            { "text": "Своей бабушки", "isCorrect": true }
        ]
    },

    // 38)
    {
        "author": "Ксения Величко",
        "avatar": "velichko.png",
        "question": "Однажды Ксения 3 недели прожила с компанией очень необычных соседей. Кто это был?",
        "city": "из Нижнего Новгорода",
        "answers": [
            { "text": "Французские монашки", "isCorrect": true },
            { "text": "Бельгийские шоколатье", "isCorrect": false },
            { "text": "Австралийские сёрферы", "isCorrect": false }
        ]
    },

    // 39)
    {
        "author": "Антон Евсеев",
        "avatar": "evseev.png",
        "question": "Антон — заядлый футбольный фанат. Угадаете, какой лучший день в жизни Антона?",
        "city": "из Костомукши",
        "answers": [
            { "text": "День чемпионства Локомотива", "isCorrect": true },
            { "text": "Финал ЧМ-2018", "isCorrect": false },
            { "text": "Когда сборная РФ подарила ему настоящий футбольный мяч", "isCorrect": false }
        ]
    },

    // 40)
    {
        "author": "Ольга Тихомирова",
        "avatar": "tikhomirova.png",
        "question": "Ольга занимается коллекционированием кое-чего очень яркого. Чего же именно?",
        "city": "из Череповца",
        "answers": [
            { "text": "Красной помады", "isCorrect": true },
            { "text": "Зелёных попугаев", "isCorrect": false },
            { "text": "Жёлтых Миньонов", "isCorrect": false }
        ]
    },

    // 41)
    {
        "author": "Галина Верещагина",
        "avatar": "vereschagina.png",
        "question": "Зачем Галина хочет научиться водить автомобиль?",
        "city": "из Москвы",
        "answers": [
            { "text": "Проехать всю Россию", "isCorrect": false },
            { "text": "Выжить в зомби-апокалипсисе", "isCorrect": true },
            { "text": "Поспорила с друзьями, что сдаст на права с первого раза", "isCorrect": false }
        ]
    },

    // 42)
    {
        "author": "Ольга Потапова",
        "avatar": "potapova.png",
        "question": "Ольга пишет стихи в былинном стиле. В каком необычном месте ей удалось их однажды почитать?",
        "city": "из Москвы",
        "answers": [
            { "text": "На концерте Стаса Михайлова", "isCorrect": true },
            { "text": "В эфире «Что? Где? Когда?»", "isCorrect": false },
            { "text": "На космической станции", "isCorrect": false }
        ]
    },

    // 43)
    {
        "author": "Сергей Протасов",
        "avatar": "protasov.png",
        "question": "Однажды, Сергей был с товарищами на рыбалке и…",
        "city": "из Санкт-Петербурга",
        "answers": [
            { "text": "Поймал вооооот такого леща", "isCorrect": false },
            { "text": "Был сам пойман за нос спиннингом", "isCorrect": true },
            { "text": "Никто ничего не поймал", "isCorrect": false }
        ]
    },

    // 44)
    {
        "author": "Надежда Ладынская",
        "avatar": "ladinskaya.png",
        "question": "За 20 лет Надежда не пропустила ни одной…",
        "city": "из Липецка",
        "answers": [
            { "text": "Распродажи", "isCorrect": false },
            { "text": "Серии сериалы «Сваты»", "isCorrect": false },
            { "text": "Гонки «Формула-1»", "isCorrect": true }
        ]
    },

    // 45)
    {
        "author": "Анастасия Маковозова",
        "avatar": "makovozova.png",
        "question": "Шесть месяцев в году Анастасия добирается на работу необычным способом. Каким?",
        "city": "из Волгограда",
        "answers": [
            { "text": "На велосипеде", "isCorrect": true },
            { "text": "На лыжах", "isCorrect": false },
            { "text": "На роликах", "isCorrect": false }
        ]
    },

    // 46)
    {
        "author": "Артём Данилин",
        // TODO добавить
        "avatar": "",
        "question": "Артём мечтает однажды взять отпуск для того, чтобы месяц поработать…",
        "city": "из Череповца",
        "answers": [
            { "text": "Тестировщиком пива", "isCorrect": false },
            { "text": "Охотником на привидений", "isCorrect": false },
            { "text": "Переворачивателем пингвинов", "isCorrect": true }
        ]
    },

    // 47)
    {
        "author": "Ольга Сбродова",
        "avatar": "sbrodova.png",
        "question": "Что Ольге нравится больше всего делать в любой непонятной ситуации?",
        "city": "из Санкт-Петербурга",
        "answers": [
            { "text": "Спать", "isCorrect": false },
            { "text": "Заниматься спортом", "isCorrect": true },
            { "text": "Играть в онлайн-квизы", "isCorrect": false }
        ]
    },

    // 48)
    {
        "author": "Елена Черняева",
        "avatar": "chernyaeva.png",
        "question": "Во время студенчества Елена каждый день ездила…",
        "city": "из Москвы",
        "answers": [
            { "text": "Из Европы в Азию", "isCorrect": true },
            { "text": "Из Южной Америки в Северную", "isCorrect": false },
            { "text": "На моноколесе", "isCorrect": false }
        ]
    },

    // 49)
    {
        "author": "Амур, кот Дарьи Шнитко",
        "avatar": "shnitko.png",
        "question": "Меня назвали в честь римского бога любви. Но как меня зовут дома?",
        "city": "из Костомукши",
        "answers": [
            { "text": "Мур", "isCorrect": false },
            { "text": "Лемур", "isCorrect": false },
            { "text": "Манюня", "isCorrect": true }
        ]
    },

    // 50)
    {
        "author": "Игорь Пискунов",
        "avatar": "piskunov.png",
        "question": "У кого в гостях мечтает когда-нибудь побывать Игорь?",
        "city": "из Череповца",
        "answers": [
            { "text": "У Деда Мороза", "isCorrect": false },
            { "text": "У какого-нибудь племени в джунглях", "isCorrect": true },
            { "text": "У гендиректора Северстали", "isCorrect": false }
        ]
    },
]