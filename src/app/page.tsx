"use client";

// const ProjectCard = dynamic(() => import("@/components/project-card").then((mod) => mod.ProjectCard), { ssr: false });
import dynamic from "next/dynamic";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { HapitCard } from "@/components/hapit-card";
import { Marquee } from "@/components/marquee";
import {useRef} from "react"

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const stackRef = useRef<HTMLDivElement>(null)
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
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText className="max-w-[600px] md:text-xl text-neutral-500" delay={BLUR_FADE_DELAY} text={DATA.description} />
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
          <h2 className="text-2xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-lg text-muted-foreground dark:prose-invert">{DATA.summary}</Markdown>
        </BlurFade>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
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
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          {/* <BlurFade delay={BLUR_FADE_DELAY * 11}> */}
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              // <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 17 + id * 0.05}>
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="techniques">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tech Stack</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I use these tools to build innovative web applications and other artifacts.
                </p>
              </div>
              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <BlurFade delay={BLUR_FADE_DELAY * 14}>
                  <div ref={stackRef}>
                    <Marquee className="[--duration:100s] mt-8" scrollTargetRef={stackRef} />
                  </div>
                </BlurFade>
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                  {/* <BlurFade delay={BLUR_FADE_DELAY * 15}> */}
                  {/* <div className="md-8"> */}
                  {/* <Button variant={"outline"} size={"icon"}></Button> */}
                  {/* </div> */}
                  {/* </BlurFade> */}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="hobbies">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My favorite things</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A list of a few things Iâ€™d like to do â€?they may not happen, but hopefully soon.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hobbies.map((project, id) => (
                // <BlurFade key={project.title ?? id} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                <BlurFade key={project.title ?? id} delay={BLUR_FADE_DELAY * 40 + id * 0.05}>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Feel free to get in touch via{" "}
                <Link href={DATA.contact.social.LinkedIn.url} className="text-blue-500 hover:underline">
                  LinkedIn
                </Link>{" "}
                or{" "}
                <Link href={DATA.contact.social.Email.url} className="text-blue-500 hover:underline">
                  Email
                </Link>{" "}
                and I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
