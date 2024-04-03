import { HexColor, TExperienceType, TUrl } from '../../types';
import { twMerge } from 'tailwind-merge';

interface Props {
  index: number;
  type: TExperienceType;
  logo: TUrl;
  company: string;
  role?: string;
  color: HexColor;
  companyFontSize?: string;
}

const ExperienceCard = ({ logo, company, color, role, index, type }: Props) => {
  const rotation = [
    'hover:rotate-card-1',
    'hover:rotate-card-2',
    'hover:rotate-card-3',
    'hover:rotate-card-4'
  ];

  const quickFit = (text: string) => {
    if (text.length > 8) {
      return 'text-lg';
    }
    return 'text-lg';
  };

  return (
    <div
      className={twMerge(
        'group/card relative w-80 h-80 rounded-xl shadow-experience-card flex justify-center items-center overflow-hidden hover:scale-110 transition-transform duration-200 cursor-pointer',
        rotation[index]
      )}
    >
      <img src={logo} alt={`Logo de ${company}`} width={194} height={194} />

      <div
        className="absolute inset-0 origin-center translate-y-full group-hover/card:translate-y-0 duration-200 transition-transform"
        // className="absolute inset-0 origin-center scale-0 group-hover/card:scale-100 duration-200 transition-transform"
        style={{ backgroundColor: color }}
      >
        <div className=" flex flex-col justify-center items-center w-full h-full px-4">
          <h3
            className={twMerge(
              'font-black text-white text-center leading-tight',
              quickFit(company)
            )}
          >
            {company.toUpperCase()}
          </h3>
          <div className="font-regular text-md text-white text-center leading-6">
            {type === 'work' ? role : 'Side project'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
