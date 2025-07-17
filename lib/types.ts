import { ReactNode } from "react";

export type PropsSearch = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  };

export type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
    params: Promise<{ [key: string]: string | string[] | undefined }>;
    
  };

  interface Category  {
    count:number,
    results: {
      id: number;
      name: string;
      image_background: string;
      background_image:string
    }[]
  };
  export interface TypesGridProps{
    name: string,
    data:Category,
    page:number
    onPageChange?: (page: number) => void;
  }
 export interface Games {
    results: {
      id: number;
      name: string;
      metacritic:number,
      background_image:string
    }[]
  }
export interface GamesGridProps{
  count:number
  page:number,
  id?:number,
  urlBase:string
  games: Games
}
  interface Platform {
    id: number;
    name: string;
  };
  
  export interface GameDetailProps {
    data:{
      id:number;
      background_image: string;
      name: string;
      released: string;
      genres: { id: number; name: string }[];
      tba: boolean;
      metacritic: number;
      playtime: number;
      description_raw: string;
      platforms: { released_at: string; platform: Platform }[];
      publishers: { id: number; image_background: string; name: string }[];
    }
    screens:{
      results: {image:string, id:number}[]
    }
  };
  
  export type InputProps = {
    text: string;
    type: string;
    icon?: ReactNode;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    id: string;
  };

  export type ToolTipProps = {
    onClick?: ()=>void;
    content: string;
    trigger:ReactNode|string;
    className?: string;
  }

  export type CollectionGridProps = {
    games: {
      name: string;
      background_image: string;
      id: number;
    }[];
    length: number;
  };
  


export type ModalProps = {
trigger?: ReactNode| string 
title: string
isClose?: boolean
description: string
open: boolean;
onOpenChange: (open: boolean) => void;
}