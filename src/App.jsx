import { useState, useEffect, useRef } from 'react';
import { 
  FileText, 
  FolderOpen, 
  Settings, 
  Mail, 
  X, 
  Minus, 
  Square,
  Monitor,
  Code2,
  Camera,
  User
} from 'lucide-react';

// --- APP DATA ---
const APPS = {
  about: {
    id: 'about',
    title: 'About.txt',
    icon: <FileText size={32} className="text-blue-200 fill-white" />,
    smallIcon: <FileText size={16} className="text-blue-800" />
  },
  projects: {
    id: 'projects',
    title: 'Projects.exe',
    icon: <Monitor size={32} className="text-gray-200 fill-blue-500" />,
    smallIcon: <Monitor size={16} className="text-blue-800" />
  },
  skills: {
    id: 'skills',
    title: 'Skills.dll',
    icon: <Settings size={32} className="text-gray-400 fill-gray-200" />,
    smallIcon: <Settings size={16} className="text-gray-600" />
  },
  contact: {
    id: 'contact',
    title: 'Contact.net',
    icon: <Mail size={32} className="text-yellow-200 fill-yellow-500" />,
    smallIcon: <Mail size={16} className="text-yellow-600" />
  }
};

// --- DRAGGABLE WINDOW COMPONENT ---
const Window = ({ app, onClose, isActive, onFocus, zIndex, initialX, initialY }) => {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPos({
        x: e.clientX - dragRef.current.x,
        y: e.clientY - dragRef.current.y
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      const handleTouchMove = (e) => handleMouseMove(e.touches[0]);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDragging]);

  const handleMouseDown = (e) => {
    onFocus();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    dragRef.current = {
      x: clientX - pos.x,
      y: clientY - pos.y
    };
    setIsDragging(true);
  };

  // Render Window Content based on App ID
  const renderContent = () => {
    switch(app.id) {
      case 'about':
        return (
          <div className="font-mono text-sm leading-relaxed p-2">
            <h2 className="text-lg font-bold mb-4 font-sans border-b border-gray-300 pb-2">Amoo Halleluyah Olamilekan</h2>
            <p className="mb-4">
              I am a driven Full-Stack Software Engineer passionate about solving complex, real-world problems.
            </p>
            <p className="mb-4">
              <strong>Experience:</strong><br />
              &gt; Software Engineering Intern (SIWES)<br />
              &gt; Ennovate Lab, Ogbomoso (Oct 2025 - Dec 2025)<br />
              &gt; Collaborated on full-stack development, debugging, and software optimization.
            </p>
            <p>
              <strong>Education:</strong><br />
              &gt; National Diploma (ND) in Computer Science<br />
              &gt; SQI College of ICT, Ogbomoso (Completed 2026)
            </p>
          </div>
        );
      case 'projects':
        return (
          <div className="flex flex-col gap-4 p-2 font-sans">
            <div className="border-b border-gray-300 pb-2">
              <h3 className="font-bold flex items-center gap-2"><FolderOpen size={16}/> ProTech</h3>
              <p className="text-sm text-gray-700">Automated Rent Tracking Platform with Paystack and Nodemailer.</p>
            </div>
            <div className="border-b border-gray-300 pb-2">
              <h3 className="font-bold flex items-center gap-2"><FolderOpen size={16}/> Finance Management App</h3>
              <p className="text-sm text-gray-700">Full-stack app tracking expenses and analyzing financial data (React, Node, Prisma, Postgres).</p>
            </div>
            <div className="border-b border-gray-300 pb-2">
              <h3 className="font-bold flex items-center gap-2"><FolderOpen size={16}/> AI Twitter Automation</h3>
              <p className="text-sm text-gray-700">Automated content generation tool powered by Node.js and Claude API.</p>
            </div>
            <div>
              <h3 className="font-bold flex items-center gap-2"><FolderOpen size={16}/> Tech Fit</h3>
              <p className="text-sm text-gray-700">Responsive Angular web app for a fitness platform.</p>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="p-2 grid grid-cols-2 gap-2 font-sans font-medium text-sm">
            <div className="flex items-center gap-2 p-1"><Settings size={14}/> React.js</div>
            <div className="flex items-center gap-2 p-1"><Settings size={14}/> Next.js</div>
            <div className="flex items-center gap-2 p-1"><Settings size={14}/> Angular</div>
            <div className="flex items-center gap-2 p-1"><Settings size={14}/> Node.js</div>
            <div className="flex items-center gap-2 p-1"><Settings size={14}/> GraphQL</div>
            <div className="flex items-center gap-2 p-1"><Settings size={14}/> Prisma ORM</div>
            <div className="flex items-center gap-2 p-1"><Settings size={14}/> PostgreSQL</div>
            <div className="flex items-center gap-2 p-1"><Settings size={14}/> Claude API</div>
          </div>
        );
      case 'contact':
        return (
          <div className="flex flex-col gap-4 p-4 font-sans text-sm">
            <a href="mailto:amoohalleluyah1@gmail.com" className="flex items-center gap-3 hover:text-blue-700 cursor-pointer underline">
              <Mail size={18}/> amoohalleluyah1@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <User size={18}/> 08074104143
            </div>
            <a href="https://github.com/TechTonic001" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-700 cursor-pointer underline">
              <Code2 size={18}/> GitHub: TechTonic001
            </a>
            <a href="https://instagram.com/techtonic01a" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-700 cursor-pointer underline">
              <Camera size={18}/> Instagram: @techtonic01a
            </a>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div 
      className="absolute bg-[#c0c0c0] w-[350px] max-w-[90vw] flex flex-col"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        zIndex: zIndex,
        boxShadow: '1px 1px 0px #000, inset 1px 1px 0px #fff, inset -1px -1px 0px #808080'
      }}
      onMouseDown={onFocus}
      onTouchStart={onFocus}
    >
      {/* Title Bar */}
      <div 
        className={`flex justify-between items-center px-1 py-0.5 m-0.5 cursor-default ${isActive ? 'bg-[#000080]' : 'bg-[#808080]'} text-white select-none touch-none`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="flex items-center gap-1 font-bold text-sm tracking-wide">
          {app.smallIcon}
          {app.title}
        </div>
        <div className="flex gap-0.5">
          <button className="bg-[#c0c0c0] w-4 h-4 flex items-center justify-center text-black font-bold shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000,1px_1px_0px_#808080] active:shadow-[inset_1px_1px_0px_#000,inset_-1px_-1px_0px_#fff]">
            <Minus size={12} strokeWidth={4}/>
          </button>
          <button className="bg-[#c0c0c0] w-4 h-4 flex items-center justify-center text-black font-bold shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000,1px_1px_0px_#808080] active:shadow-[inset_1px_1px_0px_#000,inset_-1px_-1px_0px_#fff]">
            <Square size={10} strokeWidth={3}/>
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="bg-[#c0c0c0] w-4 h-4 flex items-center justify-center text-black font-bold shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000,1px_1px_0px_#808080] active:shadow-[inset_1px_1px_0px_#000,inset_-1px_-1px_0px_#fff] ml-0.5"
          >
            <X size={12} strokeWidth={3}/>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="m-1 bg-white flex-1 overflow-auto max-h-[60vh] text-black shadow-[inset_1px_1px_0px_#808080,inset_-1px_-1px_0px_#fff,inset_2px_2px_0px_#000]">
        {renderContent()}
      </div>
    </div>
  );
};


// --- MAIN APP COMPONENT ---
export default function App() {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [zIndexCounter, setZIndexCounter] = useState(10);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  // Clock Update
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  const openApp = (appId) => {
    const isAlreadyOpen = openWindows.find(w => w.id === appId);
    setStartMenuOpen(false);
    
    if (isAlreadyOpen) {
      focusApp(appId);
      return;
    }

    const newZIndex = zIndexCounter + 1;
    // Cascade positioning
    const offset = openWindows.length * 30;
    
    setOpenWindows([...openWindows, { 
      ...APPS[appId], 
      zIndex: newZIndex,
      x: 50 + offset,
      y: 50 + offset
    }]);
    setActiveWindow(appId);
    setZIndexCounter(newZIndex);
  };

  const closeApp = (appId) => {
    const remaining = openWindows.filter(w => w.id !== appId);
    setOpenWindows(remaining);
    if (activeWindow === appId) {
      setActiveWindow(remaining.length > 0 ? remaining[remaining.length - 1].id : null);
    }
  };

  const focusApp = (appId) => {
    if (activeWindow === appId) return;
    const newZIndex = zIndexCounter + 1;
    
    setOpenWindows(windows => windows.map(w => 
      w.id === appId ? { ...w, zIndex: newZIndex } : w
    ));
    setActiveWindow(appId);
    setZIndexCounter(newZIndex);
  };

  return (
    // Desktop Background
    <div className="h-screen w-full bg-[#008080] overflow-hidden select-none font-sans relative flex flex-col text-black cursor-default">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
        body { margin: 0; overflow: hidden; }
      `}} />

      {/* Desktop Area */}
      <div 
        className="flex-1 p-4 grid grid-flow-col grid-rows-6 gap-6 w-max items-start"
        onClick={() => setStartMenuOpen(false)}
      >
        {Object.values(APPS).map((app) => (
          <div 
            key={app.id}
            className="flex flex-col items-center gap-1 w-20 cursor-pointer group"
            onDoubleClick={() => openApp(app.id)}
            // For mobile compatibility
            onClick={() => openApp(app.id)}
          >
            <div className="group-active:brightness-50">
              {app.icon}
            </div>
            <span className="text-white text-xs text-center drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] bg-blue-900/0 group-active:bg-blue-900 px-1 border border-dotted border-transparent group-active:border-white">
              {app.title}
            </span>
          </div>
        ))}
      </div>

      {/* Render Open Windows */}
      {openWindows.map(app => (
        <Window 
          key={app.id} 
          app={app} 
          isActive={activeWindow === app.id}
          onFocus={() => focusApp(app.id)}
          onClose={() => closeApp(app.id)}
          zIndex={app.zIndex}
          initialX={app.x}
          initialY={app.y}
        />
      ))}

      {/* Start Menu Overlay */}
      {startMenuOpen && (
        <div className="absolute bottom-[32px] left-0 bg-[#c0c0c0] shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000,1px_1px_0px_#808080] flex w-[250px] z-[9999]">
          {/* Side Banner */}
          <div className="bg-[#000080] text-white flex items-end p-2 w-8 writing-vertical-lr rotate-180">
            <span className="font-bold text-lg tracking-widest whitespace-nowrap">Windows 98</span>
          </div>
          {/* Apps List */}
          <div className="flex-1 p-1 py-2 flex flex-col gap-1">
            {Object.values(APPS).map(app => (
              <button 
                key={`start-${app.id}`}
                className="flex items-center gap-3 p-2 hover:bg-[#000080] hover:text-white text-left w-full cursor-default"
                onClick={() => openApp(app.id)}
              >
                {app.smallIcon}
                <span className="text-sm font-medium">{app.title}</span>
              </button>
            ))}
            <div className="border-t border-b border-gray-400 border-b-white my-1 mx-2" />
            <button className="flex items-center gap-3 p-2 hover:bg-[#000080] hover:text-white text-left w-full cursor-default pointer-events-none opacity-50">
              <Monitor size={16} />
              <span className="text-sm font-medium">Shut Down...</span>
            </button>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="h-8 bg-[#c0c0c0] w-full flex items-center justify-between px-1 shadow-[inset_0px_1px_0px_#fff,0px_-1px_0px_#fff] border-t border-gray-400 z-[9999] absolute bottom-0">
        <div className="flex items-center gap-1 h-full py-0.5">
          {/* Start Button */}
          <button 
            className={`flex items-center gap-1 px-2 h-full font-bold text-sm outline-none ${startMenuOpen ? 'shadow-[inset_1px_1px_0px_#000,inset_-1px_-1px_0px_#fff] bg-[#e0e0e0]' : 'shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000,1px_1px_0px_#808080] active:shadow-[inset_1px_1px_0px_#000,inset_-1px_-1px_0px_#fff]'}`}
            onClick={() => setStartMenuOpen(!startMenuOpen)}
          >
            <div className="grid grid-cols-2 gap-[1px] w-4 h-4 p-[2px]">
              <div className="bg-red-500 rounded-tl-[2px]" />
              <div className="bg-green-500 rounded-tr-[2px]" />
              <div className="bg-blue-500 rounded-bl-[2px]" />
              <div className="bg-yellow-500 rounded-br-[2px]" />
            </div>
            Start
          </button>
          
          <div className="w-[1px] h-[80%] bg-gray-400 mx-1 border-r border-white" />

          {/* Open Window Buttons */}
          {openWindows.map(app => (
            <button 
              key={`taskbar-${app.id}`}
              onClick={() => focusApp(app.id)}
              className={`flex items-center gap-1 px-2 min-w-[120px] max-w-[160px] h-full font-bold text-sm truncate outline-none ${activeWindow === app.id ? 'shadow-[inset_1px_1px_0px_#000,inset_-1px_-1px_0px_#fff] bg-[#e0e0e0]' : 'shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000,1px_1px_0px_#808080]'}`}
            >
              {app.smallIcon}
              <span className="truncate">{app.title}</span>
            </button>
          ))}
        </div>

        {/* System Tray (Clock) */}
        <div className="h-[90%] px-3 flex items-center shadow-[inset_1px_1px_0px_#808080,inset_-1px_-1px_0px_#fff,inset_2px_2px_0px_#000] text-xs font-medium tracking-wide">
          {formatTime(time)}
        </div>
      </div>
    </div>
  );
}
