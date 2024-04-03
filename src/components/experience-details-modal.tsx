import { WORK_EXPERIENCES } from '@/work-experiences';
import ReactModal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { twMerge } from 'tailwind-merge';

interface Props {
  open: boolean;
  onClose: () => void;
  projectId: string | null;
}

const ExperienceDetailsModal = ({ open, onClose, projectId }: Props) => {
  const project = WORK_EXPERIENCES().find((exp) => exp.id === projectId);

  const renderArrow = (
    type: 'prev' | 'next',
    clickHandler: () => void,
    show: boolean
  ) => {
    return (
      <div
        className={twMerge(
          type === 'next' ? 'right-0' : 'left-0',
          'absolute z-30 top-0 px-5 h-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-100',
          show ? 'visible' : 'invisible'
        )}
        onClick={clickHandler}
      >
        <div
          className={twMerge(
            'bg-black opacity-70 w-12 h-12 flex items-center  justify-center rounded-full shadow-lg text-md text-white',
            type === 'prev' ? '-scale-x-100' : ''
          )}
        >
          ▸
        </div>
      </div>
    );
  };

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={onClose}
      style={{
        content: {
          inset: '20px'
        }
      }}
    >
      <div className="px-[10%]">
        <div className="w-full overflow-x-hidden">
          <Carousel
            centerMode
            centerSlidePercentage={100}
            emulateTouch
            infiniteLoop
            showArrows={true}
            showStatus={false}
            className="text-center"
            renderArrowNext={(clickHandler, hasNext) =>
              renderArrow('next', clickHandler, hasNext)
            }
            renderArrowPrev={(clickHandler, hasPrev) =>
              renderArrow('prev', clickHandler, hasPrev)
            }
            // renderArrowNext={(clickHandler, hasNext) => renderArrow()}
            // renderArrowPrev={(clickHandler, hasPrev)}
          >
            {project?.images?.map((path, idx) => (
              <div key={idx} className="w-full relative ">
                <img
                  alt={`${project.company} - Carousel image ${idx + 1}`}
                  src={path}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="py-10 flex flex-col gap-8">
          <div className="text-lg md:text-2xl font-black text-slate leading-none">
            {project?.company?.toUpperCase?.()}
          </div>
          <div className="text-md font-regular text-slate">
            {project?.description}
          </div>
          <div className="flex flex-row justify-between flex-wrap gap-x-5 gap-y-10">
            {project?.deliverable?.length ? (
              <div className="flex-1 flex flex-col gap-3">
                <div className="text-lg text-slate font-bold">
                  What&apos;s been delivered
                </div>
                <ul className="text-slate text-md">
                  {project?.deliverable?.map((deliverable, idx) => (
                    <li key={idx}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {project?.used_techs?.length ? (
              <div className="flex-1 flex flex-col gap-3">
                <div className="text-lg text-slate font-bold">Technologies</div>
                <ul className="text-slate text-md">
                  {project?.used_techs?.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="fixed top-[20px] right-[20px]">
        <div
          className="w-10 h-10 rounded-bl-md rounded-tr-md flex items-center justify-center cursor-pointer"
          style={{ backgroundColor: project?.color }}
          onClick={onClose}
        >
          <span className="text-white">✕</span>
        </div>
      </div>
    </ReactModal>
  );
};

export default ExperienceDetailsModal;
