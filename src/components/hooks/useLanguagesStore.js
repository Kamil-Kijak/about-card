
import { create } from "zustand"

const useLanguagesStore = create((set, get) => ({
    texts:{
        "localization":{en:"Cracov, Lesser Poland", pl:"Kraków, Małopolska"},
        "main_cite":{en:"Have a good day", pl:"Miej dobry dzień"},
        "social":{en:"Socials", pl:"Społecznościowe"},
        "completed_projects":{en:"Completed Projects: ", pl:"Ukończone Projekty: "},
        "about":{en:"About", pl:"O mnie"},
        "projects":{en:"Projects", pl:"Projekty"},
        "skills":{en:"Skills", pl:"Umiejętności"},
        "about_hello":{en:"Hello, I'm", pl:"Cześć, nazywam się"},
        "want_be":{en:"I want to be a", pl:"Chcę zostać"},
        "about_desc1":{
            en:"I am showing now my progress, projects and worked skills. I love making my own projects with my own idea, which I can present in this website.",
            pl:"Teraz pokazuje mój postęp, projekty i wypracowane umiejętności. Kocham robić swoje własne projekty z własnego pomysłu, które mogę pokazać na tej stronie."
        },
        "about_desc2":{
            en:"I also work with my skills (technical and also work management, team work management and others skills). I am a productive person with my goals and dreams.",
            pl:"Także pracuje nad moimi umięjetnościami (technicznymi a także zarządzania pracą, zarządzanie pracą zespołową i inne). Jestem produktywną osobą z moimi celami i marzeniami"
        },
        "have_fun":{en:"Have fun!", pl:"Baw się dobrze!"},
        "good_things":{en:"My good things", pl:"Moje mocne strony"},
        "productive":{en:"Productive", pl:"Produktywność"},
        "creative":{en:"Creative", pl:"Kreatywność"},
        "self-improvement":{en:"Self-improvement", pl:"Samodoskonalenie się"},
        "problem_solving":{en:"Problem solving", pl:"Rozwiązywanie problemów"},
        "logical_thinking":{en:"Logical thinking", pl:"Myślenie logiczne"},
        "helper":{en:"Helper", pl:"Pomocny"},
        "teamwork":{en:"Teamwork", pl:"Praca zespołowa"},
        "technical":{en:"Technical", pl:"Techniczne"},
        "practical":{en:"Practical", pl:"Praktyczne"},
        "planning_work":{en:"Planning work", pl:"Planowanie pracy"},
        "individual_work":{en:"Individual work", pl:"Praca indywidualna"},
        "finding_solutions":{en:"Finding solutions", pl:"Szukanie rozwiązań"},
        "creating_own_ideas":{en:"Creating own ideas", pl:"Tworzenie własnych pomysłów"},
        "communicativeness":{en:"Communicativeness", pl:"Komunikatywność"},
        "helpful":{en:"Helpful", pl:"Pomocność"},
        "empathy":{en:"Empathy", pl:"Empatia"},
        "select":{en:"Select", pl:"Wybierz"},
        "project_not_found":{en:"Project not found", pl:"Nie znaleziono projektu"},
        "no_desc":{en:"No description", pl:"Brak opisu"},
        "view_details":{en:"Project from list to view details", pl:"Projekt z listy żeby zobaczyć szczegóły"},
        "sources":{en:"Sources", pl:"Źródła"},
        "short_desc":{en:"Short description", pl:"Krótki opis"},
        "technologies":{en:"Technologies", pl:"Technologie"},
        "creation":{en:"Creation", pl:"Tworzenie"},
        "vanilla":{en:"vanilla", pl:"podstawa"},
        "sql":{en:"database creation, operation", pl:"tworzenie, administracja baz danych"},
        "tailwind":{en:"tailwind components stylizing", pl:"stylizacja komponentów w tailwind"},

        "solitaire_subtitle":{en:"A game in console about cards", pl:"Gra w konsoli o kartach"},
        "solitaire_short_desc":{
            en:"A basic solitaire game playable in console created in polish language. Game has simple graphics and controls.",
            pl:"Prosta gra w pasjans uruchamiana w consoli stworzona w polskim języku. Gra ma prostą grafikę i sterowanie"
        },
        "solitaire_c#":{en:"Main programming language", pl:"Główny język programowania"},
        "solitaire_dotnet":{en:"Tool used for creating project", pl:"Narzędzie używane w trakcie tworzenia projektu"},
        "solitaire_creation1":{
            en:"This project is my first project in console and also one of my first finished projects in C# language",
            pl:"Ten projekt jest moim pierwszym projektem konsolowm i także jednym z moich pierwszych ukończonych projektów w języku C#"
        },
        "solitaire_creation2":{
            en:"Creating this project learnt me things about programming apps in console and also tested my skills in C#",
            pl:"Tworzenie tego projektu nauczyło mnie rzeczy na temat programowania aplikacji w konsoli, a także sprawdziło moje umięjetności w C#"
        },
        "solitaire_creation3":{
            en:"Summarize: I learned a lot of things after creating this solo created game for my future programming projects",
            pl:"Podsumowując: Nauczyłem się dużo rzeczy dla moich przyszłych projektów po stworzeniu tej gry sam"
        },
        "solitaire_cite":{en:"First project as first step - maybe not ideal but important", pl:"Pierwszy projekt jako krok - może nie idealny ale ważny"}
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