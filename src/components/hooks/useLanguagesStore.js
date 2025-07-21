
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