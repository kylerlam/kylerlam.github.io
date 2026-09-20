"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Icons } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { HapitCard } from "@/components/hapit-card";
import { useLanguage } from "@/components/language-provider";
import { getLocalizedResume } from "@/data/resume-translations";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { locale, t } = useLanguage();
  const resume = getLocalizedResume(locale);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={t.greeting}
              />
              <BlurFadeText className="max-w-[600px] md:text-xl text-neutral-500" delay={BLUR_FADE_DELAY} text={resume.description} />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <h2 className="text-2xl font-bold">{t.about}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-lg text-muted-foreground dark:prose-invert">{resume.summary}</Markdown>
        </BlurFade>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl font-bold">{t.education}</h2>
          </BlurFade>
          {resume.education.map((education, id) => (
            <BlurFade key={education.logoUrl} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects" aria-labelledby="projects-heading">
        <div className="flex w-full flex-col gap-8 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 id="projects-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.projects}</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                {t.projectsIntro}
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {resume.projects.map((project, id) => (
              <BlurFade key={project.href} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <ProjectCard
                  title={project.title}
                  href={project.href}
                  description={project.description}
                  tags={project.tags}
                  links={[
                    {
                      type: "GitHub",
                      href: project.href,
                      icon: <Icons.github className="size-3" aria-hidden="true" />,
                    },
                  ]}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hobbies">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.interests}</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.interestsIntro}
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {resume.hobbies.map((project, id) => (
                <BlurFade key={project.image} delay={BLUR_FADE_DELAY * 40 + id * 0.05}>
                  <HapitCard title={project.title} description={project.description} image={project.image} />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.contact}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.contactIntro}
                <Link href={DATA.contact.social.LinkedIn.url} className="text-blue-500 hover:underline">
                  LinkedIn
                </Link>
                {t.contactOr}
                <Link href={DATA.contact.social.Email.url} className="text-blue-500 hover:underline">
                  {t.email}
                </Link>
                {t.contactEnd}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
