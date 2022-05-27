import LanguageCodes from "./LanguageCodes";

import cvEN from '../assets/CV-EN.pdf';

const Resumes = {
  [LanguageCodes.English.toUpperCase()]: cvEN,
  [LanguageCodes.Spanish.toUpperCase()]: cvEN,
  [LanguageCodes.French.toUpperCase()]: cvEN,
  [LanguageCodes.German.toUpperCase()]: cvEN,
  [LanguageCodes.Portuguese.toUpperCase()]: cvEN
};

export default Resumes;