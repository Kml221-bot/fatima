import { useEffect, useState } from "react";
import { ChevronDown, Moon, Sun, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTheme } from "@/contexts/ThemeContext";

// Image mapping data
const imageMapping = {
  images: {
    img1: "/projects/img1.png",
    img2: "/projects/img2.png",
    img3: "/projects/img3.png",
    img4: "/projects/img4.png",
    img5: "/projects/img5.png",
    img6: "/projects/img6.png",
    img7: "/projects/img7.png",
    img8: "/projects/img8.png",
    img9: "/projects/img9.png"
  },
  projects: {
    I: {
      title: "Conception et Programmation d'un Système Embarqué",
      subtitle: "Programmation embarquée et prototypage matériel",
      projects: [
        {
          id: 1,
          title: "Système de Distribution Automatisé",
          desc: "Conception d'un système de distribution automatisé utilisant Arduino, capteurs et interface LCD",
          image: "img1"
        }
      ]
    },
    II: {
      title: "Instrumentation et Chaîne de Mesure",
      subtitle: "Mesure et acquisition de données",
      projects: [
        {
          id: 2,
          title: "Mesure de Débit avec Débitmètre Électromagnétique",
          desc: "Acquisition et traitement de signaux de débit utilisant un débitmètre électromagnétique",
          image: "img2"
        },
        {
          id: 3,
          title: "Mesure de Température avec Thermocouple",
          desc: "Chaîne de mesure complète pour l'acquisition de température",
          image: "img3"
        }
      ]
    },
    III: {
      title: "Métrologie et Contrôle de Qualité",
      subtitle: "Étalonnage et vérification d'instruments",
      projects: [
        {
          id: 4,
          title: "Étalonnage d'une Balance Analytique",
          desc: "Procédure complète d'étalonnage selon les normes métrologiques",
          image: "img4"
        },
        {
          id: 5,
          title: "Vérification d'un Multimètre Numérique",
          desc: "Vérification des performances et de la précision d'un multimètre",
          image: "img5"
        }
      ]
    },
    IV: {
      title: "Caractérisation de Matériaux",
      subtitle: "Analyse physico-chimique et propriétés des matériaux",
      projects: [
        {
          id: 6,
          title: "MCPC : Caractérisation physico-chimique de Matériaux Inconnus",
          desc: "Utilisation de DSC et spectrométrie infrarouge pour identifier des matériaux",
          image: "img6"
        }
      ]
    },
    V: {
      title: "Cahier des Charges et Démarche Environnementale",
      subtitle: "Analyse électrochimique et mesures environnementales",
      projects: [
        {
          id: 7,
          title: "Analyse Électrochimique des Ions Plomb (Pb²⁺)",
          desc: "Potentiométrie pour quantifier les ions plomb en solution",
          image: "img7"
        }
      ]
    }
  }
};

