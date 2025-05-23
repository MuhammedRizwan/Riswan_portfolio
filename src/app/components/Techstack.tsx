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
        { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript' },
        { icon: <SiTypescript className="text-blue-800" />, name: 'TypeScript' },
        { icon: <SiNodedotjs className="text-green-500" />, name: 'Node.js' },
        { icon: <SiExpress className="text-gray-300" />, name: 'Express.js' },
        { icon: <SiMongodb className="text-green-600" />, name: 'MongoDB' },
        { icon: <SiNextdotjs className="text-white" />, name: 'Next.js' },
        { icon: <SiReact className="text-blue-400" />, name: 'React' },
        { icon: <SiSocketdotio className="text-white" />, name: 'Socket.io' },
        { icon: <SiWebrtc className="text-red-500" />, name: 'WebRTC' },
        { icon: <SiGit className="text-orange-500" />, name: 'Git' },
        { icon: <SiGithub className="text-gray-300" />, name: 'GitHub' },
        { icon: <SiCloudinary className="text-blue-700" />, name: 'Cloudinary' },
        { icon: <SiAmazonec2 className="text-yellow-500" />, name: 'AWS EC2' },
        { icon: <SiAwsamplify className="text-purple-400" />, name: 'Amplify' },
        { icon: <SiVercel className="text-white" />, name: 'Vercel' },
    ];

    return (
        <div className="bg-zinc-950 py-10 px-5 text-white">
            <h2 className="text-center text-lg  md:text-2xl font-bold mb-10">I know</h2>

            <div className="mx-auto max-w-6xl border border-zinc-700 rounded-xl p-6 bg-zinc-900 shadow-lg transition-transform hover:scale-[1.01]">
                <div className="flex flex-wrap justify-center gap-8">
                    {techList.map((tech, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col items-center space-y-2 animate-pulse`}
                            style={{ animationDelay: `${idx * 200}ms`, animationDuration: '1.2s' }}
                        >
                            <div className="text-xl transition-transform hover:scale-110">{tech.icon}</div>
                            <span className="text-xs">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
