import { useEffect, useRef, useState } from 'react';
import {
  Bot,
  BatteryFull,
  BriefcaseBusiness,
  Camera,
  Code2,
  FileBadge,
  FileText,
  FolderOpen,
  GraduationCap,
  MapPin,
  Minus,
  Monitor,
  Palette,
  Settings,
  Square,
  User,
  X,
  Volume2,
  Wifi,
} from 'lucide-react';

const APPS = [
  {
    id: 'profile',
    title: 'Profile',
    fileName: 'Profile.exe',
    Icon: User,
    iconClass: 'text-sky-200',
    smallIconClass: 'text-sky-300',
  },
  {
    id: 'settings',
    title: 'Settings',
    fileName: 'Settings.exe',
    Icon: Palette,
    iconClass: 'text-violet-200',
    smallIconClass: 'text-violet-300',
  },
  {
    id: 'skills',
    title: 'Skills',
    fileName: 'Skills.dll',
    Icon: Settings,
    iconClass: 'text-blue-300',
    smallIconClass: 'text-blue-300',
  },
  {
    id: 'projects',
    title: 'Projects',
    fileName: 'Projects.exe',
    Icon: Monitor,
    iconClass: 'text-sky-200',
    smallIconClass: 'text-sky-300',
  },
  {
    id: 'cv',
    title: 'CV',
    fileName: 'CV.doc',
    Icon: FileBadge,
    iconClass: 'text-sky-200',
    smallIconClass: 'text-sky-300',
  },
  {
    id: 'resume',
    title: 'Resume',
    fileName: 'Resume.doc',
    Icon: FileText,
    iconClass: 'text-blue-300',
    smallIconClass: 'text-blue-300',
  },
];

const WALLPAPERS = [
  {
    id: 'bloom',
    name: 'Bloom',
    background:
      'radial-gradient(ellipse at 72% 42%, rgba(74, 144, 255, 0.85), transparent 22%), radial-gradient(ellipse at 60% 55%, rgba(130, 62, 210, 0.78), transparent 34%), radial-gradient(ellipse at 40% 45%, rgba(20, 88, 190, 0.9), transparent 45%), linear-gradient(135deg, #071027 0%, #101b49 48%, #080c24 100%)',
  },
  {
    id: 'aurora',
    name: 'Aurora',
    background:
      'radial-gradient(ellipse at 20% 90%, rgba(0, 220, 170, 0.68), transparent 32%), radial-gradient(ellipse at 70% 30%, rgba(80, 90, 245, 0.72), transparent 40%), linear-gradient(145deg, #081224 0%, #101b3c 52%, #080d19 100%)',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    background:
      'radial-gradient(ellipse at 70% 20%, rgba(255, 153, 102, 0.78), transparent 30%), radial-gradient(ellipse at 30% 80%, rgba(152, 45, 155, 0.75), transparent 40%), linear-gradient(140deg, #1d1535 0%, #512b57 50%, #10152b 100%)',
  },
  {
    id: 'ocean',
    name: 'Deep Ocean',
    background:
      'radial-gradient(ellipse at 25% 25%, rgba(36, 173, 210, 0.65), transparent 35%), radial-gradient(ellipse at 80% 80%, rgba(23, 83, 180, 0.8), transparent 42%), linear-gradient(135deg, #061a2b 0%, #092748 52%, #081126 100%)',
  },
];

