import { CaseStudy } from './CaseStudy';
import { projects, experience } from '../data/projects';
import '../siyuan.css';
export default function LazyCaseStudy({ projectId, onClose }) {
  const project = [...projects, experience].find(item=>item.id===projectId);
  return <CaseStudy project={project} onClose={onClose}/>;
}
