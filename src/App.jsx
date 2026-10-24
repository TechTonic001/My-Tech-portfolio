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
  MoveUpRight,
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
    iconClass: 'text-blue-200 fill-white',
    smallIconClass: 'text-blue-800',
  },
  {
    id: 'resume',
    title: 'Resume',
    fileName: 'Resume.doc',
    Icon: FileText,
    iconClass: 'text-gray-200 fill-blue-500',
    smallIconClass: 'text-blue-800',
  },
  {
    id: 'projects',
    title: 'Projects',
    fileName: 'Projects.exe',
    Icon: Monitor,
    iconClass: 'text-gray-200 fill-blue-500',
    smallIconClass: 'text-blue-800',
  },
  {
    id: 'skills',
    title: 'Skills',
    fileName: 'Skills.dll',
    Icon: Settings,
    iconClass: 'text-gray-300 fill-gray-100',
    smallIconClass: 'text-gray-700',
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
    skills: ['React', 'Next.js', 'Angular'],
  },
  {
    title: 'Backend & Data',
    Icon: Code2,
    skills: ['Node.js', 'Prisma ORM', 'PostgreSQL', 'GraphQL'],
  },
  {
    title: 'AI Tools',
    Icon: Settings,
    skills: ['Claude API', 'CrewAI'],
  },
];

const raisedPanel =
  'shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000,1px_1px_0px_#808080]';
const sunkenPanel =
  'shadow-[inset_1px_1px_0px_#808080,inset_-1px_-1px_0px_#fff,inset_2px_2px_0px_#000]';
const buttonRaised =
  'shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000,1px_1px_0px_#808080] active:shadow-[inset_1px_1px_0px_#000,inset_-1px_-1px_0px_#fff]';
const buttonPressed =
  'shadow-[inset_1px_1px_0px_#000,inset_-1px_-1px_0px_#fff] bg-[#e0e0e0]';

function SectionHeading({ icon: Icon, children }) {
  return (
    <h3 className="mb-2 flex items-center gap-2 border-b border-gray-300 pb-1 text-sm font-bold uppercase tracking-wide text-[#000080]">
      <Icon size={15} aria-hidden="true" />
      {children}
    </h3>
  );
}

