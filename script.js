let pitanje1 = {
  tekst: 'Film "Dobar, los, zao" je po zanru?',
  odgovori: ["Film-noir", "Akcija", "Ljubavni", "Spageti vestern"],
  indexTacnogOdgovora: 3,
};

let pitanje2 = {
  tekst:
    'Koji slavni glumac je odbio Oskara zbog loseg tretmana Indijanaca u Americi, i u svoje ime poslao Indijanku "Malo Pero" da procita govor?',
  odgovori: ["Dzon Vejn", "Marlon Brando", "Keri Grant", "Robert De Niro"],
  indexTacnogOdgovora: 1,
};

let pitanje3 = {
  tekst: "Koji cuveni glumac je u mladosti bio robovlasnik?",
  odgovori: ["Hemfri Bogart", "Sidni Poatje", "Erol Flin", "Carli Caplin"],
  indexTacnogOdgovora: 2,
};

let pitanje4 = {
  tekst:
    'Ko je bio najbolji prijatelj spanskog rezisera Luisa Bunjuela, i saradjivao s njim na filmu "Andaluzijski pas"?',
  odgovori: ["Salvador Dali", "Frida Kalo", "Dalaj Lama", "Josip Broz Tito"],
  indexTacnogOdgovora: 0,
};

let pitanje5 = {
  tekst:
    "Jedna od najboljih glumica Merilin Monro ima iza sebe koju od ponudjenih prestiznih nagrada?",
  odgovori: ["Oskar", "BAFTA", "Zlatni globus", "Zlatni medved"],
  indexTacnogOdgovora: 2,
};

let pitanje6 = {
  tekst: "Kako se zove nagrada koja se dodeljuje za najgoreg glumca/glumicu?",
  odgovori: ["Zlatni pecat", "Zlatni globus", "Zlatna kupina", "Zlatna malina"],
  indexTacnogOdgovora: 3,
};

let pitanje7 = {
  tekst:
    "Koji poznati glumac je za vreme Drugog svetskog rata bio unajmljen od strane Britanske vlade da lovi nacisticke simpatizere u Holivudu?",
  odgovori: ["Keri Grant", "Pol Njumen", "Stiv Mekvin", "Dzejms Din"],
  indexTacnogOdgovora: 0,
};

let pitanje8 = {
  tekst:
    'Koji poznati glumac je poginuo sa samo 24 godine u svom poznatom "Porseu"?',
  odgovori: ["River Finiks", "Montgomeri Klif", "Robert Redford", "Dzejms Din"],
  indexTacnogOdgovora: 3,
};

let pitanje9 = {
  tekst: "Koliko puta se udavala slavna Elizabet Tejlor?",
  odgovori: [6, 7, 8, 9],
  indexTacnogOdgovora: 2,
};

let pitanje10 = {
  tekst: 'Koji rat je u sredistu filma "Kosa"?',
  odgovori: [
    "Vijetnamski rat",
    "Korejski rat",
    "Drugi svetski rat",
    "Spanski gradjanski rat",
  ],
  indexTacnogOdgovora: 0,
};

let pitanje11 = {
  tekst: "Koje godine je projektovan prvi zvucni film?",
  odgovori: [1917, 1922, 1927, 1932],
  indexTacnogOdgovora: 2,
};

let pitanje12 = {
  tekst: 'Takozvana "pre-code" era filmova obuhvata filmove bez..?',
  odgovori: ["Zvuka", "Boje", "Publike", "Cenzure"],
  indexTacnogOdgovora: 3,
};

let pitanje13 = {
  tekst:
    "Najlosijim reziserom u istoriji filma smatra se koji americki reziser?",
  odgovori: ["Martin Skorseze", "Ed Vud", "Dzejn Fonda", "Sofija Kopola"],
  indexTacnogOdgovora: 1,
};

let pitanje14 = {
  tekst:
    'Cuvena zvezda filma "Prohujalo s vihorom", Olivija de Havilend, bila je u jako losim odnosima sa rodjenom sestrom, takodje velikom glumicom koja se zvala?',
  odgovori: ["Elizabet Tejlor", "Bet Dejvis", "Dzoun Fontejn", "Dzoan Kraford"],
  indexTacnogOdgovora: 2,
};