const PROJECTS = [
  {
    name: 'ProTech',
    description:
      'Automated rent-tracking platform with Paystack payments and Nodemailer notifications.',
    stack: 'Payments · Email',
  },
  {
    name: 'Finance Management App',
    description:
      'Full-stack application for tracking expenses and analyzing financial data.',
    stack: 'React · Node.js · Prisma · PostgreSQL',
  },
  {
    name: 'AI Twitter Automation',
    description:
      'Automated content-generation tool powered by Node.js and the Claude API.',
    stack: 'Node.js · Claude API',
  },
  {
    name: 'Tech Fit',
    description: 'Responsive Angular web app for a fitness platform.',
    stack: 'Angular',
  },
];

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    Icon: Monitor,
    skills: ['React.js', 'Next.js', 'Angular', 'GraphQL', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    Icon: Code2,
    skills: ['Node.js', 'Express.js', 'PHP'],
  },
  {
    title: 'Databases',
    Icon: FolderOpen,
    skills: ['PostgreSQL', 'Prisma ORM', 'MongoDB'],
  },
  {
    title: 'AI',
    Icon: Bot,
    skills: ['Claude API', 'AI Agents', 'Supermaven'],
  },
];

const SOCIAL_LINKS = [
  {
    title: 'GitHub',
    href: 'https://github.com/TechTonic001',
    Icon: Code2,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/techtonic01a/',
    Icon: Camera,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/halleluyah-amoo-5aba97356',
    Icon: BriefcaseBusiness,
  },
];

const glassPanel =
  'border border-white/10 bg-black/40 shadow-2xl backdrop-blur-2xl';

function SectionHeading({ icon: Icon, children }) {
  return (
    <h3 className="mb-2 flex items-center gap-2 border-b border-white/10 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
      <Icon size={15} aria-hidden="true" />
      {children}
    </h3>
  );
}

