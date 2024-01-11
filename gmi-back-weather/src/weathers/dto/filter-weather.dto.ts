import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsLatitude,
  IsLongitude,
  ValidateIf,
  IsOptional,
  IsIn,
} from 'class-validator';
import { UnitsEnum } from 'types/API';

export class FilterWeatherDto {
  @ApiProperty({
    description: 'City name',
    example: 'Warsaw',
    format: 'string',
  })
  @ValidateIf((o) => !o.lat && !o.lon)
  @IsString()
  location?: string;

  @ApiProperty({
    description: 'Latitude',
    example: 52.2298,
    format: 'number',
  })
  @ValidateIf((o) => !o.location)
  @IsLatitude()
  lat?: number;

  @ApiProperty({
    description: 'Longitude',
    example: 21.0118,
    format: 'number',
  })
  @ValidateIf((o) => !o.location)
  @IsLongitude()
  lon?: number;

  @ApiProperty({
    description: 'Language',
    example: 'en',
    format: 'string',
  })
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

  @ApiProperty({
    description: 'Units',
    example: 'metric',
    enum: ['standard', 'metric', 'imperial'],
  })
  @IsOptional()
  @IsIn(['standard', 'metric', 'imperial'])
  units?: UnitsEnum = UnitsEnum.METRIC;
}
