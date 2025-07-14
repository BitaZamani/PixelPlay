export type PropsSearch = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  };


export type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
    params: Promise<{ [key: string]: string | string[] | undefined }>;
    
  };

  export type Game = {
    id: number;
    name: string;
    background_image: string;
    rating: number;
  };


  export type Category = {
    id: number;
    name: string;
    image_background: string;
  };