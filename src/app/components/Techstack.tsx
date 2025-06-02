import {
    SiNodedotjs,
    SiMongodb,
    SiNextdotjs,
    SiReact,
    SiGit,
    SiAmazonec2,
    SiAwsamplify,
    SiVercel,
    SiGithub,
    SiExpress,
    SiSocketdotio,
    SiWebrtc,
    SiJavascript,
    SiTypescript,
    SiCloudinary,
} from 'react-icons/si';

export default function Techs() {
    const techList = [
        { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript', link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { icon: <SiTypescript className="text-blue-800" />, name: 'TypeScript', link: "https://www.typescriptlang.org/" },
        { icon: <SiNodedotjs className="text-green-500" />, name: 'Node.js', link: "https://nodejs.org/" },
        { icon: <SiExpress className="text-gray-300" />, name: 'Express.js', link: "https://expressjs.com/" },
        { icon: <SiMongodb className="text-green-600" />, name: 'MongoDB', link: "https://www.mongodb.com/" },
        { icon: <SiNextdotjs className="text-white" />, name: 'Next.js', link: "https://nextjs.org/" },
        { icon: <SiReact className="text-blue-400" />, name: 'React', link: "https://react.dev/" },
        { icon: <SiSocketdotio className="text-white" />, name: 'Socket.io', link: "https://socket.io/" },
        { icon: <SiWebrtc className="text-red-500" />, name: 'WebRTC', link: "https://webrtc.org/" },
        { icon: <SiGit className="text-orange-500" />, name: 'Git', link: "https://git-scm.com/" },
        { icon: <SiGithub className="text-gray-300" />, name: 'GitHub', link: "https://github.com/" },
        { icon: <SiCloudinary className="text-blue-700" />, name: 'Cloudinary', link: "https://cloudinary.com/" },
        { icon: <SiAmazonec2 className="text-yellow-500" />, name: 'AWS EC2', link: "https://aws.amazon.com/ec2/" },
        { icon: <SiAwsamplify className="text-purple-400" />, name: 'Amplify', link: "https://aws.amazon.com/amplify/" },
        { icon: <SiVercel className="text-white" />, name: 'Vercel', link: "https://vercel.com/" },
    ];

    return (
        <div className="bg-zinc-950 py-10 px-5 text-white">
            <h2 className="text-center text-lg md:text-2xl font-bold mb-10 saira_mol">I know</h2>

            <div className="mx-auto max-w-6xl border border-zinc-700 rounded-xl p-6 bg-zinc-900 shadow-lg transition-transform hover:scale-[1.01]">
                <div className="flex flex-wrap justify-center gap-6">
                    {techList.map((tech, idx) => (
                        <a
                            key={idx}
                            href={tech.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center space-y-2 animate-pulse cursor-pointer"
                            style={{ animationDelay: `${idx * 200}ms`, animationDuration: '1.2s' }}
                        >
                            <div className="text-xl transition-transform hover:scale-110">{tech.icon}</div>
                            <span className="text-xs">{tech.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}