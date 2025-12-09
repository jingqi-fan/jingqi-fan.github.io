import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { 
  personalInfo, 
  publications,
  academicService,
} from "@/config/siteConfig";

export default function MainContent() {
    const [copied, setCopied] = useState(false);
  return (
    <div className="w-full space-y-12">
      {/* Copy Toast */}
      {copied && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2
                     bg-green-600 text-white text-lg px-4 py-2
                     rounded-lg shadow-lg z-50 animate-fade-in"
        >
          ✓ Copy success
        </div>
      )}
      {/* About Me Section */}
      <section id="about">
        <h2 className="text-3xl font-semibold text-stone-500 dark:text-blue-300 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          About Me
        </h2>
        <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          <p>
            {personalInfo.aboutMe.intro}
          </p>
        </div>
      </section>

      {/* Publications Section */}
        <section id="publications">
            <h2 className="text-3xl font-semibold text-stone-500 dark:text-blue-300 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Publications
            </h2>
            {/*<p className="text-xs text-gray-500 dark:text-gray-400 mb-6 italic">*/}
            {/*  (*: equal contribution; †: corresponding author)*/}
            {/*</p>*/}
            <div className="space-y-6">
                {publications.map((pub) => (
                    <div key={pub.id} className="space-y-2">
                        {/* 标题 */}
                        <h3 className="text-xl font-semibold leading-snug text-gray-900 dark:text-gray-100">
                            {pub.title}
                        </h3>
                        {/* 作者（高亮自己的名字） */}
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            {pub.authors.split("Jingqi Fan").map((part, index, array) => (
                                <span key={index}>{part}{index < array.length - 1 &&
                                    <strong>Jingqi Fan</strong>} </span>
                            ))}
                        </p>
                        {/* 会议 + 年份 */}
                        <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                            {pub.venue}, {pub.year}
                        </p>
                        {/* 链接区域：Paper / Slides / BibTex */}
                        <div className="flex flex-wrap gap-4 mt-2 items-center">
                            {pub.links.map((link, idx) => {
                                // BibTex：复制内容
                                if (link.type === "bib") {
  return (
    <button
      key={idx}
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(link.content);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="text-lg font-medium text-stone-500 dark:text-blue-300
                 hover:text-gray-900 dark:hover:text-blue-200
                 transition-colors duration-300"
    >
      {link.text}
    </button>
  );
}

                                // PDF 文件：文件预览
                                if (link.type === "pdf") {
                                    return (
                                        <a
                                            key={idx}
                                            href={link.link}
                                            target="_blank"
                                            rel="noopener"
                                            className="text-lg font-medium text-stone-500 dark:text-blue-300
                     hover:text-gray-900 dark:hover:text-blue-200
                     transition-colors duration-300"
                                        >
                                            {link.text} {/* 可选加上小PDF图标 */}
                                        </a>
                                    );
                                }

                                // 外链网页：Paper / Webpage
                                if (link.type === "external") {
                                    return (
                                        <a
                                            key={idx}
                                            href={link.link}
                                            target="_blank"
                                            rel="noopener"
                                            className="text-lg font-medium text-stone-500 dark:text-blue-300
                     hover:text-gray-900 dark:hover:text-blue-200
                     transition-colors duration-300"
                                        >
                                            {link.text}
                                        </a>
                                    );
                                }

                                return null;
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>

      {/* Academic Service Section */}
      <section id="service">
        <h2 className="text-3xl font-semibold text-stone-500 dark:text-blue-300 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Academic Service
        </h2>
        <div className="space-y-3">
          {academicService.map((service) => (
            <div key={service.id} className="space-y-1">
              <p className="text-lg text-gray-900 dark:text-gray-100">
                <span className="font-semibold">{service.role}</span>{' '}
                {service.descriptionLink && service.linkText ? (
                  <>
                    {service.description.split(service.linkText)[0]}
                    <a href={service.descriptionLink} target="_blank" rel="noopener noreferrer" className="text-blue-900 dark:text-blue-300 hover:underline">
                      {service.linkText}
                    </a>
                    {service.description.split(service.linkText)[1]}
                  </>
                ) : (
                  service.description
                )}
                {service.githubBadge && (
                  <> <img src={service.githubBadge} alt="GitHub stars" className="inline-block ml-2" /></>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
