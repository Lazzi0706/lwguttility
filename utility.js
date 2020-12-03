var arrFAQ = [];
$("#faqWindowSubDivTextArea > p").each(function(index, obj) {
    arrFAQ.push(obj.innerHTML);
});

var FAQhtml = "<h2>Table Of Contents</h2><ul><li><a href='#basics'>Basics / How to Play</a></li><li><a href='#fullscreen'>Fullscreen</a></li><li><a href='#menu_ui'>Menu and UI</a></li><li><a href='#play'>Play</a></li><li><a href='#play_vs_cpu'>Play vs CPU</a></li><li><a href='#ranked_match'>Ranked Match</a></li><li><a href='#editor'>Editor</a></li><li><a href='#load_replay'>Load Replay</a></li><li><a href='#tutorials'>Tutorials</a></li><li><a href='#custom_ai'>Custom AI</a></li><li><a href='#littlechatgame'>LittleChatGame</a></li><li><a href='#aboutme'>About Me (The Developer)</a></li><li><a href='#bugs_issues'>Bugs &amp; Issues</a></li></ul>";

var languages = [
      {
            "name": "English",
            "id": 0,
            "size": 36,
            "playerGoldWrap": "Get more!",
            "options": [
                  ["switchQueriesButton", "Don't pop up Messages ingame"],
                  ["hotkeyWindowButton", "Hotkeys"],
                  ["openFaqButton", "F.A.Q."],
                  ["loadAIButton", "Load custom AI"],
                  ["scrollLabel", "Enable mouse scroll in non fullscreen mode<input id='scrollCheckbox' type='checkbox'>"],
                  ["mmLabel", "Invert middle mouse button scrolling<input id='mmCheckbox' type='checkbox'>"],
                  ["hpBarsLabel", "Don't show HP bars when full HP<input id='hpBarsCheckbox' type='checkbox'>"],
                  ["noMainMenuMusicLabel", "No menu / lobby music<input id='noMainMenuMusicCheckbox' type='checkbox'>"],
                  ["noRainLabel", "No Rain effects<input id='noRainCheckbox' type='checkbox'></p>"]
                  
            ],
            "lobby": [
                  ["lobbyCreateButton", "Play"],
                  ["singleplayerButton", "Play vs CPU"],
                  ["ladderButton", "Ranked Match"],
                  ["mapEditorButton", "Editor"],
                  ["replayButton", "Load Replay"],
                  ["lobbySaveReplayButton", "Save"],
                  ["tutorialButton", "Tutorials"],
            ],
            "friends": [
                  ["queriesTitle", "» Messages"],
                  ["noMessagesP", "No Messages"]
            ],
            "faq": [
                  ["basics", arrFAQ[0]],
                  ["fullscreen", arrFAQ[1]],
                  ["menu_ui", arrFAQ[2]],
                  ["play", arrFAQ[3]],
                  ["play_vs_cpu", arrFAQ[4]],
                  ["ranked_match", arrFAQ[5]],
                  ["editor", arrFAQ[6]],
                  ["load_replay", arrFAQ[7]],
                  ["tutorials", arrFAQ[8]],
                  ["custom_ai", arrFAQ[9]],
                  ["littlechatgame", arrFAQ[10]],
                  ["aboutme", arrFAQ[11]],
                  ["bugs_issues", arrFAQ[12]],
            ],
      },
      {
            "name": "Russian",
            "id": 1,
            "size": 20,
            "playerGoldWrap": "Получите больше!",
            "options": [
                  ["switchQueriesButton", "Всегда показывать сооб"],
                  ["hotkeyWindowButton", "Горячие клавиши"],
                  ["openFaqButton", "ЧаВо"],
                  ["loadAIButton", "Загрузить"],
                  ["scrollLabel", "Включить прокрутку мыши в неполноэкранном режиме<input id='scrollCheckbox' type='checkbox'>"],
                  ["mmLabel", "Инвертировать прокрутку средней кнопкой мыши<input id='mmCheckbox' type='checkbox'>"],
                  ["hpBarsLabel", "Показывать здоровье только при получении урона <input id='hpBarsCheckbox' type='checkbox'>"],
                  ["noMainMenuMusicLabel", "Отключить музыку в меню/лобби <input id='noMainMenuMusicCheckbox' type='checkbox'>"],
                  ["noRainLabel", "Отключить эффекты дождя <input id='noRainCheckbox' type='checkbox'></p>"]
            ],
            "lobby": [
                  ["lobbyCreateButton", "Играть"],
                  ["singleplayerButton", "Игра против ИИ"],
                  ["ladderButton", "Рейтинговая игра"],
                  ["mapEditorButton", "Редактор"],
                  ["replayButton", "Повтор"],
                  ["lobbySaveReplayButton", "Сохранить повтор"],
                  ["tutorialButton", "Обучение"],
            ],
            "friends": [
                  ["queriesTitle", "» Сообщения "],
                  ["noMessagesP", "Новые сообщения отсутствуют "]
            ],
            "faq": [
                  ["basics", "LittleWarGame - это стратегия в реальном времени (RTS), в которой вы начинаете с главного здания и нескольких рабочих, с целью создать армию, и победить своих оппонентов. Если у вас есть опыт игры в других играх жанра RTS, то вы обнаружите много сходств с ними. Если Вы ещё знакомитесь с жанром, попробуйте раздел «Обучение» в правом нижнем углу экрана.<br> Веселитесь!"],
                  ["fullscreen", "Вы можете в любой момент нажать F8, чтобы переключиться в полноэкранный режим. Снова нажмите F8, чтобы выйти из полноэкранного режима."],
                  ["menu_ui", "Все игровые режимы доступны прямо из главного экрана с помощью кнопок внизу. В разделе «Лобби» показаны все многопользовательские игры, которые в данный момент созданы.Вы можете присоединиться к любой игре, которая ещё не запущена, чтобы погрузиться в многопользовательский режим! По центру находится глобальный чат. Правее находится список всех игроков, которые сейчас онлайн. Игроки, играющие как "гость", отображаются серым цветом, зарегистрированные пользователи - желтым, модераторы - оранжевым, а администраторы - красным."],
                  ["play", "Эта кнопка открывает список всех карт в LWG и позволяет вам искать карту, создавать название для вашего лобби и устанавливать на него пароль. После того, как вы выбрали карту и подтвердили создание лобби, оно будет отображено в разделе "Лобби", где другие игроки смогут увидеть ее и присоединиться к ней. Как создатель комнаты, вы будете иметь возможность перемещать игроков в другие слоты, выгонять их."],
                  ["play_vs_cpu", "Работает так же, как кнопка «Играть», но игра не будет отображаться в окне «Игры», и другие игроки не смогут присоединиться к ней. Вместо этого вы можете играть против противников CPU. Отлично подходит для практики и знакомства с LWG."],
                  ["ranked_match", "При заходе в  рейтинговом матче автоматически ищет соперника и начинает игру 1 на 1 на указанной карте. Победитель получит рейтинговые очки, а проигравший потеряет рейтинговые очки. После первых пяти игр вы попадете в дивизион. Ваш дивизион и ваш рейтинг в нем могут меняться по мере того, как вы выигрываете или проигрываете игры."],
                  ["editor", "Редактор позволяет игрокам создавать свои собственные карты или изменять существующие карты. Вы можете размещать юниты, здания, скалы, деревья и многое другое. Нажав кнопку «Данные» в редакторе, вы можете изменить способности, значения или атрибуты любого юнита или здания в игре для вашей карты. Как только вы будете удовлетворены своей картой и дадите ей имя и описание в поле «Настройки», выберите «Загрузить», чтобы добавить ее в список карт, где любой игрок сможет найти и разместить ее.Посмотрим, что у вас получится!"],
                  ["load_replay", "После завершения игры вы увидите окно статистики с кнопкой «Сохранить повтор». Нажав на нее, вы сможете сохранить ваш повтор в файл. Вы можете просмотреть этот повтор, выбрав «Загрузить повтор» и перейдя к этому файлу воспроизведения."],
                  ["tutorials", "Загружает экран с несколькими учебными пособиями, которые расскажут вам об основах игры. После выбора учебного пособия для игры прочтите описание справа от изображения карты. Когда будете готовы, нажмите «Старт»! Свяжитесь с модератором (оранжевое имя игрока), если у вас есть какие-либо вопросы или предложения."],
                  ["custom_ai", "В LWG можно написать свой собственный ИИ, используя javascript. Вы можете получить больше информации ЗДЕСЬ. Когда вы закончите писать ИИ, нажмите кнопку «Параметры» в верхней левой части экрана и нажмите «Загрузить собственный ИИ». Выберите файл, содержащий AI, чтобы загрузить его."],
                  ["littlechatgame", "LittleChatGame - это мини-игра, в которую вы можете играть в чате лобби LittleWarGame, используя эмоции, которые вы разблокировали или приобрели. Для получения дополнительной информации введите в чате '/ lcg help'."],
                  ["aboutme", "Я Ксао. Я взял на себя разработку LittleWarGame от JBS (предыдущий разработчик) в конце 2019 года, после того как разработка остановилась в 2016 году после трех лет обновлений. Я был одним из первых игроков, и я рад быть здесь и вдохнуть новую жизнь в игру благодаря новому партнерству с AddictingGames!"],
                  ["bugs_issues", "Есть несколько мелких известных проблем, связанных с браузером. Если у вас возникнут какие-либо проблемы, часто помогает отключить плагины и / или блокировку рекламы. Если есть вопросы, обращайтесь к модератору или админу. Вы также можете сообщать о проблемах на нашем Discord, Reddit или напрямую на lwgxao@gmail.com."],
            ],
      }
];

