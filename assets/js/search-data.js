// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "A summary of my code repositories and activity on GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "This is a detailed version of my resume. For a concise overview please download the PDF version.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "projects-8-puzzle-web",
          title: '8-Puzzle Web',
          description: "A web-based 8-puzzle solver platform that runs on a native n-puzzle solver program.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8puzzle/";
            },},{id: "projects-4-bit-alu",
          title: '4-Bit ALU',
          description: "A hardware implementation of a 4-bit Arithmetic and Logic Unit",
          section: "Projects",handler: () => {
              window.location.href = "/projects/alu/";
            },},{id: "projects-buet-cse-fest-2024-treasure-hunt",
          title: 'BUET CSE Fest 2024 Treasure Hunt',
          description: "website for the BUET CSE Fest 2024 Treasure Hunt",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bcf24_hunt/";
            },},{id: "projects-busbuddy",
          title: 'BusBuddy',
          description: "A mobile app for universities, enabling ticket purchases, bus tracking, schedules, and predictive algorithms",
          section: "Projects",handler: () => {
              window.location.href = "/projects/busbuddy/";
            },},{id: "projects-8086-c-compiler",
          title: '8086 C-Compiler',
          description: "A compiler for a subset of the C-langauge for the Intel 8086 CPU, made from scratch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/compiler/";
            },},{id: "projects-curves",
          title: 'Curves',
          description: "A small app for playing with sinusoidal curves and tweaking them to gain an intuition into their properties",
          section: "Projects",handler: () => {
              window.location.href = "/projects/curves/";
            },},{id: "projects-dx-ball-reincarnation",
          title: 'DX-Ball Reincarnation',
          description: "A remake of the classic DX-Ball built with OpenGL and SDL2",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dxball/";
            },},{id: "projects-emergencychat",
          title: 'EmergencyChat',
          description: "Simple cross-platform chat and file sharing web app that kept us connected during a political crisis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/emchat/";
            },},{id: "projects-football-club-management-system",
          title: 'Football Club Management System',
          description: "A simple football player/club management system made with JavaFX.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/javafx/";
            },},{id: "projects-map2ddrive",
          title: 'Map2DDrive',
          description: "A 2D topdown driving simulator on live Google maps with navigation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mapdrive/";
            },},{id: "projects-4-bit-mips-cpu",
          title: '4-Bit MIPS CPU',
          description: "A hardware implementation of a 4-bit CPU that runs on the MIPS instruction set",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mips/";
            },},{id: "projects-race",
          title: 'Race',
          description: "A hardware racing game built with Arduino microcontrollers",
          section: "Projects",handler: () => {
              window.location.href = "/projects/race/";
            },},{id: "projects-railbuddy",
          title: 'RailBuddy',
          description: "E-ticketing and Route planning platform for Bangladesh Railway",
          section: "Projects",handler: () => {
              window.location.href = "/projects/railbuddy/";
            },},{id: "projects-raytracing-and-rasterization",
          title: 'Raytracing and Rasterization',
          description: "A raytracing and rasterization pipeline implemented from scratch in C++ with OpenGL",
          section: "Projects",handler: () => {
              window.location.href = "/projects/raytracting/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%6A%61%6C%61%6C@%61%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/wasif-jalal", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/wjalal", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/wasifjalal", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-3849-1180", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Wasif-Jalal-2/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=RrzelsgAAAAJ", "_blank");
        },
      },{
        id: 'social-spotify',
        title: 'Spotify',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/31644qxzspbe4udzb5onhyrrp3hu", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
