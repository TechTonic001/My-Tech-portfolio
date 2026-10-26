import { useEffect, useRef, useState } from 'react';
import {
  BriefcaseBusiness,
  Code2,
  FileBadge,
  FileText,
  FolderOpen,
  GraduationCap,
  Minus,
  Monitor,
  Settings,
  Square,
  User,
  X,
} from 'lucide-react';

const APPS = [
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
  {
    id: 'projects',
    title: 'Projects',
    fileName: 'Projects.exe',
    Icon: Monitor,
    iconClass: 'text-sky-200',
    smallIconClass: 'text-sky-300',
  },
  {
    id: 'skills',
    title: 'Skills',
    fileName: 'Skills.dll',
    Icon: Settings,
    iconClass: 'text-violet-200',
    smallIconClass: 'text-violet-300',
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
    skills: [
      'React.js',
      'Next.js',
      'Angular',
      'JavaScript/TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'GraphQL',
    ],
  },
  {
    title: 'Backend',
    Icon: Code2,
    skills: ['Node.js', 'Express.js', 'PHP'],
  },
  {
    title: 'Databases & ORMs',
    Icon: FolderOpen,
    skills: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'MySQL', 'Firebase'],
  },
  {
    title: 'AI Integration & Tools',
    Icon: Settings,
    skills: [
      'Claude API',
      'AI Agent Workflows',
      'GitHub Copilot',
      'Cursor AI',
      'Supermaven',
    ],
  },
  {
    title: 'DevOps & Systems',
    Icon: Monitor,
    skills: [
      'Vercel',
      'Render',
      'Git/GitHub',
      'Postman',
      'Linux (Ubuntu)',
      'UML',
      'Cisco Packet Tracer',
    ],
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
    Icon: User,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/halleluyah-amoo-5aba97356',
    Icon: BriefcaseBusiness,
  },
];

const glassPanel =
  'border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl';

function SectionHeading({ icon: Icon, children }) {
  return (
    <h3 className="mb-2 flex items-center gap-2 border-b border-white/10 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
      <Icon size={15} aria-hidden="true" />
      {children}
    </h3>
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

function AppContent({ appId }) {
  switch (appId) {
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
        bottom: windowState.maximized ? '40px' : 'auto',
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
        <AppContent appId={app.id} />
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

export default function App() {
  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [time, setTime] = useState(() => new Date());
  const nextZIndex = useRef(10);

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

      const offset = current.length * 28;
      return [
        ...current,
        {
          id: appId,
          x: Math.min(32 + offset, Math.max(8, window.innerWidth - 300)),
          y: 104 + offset,
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
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.24), transparent 48%), linear-gradient(145deg, #111827 0%, #080b12 52%, #111827 100%)',
      }}
    >
      <div
        className="grid flex-1 auto-rows-min grid-cols-4 content-start gap-x-1 overflow-auto p-2 pb-24 sm:gap-x-4 sm:p-6"
        aria-label="Desktop applications"
        onClick={() => setStartMenuOpen(false)}
      >
        {APPS.map((app, index) => {
          const Icon = app.Icon;
          return (
            <button
              key={app.id}
              type="button"
              className="group flex w-full max-w-24 flex-col items-center gap-1 justify-self-start rounded-xl border border-transparent px-2 py-2 text-center transition-colors hover:border-white/10 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
              aria-label={`Open ${app.title}`}
              onClick={(event) => {
                event.stopPropagation();
                openApp(app.id);
              }}
            >
              <span
                className="desktop-icon-float flex h-11 w-11 items-center justify-center"
                style={{ animationDelay: `${index * -0.83}s` }}
              >
                <Icon
                  size={36}
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
          />
        );
      })}

      {startMenuOpen && (
        <section
          aria-label="Start menu"
          className={`absolute bottom-24 left-1/2 z-[10000] w-[min(380px,calc(100vw-24px))] -translate-x-1/2 rounded-2xl p-4 text-slate-100 ${glassPanel}`}
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

      <footer className={`absolute bottom-3 left-1/2 z-[10001] flex h-[68px] max-w-[calc(100vw-20px)] -translate-x-1/2 items-center gap-2 rounded-2xl px-3 ${glassPanel}`}>
          <button
            type="button"
            aria-expanded={startMenuOpen}
            aria-label="Start"
            title="Start"
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 ${
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
                  className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 ${
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
                      className={`absolute bottom-0.5 h-1 w-1 rounded-full ${
                        isPressed ? 'bg-sky-300' : 'bg-slate-500'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>
      </footer>
      <time className={`absolute bottom-5 right-4 hidden rounded-xl px-3 py-2 text-xs font-medium text-slate-200 sm:block ${glassPanel}`}>
        {formatTime(time)}
      </time>
    </main>
  );
}
