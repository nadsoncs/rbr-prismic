import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Numbers } from "@/components/Numbers";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Testimonial } from "@/components/Testimonial";
import { Header } from "@/components/Header";
import { getInformation, getProjects } from "./_services/notion";
import { Project } from "@/components/Project";

export default async function Home() {
  const information = await getInformation();
  const projects = await getProjects();
  const lastProjects = projects.slice(0, 3)

  return (
    <div className="bg-white">
      <div className="relative">
        <Header phone={information.phone}/>
        <main>
          <div id="header-full" className="relative w-full">
            <Hero slogan={information.slogan} />
            <Numbers />
          </div>
          <Services />
          <Testimonial />
          <Cta phone={information.phone}/>
          <About
            about={information.about}
            aboutBy={information.about_by}
            aboutRole={information.about_role}
          />
          <Projects>
            {lastProjects.map((project) => (
              <Project
                key={project.id}
                slug={project.slug}
                name={project.name}
                description={project.description}
                image={project.image}
              />
            ))}
          </Projects>
        </main>
        <Footer addr={information.addr} />
      </div>
    </div>
  );
}
