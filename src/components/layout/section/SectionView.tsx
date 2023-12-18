import { SectionPropsType } from "@/components/layout/section/type";

const SectionView :React.FC<SectionPropsType> = ({title, className, children}) => {
  return(
    <section className={`Section ${className ? className : ''}`}>
      <div className={`Section__inner ${className ? className+'__inner' : ''}`}>
        {
          title &&
          <h2 className={`Section__title ${className ? className+'__title' : ''}`}>{title}</h2>
        }
        {children}
      </div>
    </section>
  )
}

export default SectionView;