import {Mail, Github, Linkedin, Cloud, GraduationCap} from "lucide-react";
import { personalInfo, images, socialLinks } from "@/config/siteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faBluesky } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";


export default function SidebarProfile() {
  return (
    <div className="flex flex-col text-center items-center md:text-left">
      {/* Profile Photo */}
      <img
        className="mt-17 mb-7 shadow justify-center items-center flex rounded-2xl object-cover w-48 h-48"
        src={images.profileAvatar}
        alt={personalInfo.name}
      />

      {/* Name */}
      <div className="text-3xl text-stone-500 dark:text-blue-300 font-bold">
        {personalInfo.name}
      </div>

      {/* Pronouns */}
      <div className="text-xl mt-2 text-gray-600 dark:text-gray-400 mt-1">
        {personalInfo.pronouns}
      </div>

      {/* University */}
      <div className="text-center md:text-left text-xl text-gray-700 dark:text-gray-300 mt-3">
        {personalInfo.university}
      </div>

      {/* Location */}
      <div className="text-center md:text-left text-xl text-gray-600 dark:text-gray-400 mt-0">
        {personalInfo.location}
      </div>

      {/*/!* Email *!/*/}
      {/*<div className="email-item mt-4">*/}
      {/*  <div className="text-sm text-gray-700 dark:text-gray-300 font-mono">*/}
      {/*    {personalInfo.email}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Social Icons */}
      <div className="social-icons mt-6 flex justify-center md:justify-start gap-2">
        {socialLinks.googleScholar && (
            <a
                target="_blank"
                rel="noopener"
                href={socialLinks.googleScholar}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full
               text-stone-500 dark:text-blue-300
               hover:bg-white dark:hover:bg-gray-700
               hover:text-black dark:hover:text-white
               transition-colors duration-300"
                title="Google Scholar"
            >
                <GraduationCap className="w-8 h-8"/>
            </a>
        )}

          {socialLinks.github && (
              <a
                  target="_blank"
                  rel="noopener"
                  href={socialLinks.github}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full
             text-stone-500 dark:text-blue-300
             hover:bg-white dark:hover:bg-gray-700
             hover:text-black dark:hover:text-white
             transition-colors duration-300"
                  title="GitHub"
              >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl"/>
              </a>
          )}

          {socialLinks.linkedin && (
              <a
                  target="_blank"
                  rel="noopener"
                  href={socialLinks.linkedin}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full
               text-stone-500 dark:text-blue-300
               hover:bg-white dark:hover:bg-gray-700
               hover:text-black dark:hover:text-white
               transition-colors duration-300"
                  title="LinkedIn"
              >
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl"/>
              </a>
          )}
          {socialLinks.email && (
              <a
                  target="_blank"
                  rel="noopener"
                  href={socialLinks.email}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full
               text-stone-500 dark:text-blue-300
               hover:bg-white dark:hover:bg-gray-700
               hover:text-black dark:hover:text-white
               transition-colors duration-300"
                  title="Email"
              >
                  <FontAwesomeIcon icon={faEnvelope} className="text-2xl"/>
              </a>
          )}
      </div>
    </div>
  );
}