function CvContent() {
  return (
    <article className="mx-auto max-w-3xl space-y-5 p-4 font-sans text-sm leading-relaxed sm:p-6">
      <header className="border-b-2 border-[#000080] pb-3">
        <h2 className="text-2xl font-bold text-[#000080]">
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
          <p className="text-xs text-gray-700">October 2025 – December 2025</p>
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
        <p className="text-xs text-gray-700">Completed 2026</p>
      </section>

      <section>
        <SectionHeading icon={FileBadge}>Certifications & Training</SectionHeading>
        <p className="text-gray-700">
          Certification details have not been provided.
        </p>
      </section>

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
    <article className="mx-auto max-w-2xl space-y-4 p-4 font-sans text-[13px] leading-snug sm:p-6">
      <header className="border-b-2 border-[#000080] pb-3">
        <h2 className="text-2xl font-bold text-[#000080]">
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
          <span className="text-xs text-gray-700">Oct–Dec 2025</span>
        </div>
        <p className="text-gray-700">Ogbomoso</p>
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
          className={`bg-[#f3f3f3] p-3 ${raisedPanel}`}
        >
          <h3 className="flex items-center gap-2 font-bold text-[#000080]">
            <FolderOpen size={16} aria-hidden="true" />
            {name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed">{description}</p>
          <p className="mt-3 border-t border-gray-300 pt-2 text-xs text-gray-700">
            {stack}
          </p>
        </article>
      ))}
      <p className="text-xs text-gray-600 sm:col-span-2">
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
          className={`bg-[#f3f3f3] p-3 ${raisedPanel} ${
            title === 'AI Tools' ? 'sm:col-span-2' : ''
          }`}
        >
          <h3 className="mb-3 flex items-center gap-2 border-b border-gray-300 pb-2 font-bold text-[#000080]">
            <Icon size={17} aria-hidden="true" />
            {title}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className={`bg-white px-2 py-1 text-sm ${sunkenPanel}`}
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
      className={`absolute flex max-h-[calc(100vh-48px)] w-[min(620px,calc(100vw-24px))] flex-col bg-[#c0c0c0] p-0.5 ${
        windowState.minimized ? 'hidden' : ''
      }`}
      style={{
        left: windowState.maximized ? '8px' : `${position.x}px`,
        top: windowState.maximized ? '8px' : `${position.y}px`,
        right: windowState.maximized ? '8px' : 'auto',
        bottom: windowState.maximized ? '40px' : 'auto',
        zIndex: windowState.zIndex,
      }}
      onPointerDown={onFocus}
    >
      <header
        className={`flex touch-none select-none items-center justify-between px-1 py-1 text-white ${
          active ? 'bg-[#000080]' : 'bg-[#808080]'
        }`}
        onPointerDown={startDragging}
      >
        <div className="flex min-w-0 items-center gap-1.5 text-sm font-bold">
          <Icon size={16} aria-hidden="true" />
          <span className="truncate">{app.fileName}</span>
        </div>
        <div className="ml-2 flex shrink-0 gap-1">
          <button
            type="button"
            aria-label={`Minimize ${app.title}`}
            title="Minimize"
            className={`flex h-5 w-5 items-center justify-center bg-[#c0c0c0] text-black ${buttonRaised}`}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              onMinimize();
            }}
          >
            <Minus size={12} strokeWidth={4} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={`${windowState.maximized ? 'Restore' : 'Maximize'} ${app.title}`}
            title={windowState.maximized ? 'Restore' : 'Maximize'}
            className={`flex h-5 w-5 items-center justify-center bg-[#c0c0c0] text-black ${buttonRaised}`}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              onToggleMaximize();
            }}
          >
            <Square size={10} strokeWidth={3} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={`Close ${app.title}`}
            title="Close"
            className={`flex h-5 w-5 items-center justify-center bg-[#c0c0c0] text-black ${buttonRaised}`}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
          >
            <X size={12} strokeWidth={3} aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        className={`m-1 min-h-0 flex-1 overflow-auto bg-white text-black ${sunkenPanel}`}
      >
        <AppContent appId={app.id} />
      </div>
      <footer className="flex items-center justify-between px-1 pb-0.5 text-[10px] text-gray-700">
        <span>{app.fileName}</span>
        <MoveUpRight size={12} aria-hidden="true" />
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
    <main className="relative flex h-screen min-h-[320px] w-full flex-col overflow-hidden bg-[#008080] font-sans text-black">
      <div
        className="grid flex-1 auto-rows-min grid-cols-2 content-start gap-x-2 gap-y-4 overflow-auto p-3 pb-10 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-5 sm:p-5 md:grid-cols-4"
        aria-label="Desktop applications"
        onClick={() => setStartMenuOpen(false)}
      >
        {APPS.map((app, index) => {
          const Icon = app.Icon;
          return (
            <button
              key={app.id}
              type="button"
              className="group flex w-full max-w-24 flex-col items-center gap-1 justify-self-start rounded-sm px-2 py-1 text-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-dotted focus-visible:outline-white"
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
              <span className="border border-dotted border-transparent px-1 text-xs leading-tight text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] group-hover:border-white group-hover:bg-[#000080]">
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
          className={`absolute bottom-9 left-1 z-[10000] flex w-60 bg-[#c0c0c0] ${raisedPanel}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex w-8 items-end bg-[#000080] p-2 text-white">
            <span className="rotate-180 whitespace-nowrap text-lg font-bold tracking-widest [writing-mode:vertical-rl]">
              Windows 98
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-1 p-1 py-2">
            {APPS.map((app) => {
              const Icon = app.Icon;
              return (
                <button
                  key={`start-${app.id}`}
                  type="button"
                  className="flex w-full items-center gap-3 p-2 text-left hover:bg-[#000080] hover:text-white"
                  onClick={() => openApp(app.id)}
                >
                  <Icon size={17} className={app.smallIconClass} aria-hidden="true" />
                  <span className="text-sm font-medium">{app.title}</span>
                </button>
              );
            })}
            <div className="mx-2 my-1 border-t border-gray-400 border-b border-b-white" />
            <div className="flex items-center gap-3 p-2 text-sm text-gray-500">
              <Monitor size={17} aria-hidden="true" />
              <span>Shut Down...</span>
            </div>
          </div>
        </section>
      )}

      <footer className="absolute bottom-0 z-[10001] flex h-9 w-full items-center justify-between border-t border-gray-400 bg-[#c0c0c0] px-1 shadow-[inset_0px_1px_0px_#fff,0px_-1px_0px_#fff]">
        <div className="flex h-full min-w-0 items-center gap-1 py-0.5">
          <button
            type="button"
            aria-expanded={startMenuOpen}
            className={`flex h-full shrink-0 items-center gap-1 px-2 text-sm font-bold outline-none ${
              startMenuOpen ? buttonPressed : buttonRaised
            }`}
            onClick={() => setStartMenuOpen((open) => !open)}
          >
            <span className="grid h-4 w-4 grid-cols-2 gap-px p-[2px]" aria-hidden="true">
              <span className="rounded-tl-[2px] bg-red-500" />
              <span className="rounded-tr-[2px] bg-green-500" />
              <span className="rounded-bl-[2px] bg-blue-500" />
              <span className="rounded-br-[2px] bg-yellow-500" />
            </span>
            Start
          </button>
          <div className="mx-1 h-4/5 w-px shrink-0 border-r border-white bg-gray-400" />
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
                  onClick={() => activateTaskbarApp(app.id)}
                  className={`flex h-full min-w-0 max-w-36 items-center gap-1 px-2 text-sm font-bold ${
                    isPressed ? buttonPressed : buttonRaised
                  }`}
                >
                  <Icon
                    size={15}
                    className={`${app.smallIconClass} shrink-0`}
                    aria-hidden="true"
                  />
                  <span className="truncate">{app.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
        <time
          className={`ml-2 flex h-[85%] shrink-0 items-center px-2 text-xs font-medium tracking-wide ${sunkenPanel}`}
        >
          {formatTime(time)}
        </time>
      </footer>
    </main>
  );
}
