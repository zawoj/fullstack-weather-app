import {
  IsString,
  IsLatitude,
  IsLongitude,
  ValidateIf,
  IsOptional,
  IsIn,
} from 'class-validator';

export class FilterWeatherDto {
  @ValidateIf((o) => !o.lat && !o.lon)
  @IsString()
  location?: string;

  @ValidateIf((o) => !o.location)
  @IsLatitude()
  lat?: number;

  @ValidateIf((o) => !o.location)
  @IsLongitude()
  lon?: number;

  @IsOptional()
  @IsIn([
    'af',
    'al',
    'ar',
    'az',
    'bg',
    'ca',
    'cz',
    'da',
    'de',
    'el',
    'en',
    'eu',
    'fa',
    'fi',
    'fr',
    'gl',
    'he',
    'hi',
    'hr',
    'hu',
    'id',
    'it',
    'ja',
    'kr',
    'la',
    'lt',
    'mk',
    'no',
    'nl',
    'pl',
    'pt',
    'pt_br',
    'ro',
    'ru',
    'sv',
    'se',
    'sk',
    'sl',
    'sp',
    'es',
    'sr',
    'th',
    'tr',
    'ua',
    'uk',
    'vi',
    'zh_cn',
    'zh_tw',
    'zu',
  ])
  lang?: string;

  @IsOptional()
  @IsIn(['standard', 'metric', 'imperial'])
  units?: string;
}
