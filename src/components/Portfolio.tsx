import { useState, useEffect } from 'react';
import {
    Briefcase,
    GraduationCap,
    Terminal,
    Cpu,
    Menu,
    X,
    Github,
    ExternalLink,
    Code,
    Database,
    Server,
    Monitor,
    Moon,
    Sun,
    ArrowRight,
    MapPin,
    Mail,
    Phone,
    Download
} from 'lucide-react';

const GITHUB_USERNAME = "EasterNM";
// 👇 ใส่ Link ไฟล์ Resume ของคุณตรงนี้ (เช่น Google Drive link หรือ path ใน project)
const RESUME_URL = "https://drive.google.com/file/d/17G5gHRt7JP4X8xogjezNKrkXCvyt68x7/view?usp=sharing";

interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
}

const Portfolio: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lang, setLang] = useState<'th' | 'en'>('th');
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [repos, setRepos] = useState<Repo[]>([]);
    const [scrolled, setScrolled] = useState(false);

    // Fetch Repos
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
                if (response.ok) {
                    const data = await response.json();
                    setRepos(data);
                } else {
                    // Fallback data
                    setRepos([
                        { id: 1, name: "stock-management-system", description: "Inventory management with Low-code & API integration.", html_url: "#", language: "Python", stargazers_count: 12, forks_count: 2 },
                        { id: 2, name: "invoice-automation-n8n", description: "Automated invoice generation workflow.", html_url: "#", language: "JavaScript", stargazers_count: 8, forks_count: 1 },
                        { id: 3, name: "odoo-custom-addons", description: "Custom modules for Odoo ERP HR.", html_url: "#", language: "Python", stargazers_count: 5, forks_count: 0 }
                    ]);
                }
            } catch (error) { console.error(error); }
        };
        fetchRepos();
    }, []);

    // Scroll Handler
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = ['home', 'skills', 'about', 'experience', 'projects', 'education', 'contact'];
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
            setIsMenuOpen(false);
        }
    };

    const content = {
        th: {
            nav: { home: 'Home', skills: 'Stack', about: 'About', experience: 'Exp', projects: 'Work', education: 'Edu', contact: 'Contact' },
            hero: {
                role: 'IT Helpdesk / IT Support / Technician',
                greeting: "สวัสดีครับ ผม",
                name: "Nithiwit Thienniem",
                description: 'เจ้าหน้าที่สารสนเทศที่รักการพัฒนาเทคโนโลยีและกระบวนการอัตโนมัติ สามารถแก้ปัญหา Hardware และ Software ได้อย่างคล่องตัว พร้อมสร้างโซลูชันด้วย Python, JavaScript และ Low-code เพื่อช่วยให้ทีมทำงานได้ดีขึ้น',
                btnContact: 'ติดต่อฉัน',
                btnResume: 'ดาวน์โหลด Resume'
            },
            skills: {
                title: 'Technical Skills',
                desc: 'ทักษะทางเทคนิคและเครื่องมือที่เชี่ยวชาญ'
            },
            about: {
                title: 'About Me',
                desc1: 'เจ้าหน้าที่สารสนเทศที่รักการพัฒนาเทคโนโลยีและกระบวนการอัตโนมัติ สามารถแก้ปัญหา Hardware และ Software ได้อย่างคล่องตัว พร้อมสร้างโซลูชันด้วย Python, JavaScript และ Low-code',
                desc2: 'มุ่งมั่นที่จะปรับปรุงกระบวนการทำงานและขับเคลื่อนการเปลี่ยนแปลงทางดิจิทัลภายในองค์กรผ่านโซลูชันทางเทคนิคที่เป็นนวัตกรรม'
            },
            experience: { title: 'Experience' },
            projects: { title: 'GitHub Projects', subtitle: 'โปรเจกต์ส่วนตัวและงาน Open Source' },
            education: { title: 'Education' },
            contact: { title: "Let's work together", desc: 'พร้อมเรียนรู้สิ่งใหม่ๆ และรับผิดชอบงานที่ท้าทาย หากคุณกำลังมองหาคนทำงานด้าน IT Support หรือ Low-code Developer ติดต่อผมได้เลยครับ' }
        },
        en: {
            nav: { home: 'Home', skills: 'Stack', about: 'About', experience: 'Exp', projects: 'Work', education: 'Edu', contact: 'Contact' },
            hero: {
                role: 'IT Helpdesk / IT Support / Technician',
                greeting: "Hello, I'm",
                name: "Nithiwit Thienniem",
                description: 'Tech-savvy IT professional with a passion for automation and software development. Skilled in troubleshooting hardware/software issues while developing custom solutions using Python, JavaScript, and Low-code platforms.',
                btnContact: 'Contact Me',
                btnResume: 'Download Resume'
            },
            skills: {
                title: 'Technical Skills',
                desc: 'Expertise in development, infrastructure, and automation tools.'
            },
            about: {
                title: 'About Me',
                desc1: 'Tech-savvy IT professional with a passion for automation and software development. Skilled in troubleshooting hardware/software issues while developing custom solutions using Python, JavaScript, and Low-code platforms.',
                desc2: 'Dedicated to optimizing workflows and driving digital transformation within organizations through innovative technical solutions.'
            },
            experience: { title: 'Experience' },
            projects: { title: 'GitHub Projects', subtitle: 'Personal and open-source projects on GitHub.' },
            education: { title: 'Education' },
            contact: { title: "Let's work together", desc: 'Ready to learn new things and take on challenging responsibilities. If you are looking for an IT Support or Low-code Developer, feel free to contact me.' }
        }
    };

    const t = content[lang];

    // Updated Skills based on Resume
    const tools = [
        { icon: <Code size={20} />, name: "Web Dev", sub: "Python (Django) / JS / HTML / CSS / SQL", color: "text-yellow-400" },
        { icon: <Database size={20} />, name: "ERP Solutions", sub: "Odoo ERP / Easy Account", color: "text-purple-400" },
        { icon: <Cpu size={20} />, name: "Automation", sub: "n8n / Make / Looker Studio", color: "text-pink-400" },
        { icon: <Monitor size={20} />, name: "Low-Code", sub: "AppSheet / Google Apps Script", color: "text-blue-400" },
        { icon: <Server size={20} />, name: "Infrastructure", sub: "Windows Server / Network / CCTV", color: "text-slate-400" },
        { icon: <Terminal size={20} />, name: "Tools", sub: "VS Code / Git / MS Office 365", color: "text-green-400" },
    ];

    // Updated Experience based on Resume
    const experiences = {
        th: [
            {
                company: "M-Tech Auto air Co.,Ltd.",
                role: "IT Support / Technician",
                period: "June 2024 - Present",
                details: [
                    "พัฒนาระบบจัดการสต็อกสินค้า: ออกแบบระบบ Stock ด้วย Low-code platforms เพิ่มความแม่นยำและลดข้อผิดพลาด",
                    "สร้างระบบ Automation: ใช้ n8n / Make ลดขั้นตอนซ้ำซ้อนในระบบบัญชี Easy Account",
                    "บริหารจัดการโครงสร้างพื้นฐานไอที: ดูแล Network และ Backup ฐานข้อมูล รับรองความเสถียร 100%",
                    "วางระบบ Odoo ERP: ออกแบบ Workflow (Sales, Purchasing, Inventory, HR) เปลี่ยนผ่านจาก Easy Account",
                    "พัฒนาแอปพลิเคชันเชื่อมต่อ: สร้าง App ขนส่งเชื่อม API กับ Odoo ติดตามสถานะ Real-time",
                    "จัดทำรายงานวิเคราะห์ข้อมูล: สร้าง Dashboard สรุปข้อมูลสำคัญให้ฝ่ายบริหารและฝ่ายต่างๆ"
                ]
            },
            {
                company: "CMSK COMPANY LIMITED",
                role: "IT Support",
                period: "Jan 2024 - May 2024",
                details: [
                    "การสนับสนุนทางเทคนิค: แก้ไขปัญหา Hardware, Software และ Network ให้ผู้ใช้งาน",
                    "ปฏิบัติงานนอกสถานที่ (On-site): ติดตั้งและซ่อมบำรุงอุปกรณ์ไอทีตามไซต์ลูกค้า",
                    "วิเคราะห์ปัญหา: หาสาเหตุและแนวทางแก้ไขปัญหาทางเทคนิคเพื่อป้องกันการเกิดซ้ำ"
                ]
            },
            {
                company: "Mae Mae Industrial Co., Ltd.",
                role: "IT Support",
                period: "2023",
                details: [
                    "บริหารจัดการระบบ Server: ดูแล Server ทั้งหมดให้ทำงานได้อย่างมีประสิทธิภาพ",
                    "ดูแลเว็บไซต์บริษัท: อัปเดตข้อมูลและดูแลให้เว็บไซต์พร้อมใช้งานเสมอ",
                    "ดูแลระบบ Optimus Dash: ตรวจสอบการแสดงผลข้อมูลให้ถูกต้องแม่นยำ",
                    "ระบบความปลอดภัย (CCTV): ออกแบบและดูแลระบบกล้องวงจรปิดให้บริษัทแม่และบริษัทในเครือ"
                ]
            },
            {
                company: "Freelance",
                role: "IT Specialist",
                period: "2021 - Present",
                details: [
                    "พัฒนาแอปพลิเคชัน: รับทำ App และ Automation ด้วย Low-code / Google Apps Script",
                    "ออกแบบระบบโครงสร้างพื้นฐาน: วางระบบ CCTV และ Network เน้นความปลอดภัยและครอบคลุม",
                    "ที่ปรึกษาด้านไอที: ให้คำปรึกษาธุรกิจ SME ในการนำเทคโนโลยีมาใช้ลดต้นทุน"
                ]
            },
            {
                company: "11th Military District Prison Division",
                role: "IT Staff",
                period: "2020 - 2022",
                details: [
                    "พัฒนาเว็บไซต์ E-commerce: สร้างเว็บขายสินค้าฝีมือผู้ต้องขัง สร้างรายได้เสริม",
                    "พัฒนาระบบฐานข้อมูล: สร้างระบบเก็บข้อมูลผู้ต้องขังเพื่อความถูกต้องแม่นยำ",
                    "ดูแลระบบเครือข่ายและอุปกรณ์: ซ่อมบำรุงคอมพิวเตอร์และ Network ภายในสำนักงาน",
                    "ระบบความปลอดภัย: ดูแลระบบ CCTV ตามมาตรฐานความปลอดภัยระดับสูง"
                ]
            }
        ],
        en: [
            {
                company: "M-Tech Auto air Co.,Ltd.",
                role: "IT Support / Technician",
                period: "June 2024 - Present",
                details: [
                    "Developed Inventory System: Built custom Stock Management System using Low-code, improving accuracy.",
                    "Process Automation: Designed workflows (n8n / Make) to optimize Easy Account invoice processes.",
                    "System & Database Admin: Managed network infrastructure and performed regular backups ensuring 100% integrity.",
                    "ERP Implementation: Spearheaded migration to Odoo ERP, customizing workflows for Sales, Purchasing, HR.",
                    "Application Development: Developed Logistics Application integrated with Odoo via API.",
                    "Data Reporting: Created Dashboards for multiple departments enabling data-driven decisions."
                ]
            },
            {
                company: "CMSK COMPANY LIMITED",
                role: "IT Support",
                period: "Jan 2024 - May 2024",
                details: [
                    "Technical Troubleshooting: Diagnosed and resolved hardware, software, and network issues.",
                    "On-site Operations: Managed equipment installation and maintenance for client locations.",
                    "Problem Analysis: Analyzed recurring user issues to provide effective solutions."
                ]
            },
            {
                company: "Mae Mae Industrial Co., Ltd.",
                role: "IT Support",
                period: "2023",
                details: [
                    "Server Administration: Administered the organization's entire Server Infrastructure.",
                    "Website Management: Maintained company website ensuring 100% uptime.",
                    "Application Support: Monitored Optimus Dash system for accurate data visualization.",
                    "Security Infrastructure: Managed CCTV systems for headquarters and affiliates."
                ]
            },
            {
                company: "Freelance",
                role: "IT Specialist",
                period: "2021 - Present",
                details: [
                    "Custom App Development: Developed tailored business apps using Low-code and Google Apps Script.",
                    "System Infrastructure Design: Designed and installed comprehensive CCTV and Network systems.",
                    "Technical Consultation: Advised SMEs on technology adoption to optimize operations."
                ]
            },
            {
                company: "11th Military District Prison Division",
                role: "IT Staff",
                period: "2020 - 2022",
                details: [
                    "Web Development: Developed E-commerce website for products handcrafted by inmates.",
                    "Database System Development: Created custom data management system for inmate records.",
                    "Network & Infrastructure: Maintained entire office computer systems and network.",
                    "Security Systems: Managed CCTV systems to maintain strict security standards."
                ]
            }
        ]
    };

    const experienceList = experiences[lang];

    return (
        <div className={`${isDarkMode ? 'bg-[#121212] text-slate-200' : 'bg-slate-50 text-slate-900'} min-h-screen font-sans transition-colors duration-300 selection:bg-cyan-500/30`}>

            {/* Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (isDarkMode ? 'bg-[#121212]/80 border-b border-white/5' : 'bg-white/80 border-b border-slate-200') : 'bg-transparent'} backdrop-blur-md`}>
                <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
                    <div className="font-bold text-xl tracking-tight cursor-pointer flex items-center gap-2" onClick={() => scrollToSection('home')}>
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono text-sm">N</span>
                        <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>NITHIWIT</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex gap-6 text-sm font-medium">
                            {Object.keys(t.nav).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => scrollToSection(key)}
                                    className={`transition-colors hover:text-cyan-500 ${activeSection === key ? 'text-cyan-500' : (isDarkMode ? 'text-slate-400' : 'text-slate-600')}`}
                                >
                                    {t.nav[key as keyof typeof t.nav]}
                                </button>
                            ))}
                        </div>
                        <div className="w-px h-4 bg-slate-700/50"></div>
                        <div className="flex gap-3">
                            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-200 text-slate-600'}`}>
                                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            <button onClick={() => setLang(lang === 'th' ? 'en' : 'th')} className={`px-2 py-1 text-xs font-mono rounded border transition-colors ${isDarkMode ? 'border-white/10 hover:border-cyan-500' : 'border-slate-300 hover:border-cyan-500'}`}>
                                {lang.toUpperCase()}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className={`fixed inset-0 z-40 md:hidden pt-20 px-6 ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
                    <div className="flex flex-col gap-6 text-lg font-medium">
                        {Object.keys(t.nav).map((key) => (
                            <button key={key} onClick={() => scrollToSection(key)} className="text-left border-b border-slate-800/50 pb-2">{t.nav[key as keyof typeof t.nav]}</button>
                        ))}
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[80vh] relative">
                <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none ${isDarkMode ? 'bg-blue-600' : 'bg-blue-300'}`}></div>
                <div className={`absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[100px] opacity-20 pointer-events-none ${isDarkMode ? 'bg-purple-600' : 'bg-purple-300'}`}></div>

                <div className="relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Available for work
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        {t.hero.greeting} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                            {t.hero.name}.
                        </span>
                    </h1>

                    <p className={`text-lg md:text-xl leading-relaxed mb-8 max-w-2xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {t.hero.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                            {t.hero.btnContact} <ArrowRight size={18} />
                        </button>
                        <a
                            href={RESUME_URL}
                            download
                            className={`px-6 py-3 rounded-lg font-medium border transition-colors flex items-center gap-2 ${isDarkMode ? 'border-white/20 hover:bg-white/5' : 'border-slate-300 hover:bg-slate-100'}`}
                        >
                            {t.hero.btnResume} <Download size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className={`py-20 px-6 border-y ${isDarkMode ? 'bg-[#181818] border-white/5' : 'bg-slate-100 border-slate-200'}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold mb-2">{t.skills.title}</h2>
                        <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>{t.skills.desc}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        {tools.map((tool, idx) => (
                            <div key={idx} className={`p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${isDarkMode ? 'bg-[#1e1e1e] border-white/5 hover:border-cyan-500/30' : 'bg-white border-slate-200 hover:border-cyan-500/50'}`}>
                                <div className={`mb-3 ${tool.color} group-hover:scale-110 transition-transform duration-300`}>{tool.icon}</div>
                                <h3 className="font-semibold text-sm">{tool.name}</h3>
                                <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{tool.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-sm font-mono text-cyan-500 mb-2">01. ABOUT ME</h2>
                        <h3 className="text-3xl font-bold mb-6">{t.about.title}</h3>
                        <div className={`space-y-4 text-lg leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            <p>{t.about.desc1}</p>
                            <p>{t.about.desc2}</p>
                        </div>

                        <div className="mt-8 flex gap-4 font-mono text-sm">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-cyan-500" /> Bangkok/Samut Prakan, TH
                            </div>
                            <div className="flex items-center gap-2">
                                <Briefcase size={16} className="text-purple-500" /> Open to work
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className={`relative p-8 rounded-2xl border ${isDarkMode ? 'bg-[#1e1e1e] border-white/10' : 'bg-white border-slate-200'}`}>
                            <code className="text-sm">
                                <span className="text-purple-400">const</span> <span className="text-yellow-400">profile</span> = {'{'}
                                <br />
                                &nbsp;&nbsp;name: <span className="text-green-400">"Nithiwit"</span>,
                                <br />
                                &nbsp;&nbsp;roles: [<span className="text-green-400">"IT Support"</span>, <span className="text-green-400">"Low-code Dev"</span>],
                                <br />
                                &nbsp;&nbsp;skills: [<span className="text-green-400">"Python"</span>, <span className="text-green-400">"Odoo"</span>, <span className="text-green-400">"n8n"</span>],
                                <br />
                                &nbsp;&nbsp;goal: <span className="text-green-400">"Digital Transformation"</span>
                                <br />
                                {'}'};
                            </code>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
                <h2 className="text-sm font-mono text-cyan-500 mb-2">02. WORK LOGS</h2>
                <h3 className="text-3xl font-bold mb-10">{t.experience.title}</h3>

                <div className="relative border-l border-slate-700/50 ml-3 space-y-12">
                    {experienceList.map((exp, idx) => (
                        <div key={idx} className="pl-8 relative group">
                            <span className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 transition-colors ${isDarkMode ? 'bg-[#121212] border-slate-600 group-hover:border-cyan-500 group-hover:bg-cyan-500' : 'bg-slate-50 border-slate-400 group-hover:border-cyan-500 group-hover:bg-cyan-500'}`}></span>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h4 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{exp.company}</h4>
                                <span className="text-xs font-mono py-1 px-2 rounded bg-white/5 text-slate-400">{exp.period}</span>
                            </div>
                            <div className="text-cyan-500 font-medium mb-3">{exp.role}</div>
                            <ul className={`space-y-2 list-disc list-outside ml-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                {exp.details.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`py-20 px-6 ${isDarkMode ? 'bg-[#181818]' : 'bg-slate-100'}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-sm font-mono text-cyan-500 mb-2">03. PORTFOLIO</h2>
                            <h3 className="text-3xl font-bold">{t.projects.title}</h3>
                            <p className={`mt-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{t.projects.subtitle}</p>
                        </div>
                        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" className="hidden md:flex items-center gap-2 text-sm hover:text-cyan-500 transition-colors">
                            View all on GitHub <ExternalLink size={14} />
                        </a>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {repos.map((repo) => (
                            <a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                className={`group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 flex flex-col h-full ${isDarkMode ? 'bg-[#1e1e1e] border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'bg-white border-slate-200 hover:border-cyan-500/50 hover:shadow-lg'}`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-white/5 text-cyan-400' : 'bg-slate-100 text-cyan-600'}`}>
                                        <Github size={20} />
                                    </div>
                                    <ExternalLink size={16} className="text-slate-500 group-hover:text-cyan-500 transition-colors" />
                                </div>

                                <h4 className="text-lg font-bold mb-2 group-hover:text-cyan-500 transition-colors">{repo.name}</h4>
                                <p className={`text-sm mb-6 line-clamp-3 flex-grow ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    {repo.description || "No description provided."}
                                </p>

                                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mt-auto pt-4 border-t border-white/5">
                                    <span className="flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                                        {repo.language}
                                    </span>
                                    <span>★ {repo.stargazers_count}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-20 px-6 max-w-4xl mx-auto">
                <h2 className="text-sm font-mono text-cyan-500 mb-2">04. EDUCATION</h2>
                <div className="grid gap-6">
                    <div className={`p-6 rounded-2xl border flex items-center gap-4 ${isDarkMode ? 'bg-[#1e1e1e] border-white/5' : 'bg-white border-slate-200'}`}>
                        <div className="p-3 bg-cyan-500/10 text-cyan-500 rounded-xl">
                            <GraduationCap size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Bangkok Suvarnabhumi University</h4>
                            <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Bachelor's degree (GPA 3.4)</p>
                            <span className="text-xs font-mono text-slate-500">2023 - 2025</span>
                        </div>
                    </div>
                    <div className={`p-6 rounded-2xl border flex items-center gap-4 ${isDarkMode ? 'bg-[#1e1e1e] border-white/5' : 'bg-white border-slate-200'}`}>
                        <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl">
                            <GraduationCap size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Bangkok of Business Administration Vocational College</h4>
                            <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>High Vocational Certificate</p>
                            <span className="text-xs font-mono text-slate-500">2018 - 2020</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 text-center">
                <h2 className="text-sm font-mono text-cyan-500 mb-4">05. WHAT'S NEXT?</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h3>
                <p className={`max-w-xl mx-auto mb-10 text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {t.contact.desc}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="mailto:jojonithiwit@gmail.com" className={`px-8 py-4 rounded-xl font-medium border transition-all hover:-translate-y-1 flex items-center justify-center gap-3 ${isDarkMode ? 'bg-[#1e1e1e] border-white/10 hover:border-cyan-500' : 'bg-white border-slate-200 hover:border-cyan-500'}`}>
                        <Mail size={20} className="text-cyan-500" /> jojonithiwit@gmail.com
                    </a>
                    <a href="tel:0969698991" className={`px-8 py-4 rounded-xl font-medium border transition-all hover:-translate-y-1 flex items-center justify-center gap-3 ${isDarkMode ? 'bg-[#1e1e1e] border-white/10 hover:border-green-500' : 'bg-white border-slate-200 hover:border-green-500'}`}>
                        <Phone size={20} className="text-green-500" /> 096-969-8991
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-8 text-center text-sm font-mono border-t ${isDarkMode ? 'border-white/5 text-slate-500' : 'border-slate-200 text-slate-400'}`}>
                <p>Designed & Built by Nithiwit Thienniem</p>
            </footer>
        </div>
    );
};

export default Portfolio;