let pitanje15 = {
  tekst:
    "Sta je proslavljeni svedski reziser Ingmar Bergman bio poznatoj glumici Ingrid Bergman?",
  odgovori: ["Otac", "Stric", "Brat", "Nista"],
  indexTacnogOdgovora: 3,
};

let pitanje16 = {
  tekst: "Koja godine je bio dodeljen prvi Oskar?",
  odgovori: [1909, 1919, 1929, 1939],
  indexTacnogOdgovora: 2,
};

let pitanje17 = {
  tekst: "Sta je reziser Frensis Ford Kopola glumcu Nikolas Kejdzu?",
  odgovori: ["Nista", "Brat", "Stric", "Otac"],
  indexTacnogOdgovora: 2,
};

let pitanje18 = {
  tekst:
    'Kom poznatom glumcu su poslednje reci glasile: "Znao sam da nije trebalo da predjem s viskija na martini"?',
  odgovori: ["Hemfri Bogart", "Klark Gejbl", "Rik Hadson", "Ricard Barton"],
  indexTacnogOdgovora: 0,
};

let pitanje19 = {
  tekst:
    'Koji poznati slikar je odradio plakat za Jugoslovenski film "Bitka na Neretvi"?',
  odgovori: ["Endi Vorhol", "Salvador Dali", "Pablo Pikaso", "Frida Kalo"],
  indexTacnogOdgovora: 2,
};

let pitanje20 = {
  tekst:
    "Koja fransiza filmova je popularizovala studije arheologije u Americi?",
  odgovori: ["Gospodar prstenova", "Indiana Dzons", "Lara Kroft", "Hari Poter"],
  indexTacnogOdgovora: 1,
};

let pitanja = [
  pitanje1,
  pitanje2,
  pitanje3,
  pitanje4,
  pitanje5,
  pitanje6,
  pitanje7,
  pitanje8,
  pitanje9,
  pitanje10,
  pitanje11,
  pitanje12,
  pitanje13,
  pitanje14,
  pitanje15,
  pitanje16,
  pitanje17,
  pitanje18,
  pitanje19,
  pitanje20,
];

let forma = document.querySelector("form");
let tacniInetacniOdg = document.getElementById("tacni-i-netacni");

let btnPosalji = document.getElementById("posalji");
let btnNovaPitanja = document.getElementById("nova-pitanja");

let radioInput;
let randomPitanja;
let vecPopunjeno = false;

function prikaziPitanja() {
  randomPitanja = pitanja.sort(() => Math.random() - Math.random()).slice(0, 5);

  randomPitanja.forEach((pitanje, i) => {
    let tekstPitanja = document.createElement("p");
    tekstPitanja.innerHTML = `<b>${i + 1}. ${pitanje.tekst}</b>`;

    let div = document.createElement("div");
    div.append(tekstPitanja);

    let divRadio;

    pitanje.odgovori.forEach((odg, j) => {
      radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = `odg-${i}`;
      radioInput.value = `${j}`;

      divRadio = document.createElement("div");
      divRadio.append(radioInput);

      divRadio.innerHTML += ` ${odg}`;
      div.append(divRadio);
    });

    forma.append(div);
  });
  let radioBtn = document.querySelectorAll(`input[type="radio"]`);

  radioBtn.forEach((radio) => {
    if (radio.value == 0) {
      radio.checked = true;
    }
  });
}
prikaziPitanja();

btnPosalji.addEventListener("click", function (e) {
  e.preventDefault();
  if (vecPopunjeno) {
    return;
  }
  let radioChecked = document.querySelectorAll(`input[type="radio"]:checked`);

  randomPitanja.forEach((pitanje, i) => {
    const radio = radioChecked[i];

    if (radio.value == pitanje.indexTacnogOdgovora) {
      tacniInetacniOdg.innerHTML += `<p style="color:green">Tacno ste odgovorili na ${
        i + 1
      }. pitanje</p>`;
    } else {
      tacniInetacniOdg.innerHTML += `<p style="color:red">Niste tacno odgovorili na ${
        i + 1
      }. pitanje </p>`;
    }
  });

  let allRadios = document.querySelectorAll(`input[type="radio"]`);

  allRadios.forEach((r) => {
    r.disabled = true;
  });

  vecPopunjeno = true;
});

btnNovaPitanja.addEventListener("click", function () {
  vecPopunjeno = false;
  tacniInetacniOdg.innerHTML = "";
  forma.innerHTML = "";
  prikaziPitanja();
});