type ImageKey = keyof (typeof imageMapping)["images"];

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [visibleSections, setVisibleSections] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  const [activeAbout, setActiveAbout] = useState<"qualities" | "interests" | null>(null);
  const [expandedSkillCategory, setExpandedSkillCategory] = useState<string | null>(null);
  const [expandedProjectBlock, setExpandedProjectBlock] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const skillCategories = {
    "Métrologie & Contrôle": [
      "Étalonnage d'instruments",
      "Vérification de précision",
      "Analyse d'incertitudes",
      "Normes métrologiques",
    ],
    "Instrumentation": [
      "Débitmètres électromagnétiques",
      "Thermocouples",
      "Capteurs de pression",
      "Acquisition de données",
    ],
    "Programmation Embarquée": [
      "Arduino",
      "Microcontrôleurs",
      "Interfaces LCD",
      "Prototypage matériel",
    ],
    "Analyse de Matériaux": [
      "DSC (Calorimétrie)",
      "Spectrométrie infrarouge",
      "Caractérisation physico-chimique",
      "Identification de matériaux",
    ],
    "Chimie Analytique": [
      "Potentiométrie",
      "Électrochimie",
      "Analyse d'ions",
      "Étalonnage chimique",
    ],
  };

  const aboutSections = {
    qualities: [
      "Rigueur scientifique",
      "Attention aux détails",
      "Capacité d'analyse",
      "Résolution de problèmes",
    ],
    interests: [
      "Instrumentation scientifique",
      "Métrologie et contrôle",
      "Programmation embarquée",
      "Environnement et durabilité",
    ],
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
          : "bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-50 text-slate-900"
      }`}
      style={{
        '--animate-fade-in': 'fade-in 0.8s ease-out forwards',
      } as React.CSSProperties}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-950/80 border-slate-800"
          : "bg-white/80 border-slate-200"
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Fatoumata Thioune
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#about" className={`hover:text-cyan-400 transition-colors text-sm font-medium ${
              theme === "dark" ? "text-slate-300" : "text-slate-700"
            }`}>
              À propos
            </a>
            <a href="#skills" className={`hover:text-cyan-400 transition-colors text-sm font-medium ${
              theme === "dark" ? "text-slate-300" : "text-slate-700"
            }`}>
              Compétences
            </a>
            <a href="#projects" className={`hover:text-cyan-400 transition-colors text-sm font-medium ${
              theme === "dark" ? "text-slate-300" : "text-slate-700"
            }`}>
              Projets
            </a>
            <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all">
              Contact
            </a>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                theme === "dark"
                  ? "bg-slate-800 hover:bg-slate-700 text-yellow-400"
                  : "bg-slate-200 hover:bg-slate-300 text-slate-700"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        data-animate
        className={`relative min-h-screen flex items-center justify-center px-4 overflow-hidden transition-all duration-1000 ${
          visibleSections['hero']
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        } transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-b from-cyan-500/10 to-transparent"
            : "bg-gradient-to-b from-cyan-300/20 to-transparent"
        }`}
      >
        <div className="relative z-10 text-center px-4">
          <p className="text-cyan-400 font-semibold uppercase mb-4 animate-fade-in">Ingénieure Scientifique</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-delay-1">
            Spécialiste en <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Métrologie & Instrumentation</span>
          </h1>
          <p className={`max-w-2xl mx-auto text-xl mb-10 animate-fade-in-delay-2 ${
            theme === "dark" ? "text-slate-400" : "text-slate-600"
          }`}>
            Expertise en caractérisation de matériaux, instrumentation scientifique et programmation embarquée.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-delay-3">
            <Button className="px-8 py-6 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full text-lg font-semibold">
              Voir mes projets
            </Button>
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/CV_Fatoumata_Thioune.pdf';
                link.download = 'CV_Fatoumata_Thioune.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              variant="outline"
              className="px-8 py-6 rounded-full text-lg font-semibold border-slate-600 hover:bg-slate-800"
            >
              Télécharger CV
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-animate
        className={`py-20 px-4 bg-opacity-50 transition-all duration-1000 ${
          visibleSections['about']
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        } transition-colors duration-300 ${
          theme === "dark" ? "bg-slate-900/50" : "bg-slate-100/50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">À propos de moi</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Main About Block */}
            <Card className={`md:col-span-1 p-8 hover:border-cyan-500/50 transition-all cursor-pointer animate-fade-in-left ${
              theme === "dark"
                ? "bg-slate-800/50 border-slate-700"
                : "bg-white/50 border-slate-300"
            }`}>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Qui suis-je ?</h3>
              <p className={`leading-relaxed ${
                theme === "dark" ? "text-slate-300" : "text-slate-700"
              }`}>
                Ingénieure scientifique passionnée par la métrologie, l'instrumentation et la caractérisation de matériaux. 
                Je combine rigueur scientifique et capacités techniques pour résoudre des problèmes complexes.
              </p>
            </Card>

            {/* Qualities Block */}
            <div
              onClick={() => setActiveAbout(activeAbout === "qualities" ? null : "qualities")}
              className="cursor-pointer"
            >
              <Card className={`p-8 hover:border-purple-500/50 transition-all h-full animate-slide-up ${
                theme === "dark"
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-white/50 border-slate-300"
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-purple-400">Mes qualités</h3>
                  <ChevronDown
                    className={`transition-transform ${activeAbout === "qualities" ? "rotate-180" : ""}`}
                  />
                </div>
                {activeAbout === "qualities" && (
                  <ul className={`space-y-2 ${
                    theme === "dark" ? "text-slate-300" : "text-slate-700"
                  }`}>
                    {aboutSections.qualities.map((quality, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        {quality}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>

            {/* Interests Block */}
            <div
              onClick={() => setActiveAbout(activeAbout === "interests" ? null : "interests")}
              className="cursor-pointer"
            >
              <Card className={`p-8 hover:border-cyan-500/50 transition-all h-full animate-fade-in-right ${
                theme === "dark"
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-white/50 border-slate-300"
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-cyan-400">Mes intérêts</h3>
                  <ChevronDown
                    className={`transition-transform ${activeAbout === "interests" ? "rotate-180" : ""}`}
                  />
                </div>
                {activeAbout === "interests" && (
                  <ul className={`space-y-2 ${
                    theme === "dark" ? "text-slate-300" : "text-slate-700"
                  }`}>
                    {aboutSections.interests.map((interest, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        {interest}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        data-animate
        className={`py-20 px-4 transition-all duration-1000 ${
          visibleSections['skills']
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        } transition-colors duration-300 ${
          theme === "dark" ? "bg-slate-950" : "bg-slate-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Mes Compétences</h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div
                key={category}
                onClick={() => setExpandedSkillCategory(expandedSkillCategory === category ? null : category)}
                className="cursor-pointer animate-slide-up"
              >
                <Card
                  className={`border transition-all p-6 min-w-[200px] hover:border-cyan-500/50 ${
                    expandedSkillCategory === category
                      ? theme === "dark"
                        ? "border-cyan-500 bg-slate-800"
                        : "border-cyan-500 bg-white"
                      : theme === "dark"
                      ? "bg-slate-800/50 border-slate-700"
                      : "bg-white/50 border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-cyan-400">{category}</h3>
                    <ChevronDown
                      className={`transition-transform ${expandedSkillCategory === category ? "rotate-180" : ""}`}
                      size={20}
                    />
                  </div>
                  {expandedSkillCategory === category && (
                    <ul className={`space-y-2 text-sm ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}>
                      {skills.map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        data-animate
        className={`py-20 px-4 transition-all duration-1000 ${
          visibleSections['projects']
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        } transition-colors duration-300 ${
          theme === "dark" ? "bg-slate-900/50" : "bg-slate-100/50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Mes Projets</h2>
          
          <div className="space-y-8">
            {Object.entries(imageMapping.projects).map(([blockKey, block]) => (
              <div key={blockKey}>
                <div
                  onClick={() => setExpandedProjectBlock(expandedProjectBlock === blockKey ? null : blockKey)}
                  className="cursor-pointer mb-6 animate-fade-in-left"
                >
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{block.title}</h3>
                  <p className={`text-sm ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}>{block.subtitle}</p>
                </div>

                {expandedProjectBlock === blockKey && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {block.projects.map((project) => (
                      <Card
                        key={project.id}
                        className={`group overflow-hidden hover:border-purple-500/50 transition-all cursor-pointer animate-slide-up ${
                          theme === "dark"
                            ? "bg-slate-800/50 border-slate-700"
                            : "bg-white/50 border-slate-300"
                        }`}
                      >
                        {/* Image Container */}
                        <button
                          type="button"
                          onClick={() =>
                            setPreviewImage({
                              src: imageMapping.images[project.image as ImageKey],
                              title: project.title,
                            })
                          }
                          className={`relative block h-48 w-full overflow-hidden text-left ${
                            theme === "dark" ? "bg-slate-900" : "bg-slate-200"
                          }`}
                        >
                          <img
                            src={imageMapping.images[project.image as ImageKey]}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
                        </button>

                        {/* Content */}
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-purple-400 mb-2">{project.title}</h4>
                          <p className={`text-sm leading-relaxed ${
                            theme === "dark" ? "text-slate-300" : "text-slate-700"
                          }`}>{project.desc}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-animate
        className={`py-20 px-4 transition-all duration-1000 ${
          visibleSections['contact']
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        } transition-colors duration-300 ${
          theme === "dark" ? "bg-slate-950" : "bg-slate-200"
        }`}>
        <div className="max-w-3xl mx-auto px-4">
          <Card className={`p-12 animate-fade-in-left ${
            theme === "dark"
              ? "bg-slate-800/50 border-slate-700"
              : "bg-white/50 border-slate-300"
          }`}>
            <h2 className="text-3xl font-bold mb-8 text-center">Prenons contact</h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Votre nom"
                className={`w-full px-4 py-3 border rounded-lg focus:border-cyan-500 focus:outline-none transition-colors ${
                  theme === "dark"
                    ? "bg-slate-900 border-slate-700 text-white"
                    : "bg-white border-slate-300 text-slate-900"
                }`}
              />
              <input
                type="email"
                placeholder="Votre email"
                className={`w-full px-4 py-3 border rounded-lg focus:border-cyan-500 focus:outline-none transition-colors ${
                  theme === "dark"
                    ? "bg-slate-900 border-slate-700 text-white"
                    : "bg-white border-slate-300 text-slate-900"
                }`}
              />
              <textarea
                placeholder="Votre message"
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg focus:border-cyan-500 focus:outline-none transition-colors ${
                  theme === "dark"
                    ? "bg-slate-900 border-slate-700 text-white"
                    : "bg-white border-slate-300 text-slate-900"
                }`}
              />
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition-all">
                Envoyer
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-950 border-slate-800 text-slate-400"
          : "bg-slate-100 border-slate-300 text-slate-600"
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.linkedin.com/in/fatoumata-thioune-0558b9366/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUFMKq2jsSd2g0pfdh0Fyug%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${
                theme === "dark"
                  ? "bg-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                  : "bg-slate-200 text-cyan-600 hover:bg-cyan-500 hover:text-white"
              }`}
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:thiounefatoumata75@gmail.com"
              className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${
                theme === "dark"
                  ? "bg-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                  : "bg-slate-200 text-cyan-600 hover:bg-cyan-500 hover:text-white"
              }`}
              title="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-center">&copy; 2026 Fatoumata Thioune. Tous droits réservés.</p>
        </div>
      </footer>

      <Dialog
        open={Boolean(previewImage)}
        onOpenChange={(open) => !open && setPreviewImage(null)}
      >
        <DialogContent
          className={`h-[85vh] max-w-5xl overflow-hidden border p-0 ${
            theme === "dark"
              ? "bg-slate-950 border-slate-700"
              : "bg-white border-slate-300"
          }`}
        >
          {previewImage && (
            <>
              <DialogTitle
                className={`px-5 pt-5 text-xl ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}
              >
                {previewImage.title}
              </DialogTitle>
              <div className="h-[calc(85vh-4.75rem)] px-5 pb-5">
                <iframe
                  srcDoc={`<!doctype html><html><body style="margin:0;min-height:100vh;display:grid;place-items:center;background:transparent;"><img src="${previewImage.src}" style="max-width:100%;max-height:100vh;object-fit:contain;" /></body></html>`}
                  title={previewImage.title}
                  className={`h-full w-full rounded-md border ${
                    theme === "dark"
                      ? "border-slate-700 bg-slate-900"
                      : "border-slate-200 bg-white"
                  }`}
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