function ProfileContent() {
  return (
    <article className="mx-auto max-w-3xl space-y-6 p-5 text-slate-200 sm:p-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-sky-300/20 bg-sky-400/10 text-3xl font-semibold text-sky-200">
          AH
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
            Personal profile
          </p>
          <h2 className="text-2xl font-bold text-white">
            Amoo Halleluyah Olamilekan
          </h2>
          <p className="mt-1 text-slate-300">
            Full-Stack Software Engineer &amp; AI Agent Developer
          </p>
        </div>
      </header>

      <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <SectionHeading icon={MapPin}>Location</SectionHeading>
        <p>Ogbomoso, Oyo, Nigeria</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <SectionHeading icon={User}>About me</SectionHeading>
        <p className="leading-relaxed text-slate-300">
          Passionate about solving complex, real-world problems through robust
          system architectures and modern AI developer tools.
        </p>
      </section>

      <section>
        <SectionHeading icon={BriefcaseBusiness}>Find me online</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {SOCIAL_LINKS.map(({ title, href, Icon }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
            >
              <Icon size={16} className="text-sky-300" aria-hidden="true" />
              {title}
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}

function SettingsContent({ wallpaperId, onSelectWallpaper }) {
  return (
    <div className="space-y-5 p-5 sm:p-6">
      <div>
        <h2 className="text-lg font-semibold text-white">Personalization</h2>
        <p className="mt-1 text-sm text-slate-400">
          Choose a desktop background. Your selection updates instantly.
        </p>
      </div>
      <section>
        <SectionHeading icon={Palette}>Choose your wallpaper</SectionHeading>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {WALLPAPERS.map((wallpaper) => {
            const selected = wallpaper.id === wallpaperId;
            return (
              <button
                key={wallpaper.id}
                type="button"
                aria-label={`Set ${wallpaper.name} wallpaper`}
                aria-pressed={selected}
                onClick={() => onSelectWallpaper(wallpaper.id)}
                className={`group overflow-hidden rounded-xl border text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 ${
                  selected
                    ? 'border-sky-300 ring-2 ring-sky-400/40'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <span
                  className="block aspect-[4/3] w-full transition-transform duration-300 group-hover:scale-105"
                  style={{ background: wallpaper.background }}
                />
                <span className="block bg-black/30 px-3 py-2 text-xs font-medium text-slate-200">
                  {wallpaper.name}
                  {selected ? ' · Current' : ''}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function CvContent() {
  return (
    <article className="mx-auto max-w-3xl space-y-5 p-4 font-sans text-sm leading-relaxed text-slate-200 sm:p-6">
      <header className="border-b border-sky-400/30 pb-3">
        <h2 className="text-2xl font-bold text-white">
          Amoo Halleluyah Olamilekan
        </h2>
        <p className="font-semibold">Full-Stack Software Engineer</p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs">
          <a className="underline" href="mailto:amoohalleluyah1@gmail.com">
            amoohalleluyah1@gmail.com
          </a>
          <a className="underline" href="tel:08074104143">
            08074104143
          </a>
          <a
            className="underline"
            href="https://github.com/TechTonic001"
            target="_blank"
            rel="noreferrer"
          >
            GitHub: TechTonic001
          </a>
          <a
            className="underline"
            href="https://www.linkedin.com/in/halleluyah-amoo-5aba97356"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section>
        <SectionHeading icon={User}>Professional Profile</SectionHeading>
        <p>
          Driven full-stack software engineer passionate about solving complex,
          real-world problems through thoughtful application development.
        </p>
      </section>

      <section>
        <SectionHeading icon={BriefcaseBusiness}>Experience</SectionHeading>
        <div className="space-y-1">
          <h4 className="font-bold">Software Engineering Intern (SIWES)</h4>
          <p className="font-medium">Ennovate Lab · Ogbomoso</p>
          <p className="text-xs text-slate-400">October 2025 – December 2025</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Collaborated on full-stack software development during an
              industrial training placement.
            </li>
            <li>
              Contributed to debugging tasks and software optimization.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <SectionHeading icon={GraduationCap}>Education</SectionHeading>
        <h4 className="font-bold">National Diploma (ND), Computer Science</h4>
        <p>SQI College of ICT · Ogbomoso</p>
        <p className="text-xs text-slate-400">Completed 2026</p>
      </section>

      {/* <section>
        <SectionHeading icon={FileBadge}>Certifications & Training</SectionHeading>
        <p className="text-slate-400">
          Certification details have not been provided.
        </p>
      </section> */}

      <section>
        <SectionHeading icon={Code2}>Technical Skills</SectionHeading>
        <p>
          <strong>Frontend:</strong> React, Next.js, Angular
        </p>
        <p>
          <strong>Backend & data:</strong> Node.js, Prisma ORM, PostgreSQL,
          GraphQL
        </p>
        <p>
          <strong>AI tools:</strong> Claude API, CrewAI
        </p>
      </section>
    </article>
  );
}

function ResumeContent() {
  return (
    <article className="mx-auto max-w-2xl space-y-4 p-4 font-sans text-[13px] leading-snug text-slate-200 sm:p-6">
      <header className="border-b border-sky-400/30 pb-3">
        <h2 className="text-2xl font-bold text-white">
          Amoo Halleluyah Olamilekan
        </h2>
        <p className="font-semibold">Full-Stack Software Engineer</p>
        <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs">
          <a className="underline" href="mailto:amoohalleluyah1@gmail.com">
            amoohalleluyah1@gmail.com
          </a>
          <a className="underline" href="tel:08074104143">
            08074104143
          </a>
          <a
            className="underline"
            href="https://github.com/TechTonic001"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="underline"
            href="https://www.linkedin.com/in/halleluyah-amoo-5aba97356"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </header>

      <section>
        <SectionHeading icon={User}>Profile</SectionHeading>
        <p>
          Full-stack software engineer focused on building useful applications,
          debugging software, and improving product quality.
        </p>
      </section>

      <section>
        <SectionHeading icon={BriefcaseBusiness}>Experience</SectionHeading>
        <div className="flex flex-wrap justify-between gap-x-3">
          <strong>Software Engineering Intern (SIWES) · Ennovate Lab</strong>
          <span className="text-xs text-slate-400">Oct–Dec 2025</span>
        </div>
        <p className="text-slate-400">Ogbomoso</p>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>Collaborated on full-stack development.</li>
          <li>Contributed to debugging and software optimization.</li>
        </ul>
      </section>

      <section>
        <SectionHeading icon={GraduationCap}>Education</SectionHeading>
        <p>
          <strong>ND in Computer Science</strong> · SQI College of ICT,
          Ogbomoso · Completed 2026
        </p>
      </section>

      <section>
        <SectionHeading icon={Code2}>Technical Skills</SectionHeading>
        <p>
          <strong>Frontend:</strong> React, Next.js, Angular
        </p>
        <p>
          <strong>Backend & data:</strong> Node.js, Prisma, PostgreSQL,
          GraphQL
        </p>
        <p>
          <strong>AI:</strong> Claude API, CrewAI
        </p>
      </section>

      <section>
        <SectionHeading icon={FolderOpen}>Selected Projects</SectionHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>ProTech — rent tracking with Paystack and Nodemailer.</li>
          <li>Finance app — expense tracking and analysis.</li>
          <li>AI Twitter Automation — Node.js and Claude API.</li>
          <li>Tech Fit — responsive Angular fitness app.</li>
        </ul>
      </section>
    </article>
  );
}

function ProjectsContent() {
  return (
    <div className="grid gap-3 p-3 font-sans sm:grid-cols-2">
      {PROJECTS.map(({ name, description, stack }) => (
        <article
          key={name}
          className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.07]"
        >
          <h3 className="flex items-center gap-2 font-semibold text-white">
            <FolderOpen size={16} aria-hidden="true" />
            {name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
          <p className="mt-3 border-t border-white/10 pt-2 text-xs text-slate-400">
            {stack}
          </p>
        </article>
      ))}
      <p className="text-xs text-slate-500 sm:col-span-2">
        Project descriptions are shown here; deployment links were not supplied.
      </p>
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="grid gap-4 p-4 font-sans sm:grid-cols-2">
      {SKILL_GROUPS.map(({ title, Icon, skills }) => (
        <section
          key={title}
          className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
        >
          <h3 className="mb-3 flex items-center gap-2 border-b border-white/10 pb-2 font-semibold text-white">
            <Icon size={17} aria-hidden="true" />
            {title}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-slate-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function AppContent({ appId, wallpaperId, onSelectWallpaper }) {
  switch (appId) {
    case 'profile':
      return <ProfileContent />;
    case 'settings':
      return (
        <SettingsContent
          wallpaperId={wallpaperId}
          onSelectWallpaper={onSelectWallpaper}
        />
      );
    case 'cv':
      return <CvContent />;
    case 'resume':
      return <ResumeContent />;
    case 'projects':
      return <ProjectsContent />;
    case 'skills':
      return <SkillsContent />;
    default:
      return null;
  }
}

function DraggableWindow({
  app,
  windowState,
  active,
  onFocus,
  onClose,
  onMinimize,
  onToggleMaximize,
  wallpaperId,
  onSelectWallpaper,
}) {
  const [position, setPosition] = useState({
    x: windowState.x,
    y: windowState.y,
  });
  const [dragging, setDragging] = useState(false);
  const dragOrigin = useRef(null);
  const Icon = app.Icon;

  useEffect(() => {
    if (!dragging) return undefined;

    const handlePointerMove = (event) => {
      if (!dragOrigin.current) return;
      setPosition({
        x: Math.max(0, event.clientX - dragOrigin.current.offsetX),
        y: Math.max(0, event.clientY - dragOrigin.current.offsetY),
      });
    };
    const stopDragging = () => setDragging(false);

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', stopDragging);
    window.addEventListener('pointercancel', stopDragging);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', stopDragging);
      window.removeEventListener('pointercancel', stopDragging);
    };
  }, [dragging]);

  const startDragging = (event) => {
    if (event.button !== 0) return;
    onFocus();
    dragOrigin.current = {
      offsetX: event.clientX - position.x,
      offsetY: event.clientY - position.y,
    };
    setDragging(true);
  };

  return (
    <section
      aria-label={`${app.title} window`}
      className={`absolute flex max-h-[calc(100vh-48px)] w-[min(680px,calc(100vw-24px))] flex-col overflow-hidden rounded-xl border border-white/10 bg-black/40 text-slate-100 shadow-2xl backdrop-blur-xl ${
        windowState.minimized ? 'hidden' : ''
      } ${active ? 'ring-1 ring-sky-400/30' : ''}`}
      style={{
        width: windowState.maximized ? 'auto' : undefined,
        left: windowState.maximized ? '8px' : `${position.x}px`,
        top: windowState.maximized ? '8px' : `${position.y}px`,
        right: windowState.maximized ? '8px' : 'auto',
        bottom: windowState.maximized ? '88px' : 'auto',
        maxHeight: windowState.maximized
          ? 'none'
          : `calc(100vh - ${position.y + 48}px)`,
        zIndex: windowState.zIndex,
      }}
      onPointerDown={onFocus}
    >
      <header
        className="flex touch-none select-none items-center justify-between border-b border-white/10 px-4 py-3"
        onPointerDown={startDragging}
      >
        <div className="flex min-w-0 items-center gap-2.5 text-sm font-medium text-slate-100">
          <Icon size={17} className="text-sky-300" aria-hidden="true" />
          <span className="truncate">{app.title}</span>
        </div>
        <div className="ml-2 flex shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label={`Minimize ${app.title}`}
            title="Minimize"
            className="flex h-8 w-10 items-center justify-center rounded-md text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              onMinimize();
            }}
          >
            <Minus size={15} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={`${windowState.maximized ? 'Restore' : 'Maximize'} ${app.title}`}
            title={windowState.maximized ? 'Restore' : 'Maximize'}
            className="flex h-8 w-10 items-center justify-center rounded-md text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              onToggleMaximize();
            }}
          >
            <Square size={13} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={`Close ${app.title}`}
            title="Close"
            className="flex h-8 w-10 items-center justify-center rounded-md text-slate-300 transition-colors hover:bg-red-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-400"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
          >
            <X size={15} aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        className="min-h-0 flex-1 overflow-auto bg-transparent text-slate-100"
      >
        <AppContent
          appId={app.id}
          wallpaperId={wallpaperId}
          onSelectWallpaper={onSelectWallpaper}
        />
      </div>
      <footer className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-[11px] text-slate-400">
        <span>{app.fileName}</span>
        <span>{app.title} application</span>
      </footer>
    </section>
  );
}

function formatTime(date) {
  return date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  });
}

function formatDate(date) {
  return date.toLocaleDateString([], {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

export default function App() {
  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [time, setTime] = useState(() => new Date());
  const [wallpaperId, setWallpaperId] = useState(WALLPAPERS[0].id);
  const nextZIndex = useRef(10);
  const wallpaper = WALLPAPERS.find((item) => item.id === wallpaperId) ?? WALLPAPERS[0];

  useEffect(() => {
    const timer = window.setInterval(() => setTime(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const focusApp = (appId) => {
    const zIndex = ++nextZIndex.current;
    setWindows((current) =>
      current.map((appWindow) =>
        appWindow.id === appId
          ? { ...appWindow, minimized: false, zIndex }
          : appWindow,
      ),
    );
    setActiveWindowId(appId);
  };

  const openApp = (appId) => {
    setStartMenuOpen(false);
    const zIndex = ++nextZIndex.current;
    setWindows((current) => {
      const existing = current.find((appWindow) => appWindow.id === appId);
      if (existing) {
        return current.map((appWindow) =>
          appWindow.id === appId
            ? { ...appWindow, minimized: false, zIndex }
            : appWindow,
        );
      }

      const offset = current.length * 24;
      return [
        ...current,
        {
          id: appId,
          x: Math.min(140 + offset, Math.max(8, window.innerWidth - 300)),
          y: 32 + offset,
          zIndex,
          minimized: false,
          maximized: false,
        },
      ];
    });
    setActiveWindowId(appId);
  };

  const activateTaskbarApp = (appId) => {
    const appWindow = windows.find((item) => item.id === appId);
    if (appWindow && !appWindow.minimized && activeWindowId === appId) {
      setWindows((current) =>
        current.map((item) =>
          item.id === appId ? { ...item, minimized: true } : item,
        ),
      );
      const nextActive = windows
        .filter((item) => item.id !== appId && !item.minimized)
        .sort((left, right) => right.zIndex - left.zIndex)[0];
      setActiveWindowId(nextActive?.id ?? null);
      return;
    }
    focusApp(appId);
  };

  const minimizeApp = (appId) => {
    setWindows((current) =>
      current.map((item) =>
        item.id === appId ? { ...item, minimized: true } : item,
      ),
    );
    if (activeWindowId === appId) {
      setActiveWindowId(getNextActiveId(appId));
    }
  };

  const getNextActiveId = (excludingId) =>
    windows
      .filter((item) => item.id !== excludingId && !item.minimized)
      .sort((left, right) => right.zIndex - left.zIndex)[0]?.id ?? null;

  const closeApp = (appId) => {
    const remaining = windows.filter((item) => item.id !== appId);
    setWindows(remaining);
    if (activeWindowId === appId) {
      const nextActive = remaining
        .filter((item) => !item.minimized)
        .sort((left, right) => right.zIndex - left.zIndex)[0];
      setActiveWindowId(nextActive?.id ?? null);
    }
  };

  const toggleMaximize = (appId) => {
    setWindows((current) =>
      current.map((item) =>
        item.id === appId ? { ...item, maximized: !item.maximized } : item,
      ),
    );
  };

  return (
    <main
      className="relative flex h-screen min-h-[320px] w-full flex-col overflow-hidden font-sans text-slate-100"
      style={{
        backgroundImage: wallpaper.background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="grid w-max flex-1 grid-flow-col grid-rows-[repeat(6,min-content)] content-start gap-x-4 gap-y-2 overflow-auto p-3 pb-24 sm:p-5"
        aria-label="Desktop applications"
        onClick={() => setStartMenuOpen(false)}
      >
        {APPS.map((app, index) => {
          const Icon = app.Icon;
          return (
            <button
              key={app.id}
              type="button"
              className="group flex w-full max-w-24 flex-col items-center gap-0 justify-self-start rounded-xl border border-transparent px-2 py-1 text-center transition-colors hover:border-white/10 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
              aria-label={`Open ${app.title}`}
              onClick={(event) => {
                event.stopPropagation();
                openApp(app.id);
              }}
            >
              <span
                className="desktop-icon-float flex h-9 w-9 items-center justify-center"
                style={{ animationDelay: `${index * -0.83}s` }}
              >
                <Icon
                  size={30}
                  strokeWidth={1.7}
                  className={`${app.iconClass} drop-shadow-[1px_1px_0px_#000]`}
                  aria-hidden="true"
                />
              </span>
              <span className="rounded-md px-1.5 py-0.5 text-xs leading-tight text-slate-100 drop-shadow-md">
                {app.title}
              </span>
            </button>
          );
        })}
      </div>

      {windows.map((appWindow) => {
        const app = APPS.find((item) => item.id === appWindow.id);
        if (!app) return null;
        return (
          <DraggableWindow
            key={appWindow.id}
            app={app}
            windowState={appWindow}
            active={activeWindowId === appWindow.id}
            onFocus={() => focusApp(appWindow.id)}
            onClose={() => closeApp(appWindow.id)}
            onMinimize={() => minimizeApp(appWindow.id)}
            onToggleMaximize={() => toggleMaximize(appWindow.id)}
            wallpaperId={wallpaperId}
            onSelectWallpaper={setWallpaperId}
          />
        );
      })}

      {startMenuOpen && (
        <section
          aria-label="Start menu"
          className={`absolute bottom-[88px] left-1/2 z-[10000] max-h-[calc(100vh-112px)] w-[min(380px,calc(100vw-24px))] -translate-x-1/2 overflow-y-auto rounded-2xl p-4 text-slate-100 ${glassPanel}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold tracking-wide text-white">Pinned</h2>
            <span className="text-xs text-slate-400">Windows 11 Pro</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {APPS.map((app) => {
              const Icon = app.Icon;
              return (
                <button
                  key={`start-${app.id}`}
                  type="button"
                  className="flex items-center gap-3 rounded-xl p-3 text-left transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
                  onClick={() => openApp(app.id)}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={18} className={app.smallIconClass} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-slate-200">{app.title}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-4 border-t border-white/10 pt-3">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Connect
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {SOCIAL_LINKS.map(({ title, href, Icon }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2 text-xs text-slate-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
                >
                  <Icon size={15} className="text-sky-300" aria-hidden="true" />
                  {title}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-xs text-slate-400">Amoo Halleluyah Olamilekan</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-200">
              AH
            </span>
          </div>
        </section>
      )}

      <footer className="absolute inset-x-0 bottom-0 z-[10001] flex h-[76px] w-full items-center border-t border-white/10 bg-black/40 px-2 shadow-2xl backdrop-blur-2xl">
        <div className="absolute left-1/2 flex max-w-[calc(100%-240px)] -translate-x-1/2 items-center gap-1 overflow-x-auto sm:max-w-[calc(100%-190px)] sm:gap-2">
          <button
            type="button"
            aria-expanded={startMenuOpen}
            aria-label="Start"
            title="Start"
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 sm:h-12 sm:w-12 ${
              startMenuOpen ? 'bg-sky-400/20' : 'hover:bg-white/10'
            }`}
            onClick={() => setStartMenuOpen((open) => !open)}
          >
            <span className="grid h-6 w-6 grid-cols-2 gap-[3px]" aria-hidden="true">
              <span className="rounded-[2px] bg-sky-300" />
              <span className="rounded-[2px] bg-sky-400" />
              <span className="rounded-[2px] bg-sky-400" />
              <span className="rounded-[2px] bg-blue-500" />
            </span>
          </button>
          <nav
            className="flex min-w-0 items-center gap-1 overflow-x-auto"
            aria-label="Open applications"
          >
            {windows.map((appWindow) => {
              const app = APPS.find((item) => item.id === appWindow.id);
              if (!app) return null;
              const Icon = app.Icon;
              const isPressed =
                activeWindowId === app.id && !appWindow.minimized;
              return (
                <button
                  key={`taskbar-${app.id}`}
                  type="button"
                  aria-label={`${appWindow.minimized ? 'Restore' : isPressed ? 'Minimize' : 'Switch to'} ${app.title}`}
                  aria-pressed={isPressed}
                  title={app.title}
                  onClick={() => activateTaskbarApp(app.id)}
                  className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 sm:h-12 sm:w-12 ${
                    isPressed ? 'bg-sky-400/20' : 'hover:bg-white/10'
                  }`}
                >
                  <Icon
                    size={21}
                    className={`${app.smallIconClass} shrink-0`}
                    aria-hidden="true"
                  />
                  {!appWindow.minimized && (
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0.5 h-1 rounded-full transition-all ${
                        isPressed ? 'w-4 bg-sky-300' : 'w-2 bg-slate-400'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="absolute right-3 flex items-center gap-1.5 sm:right-5 sm:gap-3">
          <div className="flex items-center gap-1 text-slate-300 sm:gap-3">
            <Wifi size={13} aria-label="Wi-Fi connected" />
            <Volume2 size={13} aria-label="Volume on" />
            <BatteryFull size={14} aria-label="Battery full" />
          </div>
          <time className="flex min-w-0 flex-col items-end text-right text-[10px] font-medium leading-tight text-slate-200 sm:min-w-16 sm:text-xs">
            <span>{formatTime(time)}</span>
            <span className="mt-1 text-[9px] text-slate-400 sm:text-[11px]">
              {formatDate(time)}
            </span>
          </time>
        </div>
      </footer>
    </main>
  );
}