let buttonLanguages = document.createElement('button');
buttonLanguages.innerHTML = "Languages";

$("#optionsButtonsDiv").append(buttonLanguages);

buttonLanguages.onclick = function() {
      let html = '<h1>Languages</h1><br>';
      languages.map((lang) => {
            html += "<button style='margin: 5px' onclick = 'getLanguages(" + lang.id + ")'>" + lang.name + "</button>";
            return html;
      });
      displayInfoMsg2(html);
};

let htmlfaq;
function getLanguages(id) {
      changeFAQ(id);
      $("#playerGoldWrap > button")[0].innerText = languages[id].playerGoldWrap;
      for(let i = 0; i < languages[id].options.length; i++) {
            console.log(id, i);
            document.getElementById(languages[id].options[i][0]).innerHTML = languages[id].options[i][1];
      }
      //lobby
      for(let i = 0; i < languages[id].lobby.length; i++) {
            document.getElementById(languages[id].lobby[i][0]).innerHTML = languages[id].lobby[i][1];
            document.getElementById(languages[id].lobby[i][0]).style.fontSize  = "" + languages[id].size + "px";
      }
      //friends
      for(let i = 0; i < languages[id].lobby.length; i++) {
            document.getElementById(languages[id].friends[i][0]).innerHTML = languages[id].friends[i][1];
      }
}

