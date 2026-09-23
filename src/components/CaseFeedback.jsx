import { Component, useEffect, useRef } from 'react';
export function CaseFeedback({ name, onClose, error = false }) {
  const dialog = useRef(null);
  useEffect(() => {
    const node = dialog.current;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    node.showModal();
    return () => { node.close(); document.body.style.overflow = overflow; };
  }, []);
  return <dialog ref={dialog} className="case-dialog" aria-label={name} onCancel={event=>{event.preventDefault();onClose();}}>
    <div className="case-toolbar"><span className="case-brand">ZTY</span><span className="case-toolbar-title">{name}</span><button className="case-close" onClick={onClose} autoFocus>返回作品集 <span>×</span></button></div>
    <div className="case-inner" style={{paddingTop:60}}><p role={error?'alert':'status'}>{error?'案例暂时未能加载，请刷新后重试。':'正在打开完整案例…'}</p>{error&&<button className="button primary" onClick={()=>window.location.reload()}>刷新重试</button>}</div>
  </dialog>;
}
export class CaseBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <CaseFeedback name={this.props.name} onClose={this.props.onClose} error/> : this.props.children; }
}
