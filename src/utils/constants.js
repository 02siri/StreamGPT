export const LOGO = "/logo.png";

export const USER_ICON = "/UserIcon.png";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 
    "Bearer " + process.env.REACT_APP_TMDB_KEY
  }
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGS = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "jap", name: "Japanese"},
];

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY