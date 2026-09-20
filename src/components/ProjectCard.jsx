import { ProjectArt } from './ProjectArt';
import { Arrow } from './Icons';

export function ProjectCard({ project, onOpen }) {
  return <button className={`project-card project-${project.id}`} onClick={()=>onOpen(project)} aria-label={`查看项目：${project.name}`}>
    <ProjectArt project={project}/>
    <div className="project-body"><div className="project-type">{project.type}<span>{project.date.split(' — ')[0]}</span></div><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><div className="project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="project-result"><strong>{project.stat}</strong><span>{project.unit}</span><Arrow diagonal/></div><span className="read-case">查看完整案例 <span>CASE STUDY ↗</span></span></div>
  </button>;
}