function changeFAQ(id) {
      htmlfaq = '';
      htmlfaq = FAQhtml + "<h2 id='basics'>Basics / How to Play</h2><p>" + languages[id].faq[0][1] + "</p><h2 id='fullscreen'>Fullscreen</h2><p>" + languages[id].faq[1][1] + "</p><h2 id='menu_ui'>Menu and UI</h2><p>" + languages[id].faq[2][1] + "</p><h2 id='play'>Play</h2><p>" + languages[id].faq[3][1] + "</p><h2 id='play_vs_cpu'>Play vs CPU</h2><p>" + languages[id].faq[4][1] + "</p><h2 id='ranked_match'>Ranked Match</h2><p>" + languages[id].faq[5][1] + "</p><h2 id='editor'>Editor</h2><p>" + languages[id].faq[6][1] + "</p><h2 id='load_replay'>Load Replay</h2><p>" + languages[id].faq[7][1] + "</p><h2 id='tutorials'>Tutorials</h2><p>" + languages[id].faq[8][1] + "</p><h2 id='custom_ai'>Custom AI</h2><p>" + languages[id].faq[9][1] + "</p><h2 id='littlechatgame'>LittleChatGame</h2><p>" + languages[id].faq[10][1] + "</p><h2 id='aboutme'>The Developers</h2><p>" + languages[id].faq[11][1] + "</p><h2 id='bugs_issues'>Bugs &amp; issues</h2><p>" + languages[id].faq[12][1] + "</p>";
      console.log(htmlfaq);
      return htmlfaq;
}

setInterval(() => document.getElementById("faqWindowSubDivTextArea").innerHTML = htmlfaq, 1000);
