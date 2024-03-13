import { useLayout } from '../layout/core'
import { ThemeModeComponent } from '../assets/ts/layout'

export const toAbsoluteUrl = (pathname: string) => process.env.PUBLIC_URL + pathname

export const useIllustrationsPath = (illustrationName: string): string => {
  const { config } = useLayout()

  const extension = illustrationName.substring(
    illustrationName.lastIndexOf('.'),
    illustrationName.length
  )
  const illustration =
    ThemeModeComponent.getMode() === 'dark'
      ? `${illustrationName.substring(0, illustrationName.lastIndexOf('.'))}-dark`
      : illustrationName.substring(0, illustrationName.lastIndexOf('.'))
  return toAbsoluteUrl(
    `/media/illustrations/${config.illustrations?.set}/${illustration}${extension}`
  )
}


export function formatPhoneNumber(phone?: string, country?: string): string {
  if (!phone) return ''
  // Define a map of country codes to their respective country-specific formatting rules
  const countryFormats: { [key: string]: string } = {
    'tn': '+216 NN NNN NNN', // Tunisia format
    // Add more country formats as needed
  };

  const format = 'NN NNN NNN'

  // Check if the provided country code is supported
  if (country && countryFormats.hasOwnProperty(country)) {
    const format = countryFormats[country];
    let formattedPhone = format;
    // Replace 'N' characters in the format with digits from the phone number
    phone.split('').forEach((digit) => {
      formattedPhone = formattedPhone.replace('N', digit);
    });
    // Replace any remaining 'N' characters with spaces
    formattedPhone = formattedPhone.replace(/N/g, ' ');
    return formattedPhone;
  }

  else if (!country) {
    let formattedPhone = format;
    // Replace 'N' characters in the format with digits from the phone number
    phone.split('').forEach((digit) => {
      formattedPhone = formattedPhone.replace('N', digit);
    });
    // Replace any remaining 'N' characters with spaces
    formattedPhone = formattedPhone.replace(/N/g, ' ');
    return formattedPhone;
  }

  else {
    // Handle unsupported country codes
    throw new Error(`Country code '${country}' is not supported.`);
  }
}

