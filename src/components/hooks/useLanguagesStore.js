
import { create } from "zustand"

const useLanguagesStore = create((set, get) => ({
    texts:{
        "localization":{en:"Cracov, Lesser Poland", pl:"Kraków, Małopolska"},
        "main_cite":{en:"Working and focusing with code", pl:"Pracowanie i koncentracja nad kodem"},
        "social":{en:"Socials", pl:"Społecznościowe"},
        "completed_projects":{en:"Completed Projects: ", pl:"Ukończone Projekty: "},
        "about":{en:"About", pl:"O mnie"},
        "projects":{en:"Projects", pl:"Projekty"},
        "skills":{en:"Skills", pl:"Umiejętności"},
        "achivements":{en:"Achievements", pl:"Osiągnięcia"},
        "experience":{en:"Experience", pl:"Doświadczenie"},
        "about_hello":{en:"Hello, I'm", pl:"Cześć, nazywam się"},
        "want_be":{en:"I want to be a", pl:"Chcę zostać"},
        "about_desc1":{
            en:"Creating IT technologies is my passion. In this portfolio site I'm showing my already done projects, learned skills and my IT brand achievements. I focus on self-development",
            pl:"Tworzenie rzeczy z IT jest moim zainteresowaniem. W tej stronie portfolio pokazuje moje już skończone projekty, nabyte umiejętności i moje osiągnięcia z branży IT. Stawiam na samorozwój"
        },
        "about_desc2":{
            en:"My goal is to create the most innovative solutions used in IT, after that I want to create something really big. I want to be better with each project",
            pl:"Moim celem jest tworzenie najbardziej innowacyjnych rozwiązań stosowanych w IT przez cały czas, po tym chciałnym stworzyć coś naprawdę dużego. Chcę być lepszy z każdym projektem"
        },
        "check_out":{en:"Check them out!", pl:"Sprawdź je!"},
        "good_things":{en:"My things", pl:"Moje rzeczy"},
        "productive":{en:"Productivity", pl:"Produktywność"},
        "self-improvement":{en:"Self-improvement", pl:"Samodoskonalenie się"},
        "problem_solving":{en:"Problem solving", pl:"Rozwiązywanie problemów"},
        "logical_thinking":{en:"Logical thinking", pl:"Myślenie logiczne"},
        "teamwork":{en:"Teamwork", pl:"Praca zespołowa"},
        "technical":{en:"Technical skills", pl:"Techniczne umiejętności"},
        "soft":{en:"Soft skills", pl:"Miękkie umiejętności"},
        "certificates":{en:"Certificates", pl:"Certyfikaty"},
        "planning_work":{en:"Planning work", pl:"Planowanie pracy"},
        "individual_work":{en:"Individual work", pl:"Praca indywidualna"},
        "finding_solutions":{en:"Finding solutions", pl:"Szukanie rozwiązań"},
        "creating_own_ideas":{en:"Creative ideas", pl:"Kreatywne pomysły"},
        "select":{en:"Select", pl:"Wybierz"},
        "project_not_found":{en:"Project not found", pl:"Nie znaleziono projektu"},
        "no_desc":{en:"No description", pl:"Brak opisu"},
        "view_details":{en:"Project from list to view details", pl:"Projekt z listy żeby zobaczyć szczegóły"},
        "sources":{en:"Sources", pl:"Źródła"},
        "short_desc":{en:"Short description", pl:"Krótki opis"},
        "technologies":{en:"Technologies", pl:"Technologie"},
        "creation":{en:"Creation", pl:"Tworzenie"},
        "problem_solving":{en:"Problem solution", pl:"Rozwiązanie problemu"},
        "vanilla":{en:"vanilla", pl:"podstawa"},
        "download":{en:"Download", pl:"Pobierz"},
        "print":{en:"Print", pl:"Drukuj"},

        "solitaire_subtitle":{en:"A game in the CLI about cards", pl:"Gra we wierszu poleceń o kartach"},
        "solitaire_short_desc":{
            en:"A basic solitaire game playable in the console created in the Polish language. The game has simple graphics and controls.",
            pl:"Prosta gra w pasjans uruchamiana w konsoli stworzona w polskim języku. Gra ma prostą grafikę i sterowanie"
        },
        "solitaire_c#":{en:"Main programming language", pl:"Główny język programowania"},
        "solitaire_dotnet":{en:"Library used for creating", pl:"Biblioteka używane w trakcie tworzenia"},
        "solitaire_creation1":{
            en:"This project is my first project made in console and also one of my first finished projects in the C# language",
            pl:"Ten projekt jest moim pierwszym projektem konsolowm i także jednym z moich pierwszych ukończonych projektów w języku C#"
        },
        "solitaire_creation2":{
            en:"Creating this project taught me things about programming apps in the console and also tested my skills in C#",
            pl:"Tworzenie tego projektu nauczyło mnie rzeczy na temat programowania aplikacji w konsoli, a także sprawdziło moje umięjetności w C#"
        },
        "solitaire_creation3":{
            en:"In summary, I learned a lot of things after creating this solo-made game for my future programming projects",
            pl:"Podsumowując: Nauczyłem się dużo rzeczy dla moich przyszłych projektów po stworzeniu tej gry sam"
        },
        "solitaire_cite":{en:"First project as first step - maybe not ideal but important", pl:"Pierwszy projekt jako krok - może nie idealny ale ważny"},

        "pms_subtitle":{en:"A database system for managing properties", pl:"System bazy danych do zarządzania nieruchmomościami"},
        "pms_short_desc":{
            en:"Database system using for property management, storing data about them, and creating reports about expiring rent contracts. This is my first high-level full-stack project.",
            pl:"System bazy danych używany żeby zarządzać nieruchomościami, gromadzić dane o nich i tworzyć raporty o przedawniających się umowach dzierżawy. To jest mój pierszy tak zaawansowany projekt fullstack."
        },
        "pms_mysql":{en:"Database language", pl:"Język bazy danych"},
        "pms_node":{en:"Backend", pl:"Backend"},
        "pms_express":{en:"Backend server", pl:"Serwer backend"},
        "pms_react":{en:"Frontend framework", pl:"Frontend framework"},
        "pms_tailwind":{en:"Styles formatting", pl:"Formatowanie styli"},
        "pms_vite":{en:"Project management", pl:"Zarządzanie projektem"},
        "pms_problem_solution1":{
            en:"This project solves problems with chaotic data storage, improves searching lands, making rent contracts, land update, and information flow",
            pl:"Ten project rozwiązuje problem z chaotycznym magazynowaniem danych, poprawia szukanie działek, tworzenie umów dzierżawy, aktualizacje działek, i przepływ informacji"
        },
        "pms_creation1":{
            en:"It is my first full-stack project ever completed. I created this project for the client according to his requirements",
            pl:"To jest mój pierwszy project fullstack jaki kolwiek ukończyłem. Stworzyłem ten projekt dla klienta zgodnie z jego wymaganiami"
        },
        "pms_creation2":{
            en:"Creating process was a challange for me in the backend and frontend using different technologies. Also, I had restricted time to complete this project",
            pl:"Proces tworzenia był dla mnie wyzwaniem w backend i frontend używając różnych technologi. Także miałem narzucony czas na skończenie projektu"
        },
        "pms_creation3":{
            en:"Project requirements also were changing, so I had to change project code many times, but project met the requirements and was good",
            pl:"Wymagania projektu także się zmieniały więc musiałem zmieniać kod projektu dużo razy, ale projekt spełniał wymagania i było dobrze"
        },
        "pms_creation4":{
            en:"Summarize, I learned a lot of things about React.js, Node.js, and other technologies. I already know about basic full-stack concepts and other things that help me with new projects",
            pl:"Podsumowując: nauczyłem się dużo rzeczy na temat React.js, Node.js i innych technologii. Wiem już o podstawowych konceptach fullstack i innych rzeczach które pomogą mi w nowych projektach"
        },
        "pms_cite":{en:"Don't give up; continue and finish work", pl:"Nie poddawaj się; kontynuuj i dokończ prace"},
    },
    actualLanguage: sessionStorage.getItem("lang") || "en",
    updateActualLanguage:(value) => {
        set({actualLanguage:value});
        sessionStorage.setItem("lang", value);
    },
    getTextByKey: (key) => {
        const { texts, actualLanguage } = get();
        return texts[key]?.[actualLanguage] || key;
    },
}));

export {useLanguagesStore}