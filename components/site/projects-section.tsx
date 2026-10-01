const projects = [
  { id: "01", title: "Pine Ridge House", place: "Алматы · Медеу", meta: "92 м² остекления · алюминий", image: "/assets/generated/hero-architecture.webp", span: "lg:col-span-7" },
  { id: "02", title: "Stone Courtyard", place: "Астана · Greenline", meta: "Панорамные порталы · 3,2 м", image: "/assets/generated/hero-architecture.webp", span: "lg:col-span-5" },
  { id: "03", title: "Lake Residence", place: "Бурабай", meta: "Тёплый алюминий · 68 м²", image: "/assets/generated/hero-architecture.webp", span: "lg:col-span-5" },
  { id: "04", title: "Quiet Villa", place: "Алматы · предгорья", meta: "Дерево + алюминий", image: "/assets/generated/hero-architecture.webp", span: "lg:col-span-7" },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#f3f1ec] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.24em] text-stone-500">Реализованные проекты</div>
            <h2 className="mt-3 max-w-4xl text-5xl font-medium leading-[.95] tracking-[-0.06em] text-stone-950 sm:text-6xl lg:text-7xl">
              Когда рама перестаёт быть границей.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-stone-600 lg:col-span-4 lg:col-start-9">
            Работаем с частной архитектурой, городскими квартирами и сложными панорамными проёмами. Подбираем систему под геометрию, климат и характер пространства.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {projects.map((project) => (
            <article key={project.id} className={project.span}>
              <div className="group relative aspect-[16/11] overflow-hidden rounded-[26px] bg-[#d8d5cf]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.035]"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/52 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
                  <div>
                    <div className="text-xs text-white/60">{project.id} · {project.place}</div>
                    <h3 className="mt-1 text-2xl font-medium tracking-[-0.035em]">{project.title}</h3>
                  </div>
                  <div className="hidden text-right text-xs text-white/65 sm:block">{project.meta}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
