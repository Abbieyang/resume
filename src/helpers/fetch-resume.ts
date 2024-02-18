// import fetch from 'cross-fetch';
import _ from 'lodash-es';
import type { ResumeConfig } from '@/components/types';
// import { customAssign } from './customAssign';
import resume from './resume.json';

export async function fetchResume(
  lang: string,
  branch: string,
  user: string
): Promise<ResumeConfig> {
  console.log('ylog:12-bb387c-resume', resume);
  return resume as any;
  // return fetch(
  //   `https://raw.githubusercontent.com/${user}/${user}/${branch}/resume.json`
  // )
  //   .then(data => {
  //     if (data.status !== 200) {
  //       return Promise.reject(new Error());
  //     }
  //     console.log('ylog:21-fee6e3-data.json()', data.json())
  //     return data.json();
  //   })
  //   .then(data => {
  //     return _.omit(customAssign({}, data, _.get(data, ['locales', lang])), [
  //       'locales',
  //     ]);
  //   });
}
