import { ReactElement } from 'react';

export type TUrl = string;
export type HexColor = string;
export type TExperienceType = 'work' | 'personal';

export interface IExperienceBase {
  id: string;
  slug: string;
  company: string;
  logo: TUrl;
  color: HexColor;
  images: string[];
  description: string | ReactElement;
  deliverable?: string[];
  used_techs?: string[];
}

export interface IWorkExperienceResource extends IExperienceBase {
  type: 'work';
  role: string;
}

export interface IPersonalExperienceResource extends IExperienceBase {
  type: 'personal';
}

export type IExperienceResource =
  | IWorkExperienceResource
  | IPersonalExperienceResource;
